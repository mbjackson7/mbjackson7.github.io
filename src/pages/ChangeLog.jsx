import React from "react";
//import ChangeLogMD from "../components/ChangeLogMD";
import StandardPage from "../components/wrappers/StandardPage";

export default function ChangeLog() {
  return (
    <StandardPage className='ChangeLog'>
      <ChangeLogMD/>
    </StandardPage>
  );
}
