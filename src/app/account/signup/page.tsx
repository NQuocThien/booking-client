"use client";
import {
  CreateUserInput,
  useSignupMutation,
} from "@/graphql/webbooking-service.generated";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { showToast } from "@/components/subs/toast";
import { useRouter } from "next/navigation";
import { accountVi } from "@/locales/vi/Account";
import { accountUs } from "@/locales/en/Account";
import FormSignUp from "@/components/Account/FormSignUp";
function LoginPage() {
  const [signUpUser, { data, loading, error }] = useSignupMutation();
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

  // useEffect(() => {
  //   if (data?.signup) {
  //     const token = data.si.access_token;
  //     const user: User = data.login.user;

  //     setToken(token);
  //     dispatch(login());
  //     dispatch(setUserInfo(user));
  //   }
  // }, [data]);

  const hanleSignUp = async (input: CreateUserInput) => {
    await signUpUser({
      variables: {
        input: input,
      },
    })
      .then(() => {
        showToast(lan.messSuccess);
        router.push("/account/login");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "User already exists ! ")
          showToast(lan.messUserExist);
        else showToast(lan.messErr, "error");
      });
  };
  return <FormSignUp lan={lan} onLogin={hanleSignUp} />;
}
export default LoginPage;
