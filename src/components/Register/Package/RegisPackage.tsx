"use client";
import { regisVi } from "@/locales/vi/Facility";
import {
  IActionRegis,
  IStateRegister,
  handleChangePackage,
  handleChangeServiceState,
  handleSetRegisPackage,
} from "../reducer";
import {
  EDayOfWeed,
  Package,
  Register,
  ScheduleInput,
  SessionInput,
  useCreateRegisterPackageMutation,
  useGetAllRegisPendingLazyQuery,
} from "@/graphql/webbooking-service.generated";
import DateSession from "../DateSession/DateSession";
import ListProfile from "../DateSession/ListProfile";
import { useEffect, useState } from "react";
import { Session } from "@/graphql/webbooking-service.generated";
import { getEnumValueDayOfWeek } from "@/utils/getData";
import { showToast } from "@/components/subs/toast";
import { useRouter, useSearchParams } from "next/navigation";
import ListRegisPackage from "./ListRegisPackage";
import useNProgress from "@/hooks/useNProgress";
import { ETypeOfServiceParameters } from "@/assets/contains/emun";

interface IProps {
  lan: typeof regisVi;
  state: IStateRegister;
  dispatch: React.Dispatch<IActionRegis>;
}
function RegisPackageCpn(props: IProps) {
  const { lan, state, dispatch } = props;
  const [schedule, setSchedule] = useState<ScheduleInput>();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [listSchedule, setListSchedule] = useState<ScheduleInput[]>([]);
  const router = useRouter();
  const params = useSearchParams();
  // =================================================================
  const [getRegisPending, { data: dataRegis, loading: loadingRegis }] =
    useGetAllRegisPendingLazyQuery();

  const [regisPackage, { loading: loadingRegisPackage }] =
    useCreateRegisterPackageMutation();

  // =================================================================

  useEffect(() => {
    // set list schedule khi chọn dịch vụ
    useNProgress(loadingRegisPackage || loadingRegis);
  }, [loadingRegis, loadingRegisPackage]);

  useEffect(() => {
    if (state.package?.workSchedule) {
      const schedulesInput: ScheduleInput[] =
        state.package?.workSchedule.schedule.map((s) => ({
          ...s,
          dayOfWeek: getEnumValueDayOfWeek(s.dayOfWeek),
        }));

      setListSchedule(schedulesInput);
    }
  }, [state.package?.workSchedule]);

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
            state.package?.workSchedule?.numberSlot || 10;
          console.log("count regis: ", count, maxCount);
          return count <= maxCount;
        }) || [];
      setSessions(sessionFiltered);
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

    const workSchedule = state.package?.workSchedule;
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
      handleSetRegisPackage({
        ...state.regisPackage,
        date: date,
      })
    );
    getRegisPending({
      variables: {
        input: {
          date: date,
          packageId: state.regisPackage.packageId,
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
  const handleClickPackage = (p: Package) => {
    dispatch(handleChangePackage(p));
    dispatch(
      handleSetRegisPackage({
        ...state.regisPackage,
        packageId: p.id,
      })
    );
  };

  if (state.regisPackage.packageId === "") {
    return (
      <div className="session px-2">
        {state.regisPackage.packageId === "" && (
          <ListRegisPackage
            onBack={() => {
              if (params.get("type") === ETypeOfServiceParameters.Package) {
                router.back();
              }
              dispatch(
                handleChangeServiceState({
                  ...state.svrState,
                  package: false,
                })
              );
            }}
            onClick={handleClickPackage}
            lan={lan}
            facilityId={state.facility?.id}
          />
        )}
      </div>
    );
  } else if (
    state.regisPackage.date === "" ||
    state.regisPackage.session.startTime === "" ||
    state.regisPackage.session.endTime === ""
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
              handleSetRegisPackage({
                ...state.regisPackage,
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
              handleSetRegisPackage({
                ...state.regisPackage,
                packageId: "",
              })
            );
          }}
        />
      </div>
    );
  }
  return (
    <div className="session px-2">
      {state.regisPackage.packageId !== "" && (
        <ListProfile
          state={state}
          onClickProfile={(profile) => {
            dispatch(
              handleSetRegisPackage({
                ...state.regisPackage,
                profileId: profile.id,
              })
            );
          }}
          onRegis={async () => {
            if (state.svrState.package === true) {
              await regisPackage({
                variables: {
                  input: state.regisPackage,
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
              handleSetRegisPackage({
                ...state.regisPackage,
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
export default RegisPackageCpn;
