"use client";
import { forwardRef } from "react";
import { CiMenuKebab } from "react-icons/ci";

export const CustomToggle = forwardRef<
  HTMLDivElement,
  { onClick: (e: React.MouseEvent<HTMLDivElement>) => void }
>(({ onClick }, ref) => (
  <div
    className="mx-5 d-flex  justify-content-center"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    ref={ref}>
    <CiMenuKebab />
  </div>
));
