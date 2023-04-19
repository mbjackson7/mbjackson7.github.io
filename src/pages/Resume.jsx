import React from "react";
import resume from "../assets/MorganJacksonResume.pdf";
import StandardPage from "../components/wrappers/StandardPage";

export default function Resume() {
  return (
    <StandardPage>
      <object data={resume} className="w-full h-full">
        <div className="flex flex-col justify-center text-center">
          <p>Oops, looks like your browser doesn't support PDFs!</p>
          <p><a href={resume}>Download Instead</a></p>
        </div>
      </object>
    </StandardPage>
  );
}
