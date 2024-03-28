"use client";
import { ToastContainer, toast, ToastPosition, Theme } from "react-toastify";
type ToastType = undefined | "success" | "info" | "warning" | "error";
export const showToast = (
  message: string,
  type: ToastType = undefined,
  autoClose: number = 2000,
  theme: Theme = "light",
  position: ToastPosition = "top-right"
) => {
  console.log("show toast");
  if (type !== undefined) {
    console.log("show toast type-undefined ");
    toast[type](message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  } else {
    console.log("show toast typ ");
    toast(message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  }
};
const ToastsPcn = () => {
  return <ToastContainer />;
};
// ToastsPcn.defaultProps = defaultToastProps

export default ToastsPcn;
