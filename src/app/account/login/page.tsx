"use client";
import FormLogin from "@/components/Account/FormLogin";
import {
  LoginUserInput,
  User,
  useLoginCustomerMutation,
} from "@/graphql/webbooking-service.generated";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { login, setUserInfo } from "@/redux/store/client";
import { showToast } from "@/components/subs/toast";
import { setToken } from "@/utils/tools";
import { useRouter } from "next/navigation";
function LoginPage() {
  const [loginUser, { data, loading, error }] = useLoginCustomerMutation();
  const dispatch = useDispatch();
  const router = useRouter();
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
        showToast("Đăng nhập thành công !!!");
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        showToast("Lỗi đăng nhập !", "error");
      });
  };
  return <FormLogin onLogin={hanleLogin} />;
}
export default LoginPage;
