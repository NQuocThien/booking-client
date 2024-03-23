"use client";

import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";

export default function Home() {
  const currentLan = useSelector((state: RootState) => state.client.language);
  return (
    <div className="container ">
      <strong className="text-warning">
        {currentLan.code === "vn" ? "Đường dẫn không hợp lệ" : "Invalid path"}
      </strong>
    </div>
  );
}
