import React from "react";
import resume from "../assets/MorganJacksonResume.pdf";
import resumeImg from "../assets/MorganJacksonResume.png";
import "./Resume.css";
import StandardPage from "../components/StandardPage";

export default function Resume() {
  function getResume() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return (
        <div>
          <img src={resumeImg} className="Resume-img" alt="Resume"/>
          <a href={resume}>Download PDF</a>
        </div>
      );
    } else {
      return (
        <object data={resume} className="Resume-pdf">
          <img src={resumeImg} className="Resume-img" alt="Resume"/>
        </object>
      );
    }
  }
  return (
    <StandardPage>
      <div>
        {getResume()}
      </div>
    </StandardPage>
  );
}
