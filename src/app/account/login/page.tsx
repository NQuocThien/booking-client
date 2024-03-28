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
      router.back();
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
  const hanleLogin = async (input: LoginUserInput) => {
    await loginUser({
      variables: {
        input: input,
      },
    })
      .then(() => {
        showToast(lan.messSuccess);
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        switch (err.message) {
          case ErrorMes.UseNotFound:
            showToast(lan.messNotFound);
            break;
          case ErrorMes.InvalidPassword:
            showToast(lan.messInvalid);
            break;
          case ErrorMes.UserIsInactive:
            showToast(lan.messNotActive);
            break;

          default:
            showToast(lan.messErr);
            break;
        }
        showToast("Lỗi đăng nhập !", "error");
      });
  };
  return <FormLogin lan={lan} onLogin={hanleLogin} />;
}
export default LoginPage;
