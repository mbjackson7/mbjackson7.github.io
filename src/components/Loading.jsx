import React from "react";
import Logo from "./Logo";

export default function Loading() {
  return (
    <div className="h-full w-full flex justify-center items-center animate-spin text-white">
      <div className="h-1/8 w-1/8">
        <Logo />
      </div>
    </div>
  );
}
