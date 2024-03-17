"use client";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/redux/store/client";
import { useGetGeneralInforQuery } from "@/graphql/webbooking-service.generated";

export default function Home() {
  const { data } = useGetGeneralInforQuery();
  const isLogin = useSelector((state: RootState) => state.client.isLogin);
  const lan = useSelector((state: RootState) => state.client.language);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button aria-label="Login" onClick={() => dispatch(login())}>
          login
        </button>
        <h2>{data?.getGeneralInfor.company}</h2>
        <h1>{(isLogin && "Đã đăng nhập") || "Chưa đăng nhập"}</h1>
        <h1>{lan.name}</h1>
        <button aria-label="Logout" onClick={() => dispatch(logout())}>
          logout
        </button>
      </div>
    </div>
  );
}
