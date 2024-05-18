"use client";
import { regisVi } from "@/locales/vi/Facility";
import {
  IActionRegis,
  IStateRegister,
  handleChangeDoctor,
  handleChangeProfileShare,
  handleChangeServiceState,
  handleSetRegisDoctor,
} from "../reducer";
import {
  Doctor,
  EDayOfWeed,
  Register,
  ScheduleInput,
  SessionInput,
  useCreateRegisterDoctorMutation,
  useGetAllRegisOfServiceLazyQuery,
} from "@/graphql/webbooking-service.generated";
import DateSession from "../DateSession/DateSession";
import ListProfile from "../DateSession/ListProfile";
import { useEffect, useState } from "react";
import { Session } from "@/graphql/webbooking-service.generated";
import { getEnumValueDayOfWeek } from "@/utils/getData";
import { showToast } from "@/components/subs/toast";
import { useRouter, useSearchParams } from "next/navigation";
import ListRegisDoctor from "./ListRegisDoctor";
import useNProgress from "@/hooks/useNProgress";
import { format } from "date-fns";
import { ETypeOfServiceParameters } from "@/assets/contains/emun";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
interface IProps {
  lan: typeof regisVi;
  state: IStateRegister;
  dispatch: React.Dispatch<IActionRegis>;
}
function RegisDoctorCpn(props: IProps) {
  const { lan, state, dispatch } = props;
  const [schedule, setSchedule] = useState<ScheduleInput>();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [listSchedule, setListSchedule] = useState<ScheduleInput[]>([]);
  const params = useSearchParams();
  const router = useRouter();
  const inforUser = useSelector((state: RootState) => state.client.inforUser);
  // =================================================================
  const [getRegisPending, { data: dataRegis, loading: loadingRegis }] =
    useGetAllRegisOfServiceLazyQuery({
      fetchPolicy: "no-cache",
    });

  const [regisDoctor, { loading: loadingRegisDoctor }] =
    useCreateRegisterDoctorMutation();

  // =================================================================

  // useEffect(() => {
  useNProgress(loadingRegisDoctor || loadingRegis);
  // }, [loadingRegis, loadingRegisDoctor]);

  useEffect(() => {
    if (state.doctor?.workSchedule) {
      const schedulesInput: ScheduleInput[] =
        state.doctor?.workSchedule.schedule.map((s) => ({
          ...s,
          dayOfWeek: getEnumValueDayOfWeek(s.dayOfWeek),
        }));

      setListSchedule(schedulesInput);
    }
  }, [state.doctor?.workSchedule]);

  useEffect(() => {
    if (dataRegis) {
      const regis: Register[] = dataRegis.getAllRegisOfService;
      const sessionsExist: Session[] = regis.map((s) => s.session);

      const sessionFiltered: Session[] =
        schedule?.sessions.filter((ss) => {
          const count = sessionsExist.filter(
            (s) => s.startTime === ss.startTime && s.endTime === ss.endTime
          ).length;
          const maxCount: number = state.doctor?.workSchedule?.numberSlot || 10;
          console.log("count regis doctor: ", count, maxCount);
          return count < maxCount;
        }) || [];

      setSessions(sessionFiltered); // những session hợp lệ
    }
  }, [dataRegis]);
  // =================================================================
  const filterWeekdays = (date: Date): boolean => {
    const currentDate = new Date();
    const maxDate = new Date(currentDate.getTime() + 22 * 24 * 60 * 60 * 1000);
    if (date < currentDate || date > maxDate) {
      return false;
    }

    const day = date.getDay();
    const dayOfWeek = ["Chủ nhật", "2", "3", "4", "5", "6", "7"][day];

    const workSchedule = state.doctor?.workSchedule;
    const dayOffDoctor = workSchedule?.dayOff;
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
      if (dayOffDoctor) {
        const isExist = dayOffDoctor.find((df) => {
          return df.slice(0, 10) === selectedDateString;
        });
        if (isExist) return false;
      }
      if (isExistFacility) return false;
    }
    return find !== -1;
  };

  const handleChangeDatePicker = (date: Date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    dispatch(
      handleSetRegisDoctor({
        ...state.regisDoctor,
        date: formattedDate,
      })
    );
    getRegisPending({
      variables: {
        input: {
          date: formattedDate,
          doctorId: state.regisDoctor.doctorId,
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
  const handleClickDoctor = (doctor: Doctor) => {
    dispatch(handleChangeDoctor(doctor));
    dispatch(
      handleSetRegisDoctor({
        ...state.regisDoctor,
        doctorId: doctor.id,
      })
    );
  };

  if (state.regisDoctor.doctorId === "") {
    return (
      <div className="session px-2">
        {state.regisDoctor.doctorId === "" && state.facility?.id && (
          <ListRegisDoctor
            onBack={() => {
              if (params.get("type") === ETypeOfServiceParameters.Doctor) {
                router.back();
              }
              dispatch(
                handleChangeServiceState({
                  ...state.svrState,
                  doctor: false,
                })
              );
            }}
            onClick={handleClickDoctor}
            lan={lan}
            facilityId={state.facility?.id}
          />
        )}
      </div>
    );
  } else if (
    state.regisDoctor.date === "" ||
    state.regisDoctor.session.startTime === "" ||
    state.regisDoctor.session.endTime === ""
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
              handleSetRegisDoctor({
                ...state.regisDoctor,
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
              handleSetRegisDoctor({
                ...state.regisDoctor,
                doctorId: "",
                date: "",
              })
            );
            setSessions([]);
          }}
        />
      </div>
    );
  }
  return (
    <div className="session px-2">
      {state.regisDoctor.doctorId !== "" && (
        <ListProfile
          state={state}
          onClickProfile={(profile, share) => {
            if (share)
              dispatch(
                handleSetRegisDoctor({
                  ...state.regisDoctor,
                  profileId: profile.id,
                  createBy: inforUser?.customer?.customerKey,
                })
              );
            else {
              dispatch(
                handleSetRegisDoctor({
                  ...state.regisDoctor,
                  profileId: profile.id,
                })
              );
            }
          }}
          onChangeProfileShare={(share) => {
            dispatch(handleChangeProfileShare(share));
          }}
          onRegis={async () => {
            if (state.svrState.doctor === true) {
              await regisDoctor({
                variables: {
                  input: state.regisDoctor,
                },
              })
                .then(() => {
                  showToast(lan.messRegisSuccess);
                  router.push("/");
                })
                .catch((e) => {
                  if (e.message === "!Regis Exist") {
                    showToast(lan.messRegisErrorExists, "error");
                  } else showToast(e.message, "error");
                  console.log(e);
                });
            }
          }}
          onBack={() => {
            dispatch(
              handleSetRegisDoctor({
                ...state.regisDoctor,
                date: "",
                session: {
                  endTime: "",
                  startTime: "",
                },
              })
            );
            setSessions([]);
          }}
        />
      )}
    </div>
  );
}
export default RegisDoctorCpn;
