"use client";
// import { User } from "@/graphql/webbooking-service.generated";
import { getToken, setLocalStorage } from "@/utils/constain";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isLoginIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  dataTest: string;
  //   userInfor: User;
  //   handleChangeUserInfor: (dataUser: User) => void;
  checkExpirationToken: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
  //   checkLogin: (token: string) => Promise<any>;
}
function AuthContextProvider({ children }: AuthProviderProps) {
  const [isLoginIn, setIsLoginIn] = useState<boolean>(false);
  const [userInfor, setUserInfor] = useState<any>(null);
  const [reload, setReload] = useState<boolean>(true);
  const dataTest = "WEB ĐĂNG KÝ KHÁM CHỮA BỆNH";
  //   useEffect(() => {
  //     const token: string = getToken() || "";
  //     const getLogin = async () => {
  //       await checkLogin(token)
  //         .then((data) => {
  //           console.log("test login: ", data);
  //           setUserInfor(data?.checklogin);
  //           setIsLoginIn(true);
  //         })
  //         .catch(() => {
  //           setUserInfor(null);
  //           setIsLoginIn(false);
  //         });
  //     };
  //     console.log("re-reder");
  //     getLogin();
  //   }, [reload]);
  const login = (token: string) => {
    if (reload) setReload(false);
    else setReload(true);
    console.log("login: ", reload);
    setLocalStorage(
      process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : "access_token",
      token
    );

    setIsLoginIn(true);
  };
  const logout = () => {
    setIsLoginIn(false);
  };
  const handleChangeUserInfor = (dataUser: any) => {
    setUserInfor(dataUser);
  };
  const checkExpirationToken = () => {
    const token = getToken();
    if (token) {
      // cắt token lấy payload và giải mã Base64 URL-encoded  thành JSON rồi chuyển json thành object
      const expirationTime = JSON.parse(atob(token.split(".")[1])).exp;
      const currentTime = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại ở đơn vị giây
      if (expirationTime && expirationTime < currentTime) {
        // console.log('Token đã hết hạn.');
        logout();
      }
    } else {
      logout();
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoginIn,
        login,
        logout,
        dataTest,
        // userInfor,
        // handleChangeUserInfor,
        checkExpirationToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthContextProvider };
