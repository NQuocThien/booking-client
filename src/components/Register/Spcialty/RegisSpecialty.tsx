"use client";
import { regisVi } from "@/locales/vi/Facility";
import {
  IActionRegis,
  IStateRegister,
  handleChangeProfileShare,
  handleChangeServiceState,
  handleChangeSpecialty,
  handleSetRegisSpecialty,
} from "../reducer";
import ListRegisSpecialty from "./ListRegisSpcialty";
import {
  EDayOfWeed,
  ETypeOfService,
  MedicalSpecialties,
  Register,
  ScheduleInput,
  SessionInput,
  useCreateRegisterMedicalSpecialtyMutation,
  useGetAllRegisOfServiceLazyQuery,
} from "@/graphql/webbooking-service.generated";
import DateSession from "../DateSession/DateSession";
import ListProfile from "../DateSession/ListProfile";
import { useEffect, useState } from "react";
import { Session } from "@/graphql/webbooking-service.generated";
import { getEnumValueDayOfWeek } from "@/utils/getData";
import { showToast } from "@/components/subs/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { ETypeOfServiceParameters } from "@/assets/contains/emun";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { checkExceptions } from "@/utils/tools";

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
  const inforUser = useSelector((state: RootState) => state.client.inforUser);
  // =================================================================
  const [getRegisPending, { data: dataRegis, loading: loadingRegis }] =
    useGetAllRegisOfServiceLazyQuery();

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
      const regis: Register[] = dataRegis.getAllRegisOfService;
      const sessionsExist: Session[] = regis.map((s) => s.session);

      const sessionFiltered: Session[] =
        schedule?.sessions.filter((ss) => {
          const count = sessionsExist.filter(
            (s) => s.startTime === ss.startTime && s.endTime === ss.endTime
          ).length;
          const maxCount: number =
            state.specialty?.workSchedule?.numberSlot || 10;
          console.log("test: ", count, maxCount);

          if (
            checkExceptions(
              state.regisSpecialty.date,
              count,
              ss,
              schedule.sessions
            ) === false
          )
            return false;
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
    const specialtyDayOff = workSchedule?.dayOff;
    const dayOffFacility = state.facility?.dateOff;
    const find = workSchedule?.schedule?.findIndex(
      (item) => item.dayOfWeek === dayOfWeek
    );

    if (dayOffFacility) {
      const selectedYear = date.getFullYear();
      const selectedMonth = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần +1
      const selectedDay = date.getDate();
      const selectedDateString = `${selectedYear}-${String(
        selectedMonth
      ).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
      const isExistFacility = dayOffFacility.find((df) => {
        return df.slice(0, 10) === selectedDateString;
      });
      if (specialtyDayOff) {
        const isExist = specialtyDayOff.find((df) => {
          return df.slice(0, 10) === selectedDateString;
        });
        if (isExist) return false;
      }
      if (isExistFacility) return false;
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
      fetchPolicy: "no-cache",
      variables: {
        input: {
          date: date,
          type: ETypeOfService.Specialty,
          serviceId: state.regisSpecialty.specialtyId,
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
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === EDayOfWeed.Monday)
        );
        break;
      case 2:
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === EDayOfWeed.Tuesday)
        );
        break;
      case 3:
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === EDayOfWeed.Wednesday)
        );
        break;
      case 4:
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === EDayOfWeed.Thursday)
        );
        break;
      case 5:
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === EDayOfWeed.Friday)
        );
        break;
      case 6:
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === EDayOfWeed.Saturday)
        );
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
          onClickProfile={(profile, share) => {
            if (share)
              dispatch(
                handleSetRegisSpecialty({
                  ...state.regisSpecialty,
                  profileId: profile.id,
                  createBy: inforUser?.customer?.customerKey,
                })
              );
            else
              dispatch(
                handleSetRegisSpecialty({
                  ...state.regisSpecialty,
                  profileId: profile.id,
                })
              );
          }}
          onChangeProfileShare={(share) => {
            dispatch(handleChangeProfileShare(share));
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
                  showToast(e.message, "error");
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
