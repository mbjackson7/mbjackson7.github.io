import React from "react";
import NavBar from "../NavBar";

export default function StandardPage(props) {
 return (
    <div className="bg-bg text-text flex flex-row min-h-screen w-full">
      <NavBar />
      <div>
        {props.children}
      </div>
    </div>
  );
}
