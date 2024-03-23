"use client";
import FormLogin from "@/components/Account/FormLogin";
import {
  LoginUserInput,
  User,
  useLoginCustomerMutation,
} from "@/graphql/webbooking-service.generated";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { login, setUserInfo } from "@/redux/store/client";
import { showToast } from "@/components/subs/toast";
import { setToken } from "@/utils/tools";
import { useRouter } from "next/navigation";
import { accountVi } from "@/locales/vi/Account";
import { accountUs } from "@/locales/en/Account";
import { ErrorMes } from "@/assets/contains/emun";
import MedicalFacilities from "@/components/MedicalFacility/MedicalFacility";
import Register from "@/components/Register/Register";
function LoginPage() {
  const [loginUser, { data, loading, error }] = useLoginCustomerMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [lan, setLan] = useState(accountVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const isloginIn = useSelector((state: RootState) => state.client.isLogin);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(accountUs);
    } else setLan(accountVi);
  }, [currentLan]);

  useEffect(() => {
    if (isloginIn) {
      router.push("./");
    }
  }, [isloginIn]);

  useEffect(() => {
    if (data?.login) {
      const token = data.login.access_token;
      const user: User = data.login.user;

      setToken(token);
      dispatch(login());
      dispatch(setUserInfo(user));
    }
  }, [data]);

  return <Register facilityId="" type={undefined} />;
}
export default LoginPage;
