"use client";
import { regisVi } from "@/locales/vi/Facility";
import {
  IActionRegis,
  IStateRegister,
  handleChangeServiceState,
  handleChangeSpecialty,
  handleSetRegisSpecialty,
} from "../reducer";
import ListRegisSpecialty from "./ListRegisSpcialty";
import {
  EDayOfWeed,
  MedicalSpecialties,
  Register,
  ScheduleInput,
  SessionInput,
  useCreateRegisterMedicalSpecialtyMutation,
  useGetAllRegisPendingLazyQuery,
} from "@/graphql/webbooking-service.generated";
import DateSession from "../DateSession/DateSession";
import ListProfile from "../DateSession/ListProfile";
import { useEffect, useState } from "react";
import { Session } from "@/graphql/webbooking-service.generated";
import { getEnumValueDayOfWeek } from "@/utils/getData";
import { showToast } from "@/components/subs/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { ETypeOfServiceParameters } from "@/assets/contains/emun";

interface IProps {
  lan: typeof regisVi;
  state: IStateRegister;
  dispatch: React.Dispatch<IActionRegis>;
}
function RegisSpecialty(props: IProps) {
  const { lan, state, dispatch } = props;
  const [schedule, setSchedule] = useState<ScheduleInput>();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [listSchedule, setListSchedule] = useState<ScheduleInput[]>([]);
  const router = useRouter();
  const params = useSearchParams();
  // =================================================================
  const [getRegisPending, { data: dataRegis, loading: loadingRegis }] =
    useGetAllRegisPendingLazyQuery();

  const [regisSpecialty, { loading: loadingRegisSpecialty }] =
    useCreateRegisterMedicalSpecialtyMutation();

  // =================================================================

  useEffect(() => {
    if (state.specialty?.workSchedule) {
      const schedulesInput: ScheduleInput[] =
        state.specialty?.workSchedule.schedule.map((s) => ({
          ...s,
          dayOfWeek: getEnumValueDayOfWeek(s.dayOfWeek),
        }));

      setListSchedule(schedulesInput);
    }
  }, [state.specialty?.workSchedule]);

  useEffect(() => {
    if (dataRegis) {
      const regis: Register[] = dataRegis.getAllRegisPending;
      const sessionsExist: Session[] = regis.map((s) => s.session);

      const sessionFiltered: Session[] =
        schedule?.sessions.filter((ss) => {
          const count = sessionsExist.filter(
            (s) => s.startTime === ss.startTime && s.endTime === ss.endTime
          ).length;
          const maxCount: number =
            state.specialty?.workSchedule?.numberSlot || 10;
          console.log("test: ", count, maxCount);
          return count <= maxCount;
        }) || [];
      setSessions(sessionFiltered);
    }
  }, [dataRegis]);
  // =================================================================
  const filterWeekdays = (date: Date): boolean => {
    // Kiểm tra xem ngày đó có phải là ngày trong quá khứ không
    const currentDate = new Date();
    const maxDate = new Date(currentDate.getTime() + 22 * 24 * 60 * 60 * 1000);
    if (date < currentDate || date > maxDate) {
      return false; // Nếu là ngày trong quá khứ, trả về false để ẩn ngày đó
    }

    const day = date.getDay();
    const dayOfWeek = ["Chủ nhật", "2", "3", "4", "5", "6", "7"][day];

    const workSchedule = state.specialty?.workSchedule;
    const dayOffFacility = state.facility?.dateOff;
    const find = workSchedule?.schedule?.findIndex(
      (item) => item.dayOfWeek === dayOfWeek
    );

    if (
      workSchedule &&
      workSchedule.dayOff &&
      workSchedule.dayOff.includes(dayOfWeek)
    ) {
      return false;
    }

    if (dayOffFacility && dayOffFacility.includes(dayOfWeek)) {
      return false;
    }

    // Trả về true nếu ngày đó có trong lịch làm việc của chuyên khoa, ngược lại trả về false
    return find !== -1;
  };

  const handleChangeDatePicker = (date: Date) => {
    dispatch(
      handleSetRegisSpecialty({
        ...state.regisSpecialty,
        date: date,
      })
    );
    getRegisPending({
      variables: {
        input: {
          date: date,
          specialtyId: state.regisSpecialty.specialtyId,
        },
      },
    });
    switch (date.getDay()) {
      case 0:
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === EDayOfWeed.Sunday)
        );
        break;
      case 1:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Monday));
        break;
      case 2:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Tuesday));
        break;
      case 3:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Wednesday));
        break;
      case 4:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Thursday));
        break;
      case 5:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Friday));
        break;
      case 6:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Saturday));
        break;
    }
  };
  // =================================================================
  const handleClickSpecialty = (specialty: MedicalSpecialties) => {
    dispatch(handleChangeSpecialty(specialty));
    dispatch(
      handleSetRegisSpecialty({
        ...state.regisSpecialty,
        specialtyId: specialty.id,
      })
    );
  };

  if (state.regisSpecialty.specialtyId === "") {
    return (
      <div className="session px-2">
        {state.regisSpecialty.specialtyId === "" && (
          <ListRegisSpecialty
            onBack={() => {
              if (params.get("type") === ETypeOfServiceParameters.Specialty) {
                router.back();
              }
              dispatch(
                handleChangeServiceState({
                  ...state.svrState,
                  specialty: false,
                })
              );
            }}
            facilityId={state.facility?.id}
            onClick={handleClickSpecialty}
            lan={lan}
          />
        )}
      </div>
    );
  } else if (
    state.regisSpecialty.date === "" ||
    state.regisSpecialty.session.startTime === "" ||
    state.regisSpecialty.session.endTime === ""
  ) {
    return (
      <div className="session px-2">
        <DateSession
          lan={lan}
          state={state}
          dispatch={dispatch}
          sessions={sessions}
          regisLoading={loadingRegis}
          onClickSession={(session) => {
            dispatch(
              handleSetRegisSpecialty({
                ...state.regisSpecialty,
                session: {
                  startTime: session.startTime,
                  endTime: session.endTime,
                } as SessionInput,
              })
            );
          }}
          filterDatePicker={filterWeekdays}
          onChangeDate={handleChangeDatePicker}
          onClickBack={() => {
            dispatch(
              handleSetRegisSpecialty({
                ...state.regisSpecialty,
                specialtyId: "",
              })
            );
          }}
        />
      </div>
    );
  }
  return (
    <div className="session px-2">
      {state.regisSpecialty.specialtyId !== "" && (
        <ListProfile
          state={state}
          onClickProfile={(profile) => {
            dispatch(
              handleSetRegisSpecialty({
                ...state.regisSpecialty,
                profileId: profile.id,
              })
            );
          }}
          onRegis={async () => {
            if (state.svrState.specialty === true) {
              await regisSpecialty({
                variables: {
                  input: state.regisSpecialty,
                },
              })
                .then(() => {
                  showToast(lan.messRegisSuccess);
                  router.push("/");
                })
                .catch((e) => {
                  showToast(lan.messRegisError);
                  console.log(e);
                });
            }
          }}
          onBack={() => {
            dispatch(
              handleSetRegisSpecialty({
                ...state.regisSpecialty,
                date: "",
                session: {
                  endTime: "",
                  startTime: "",
                },
              })
            );
          }}
        />
      )}
    </div>
  );
}
export default RegisSpecialty;
