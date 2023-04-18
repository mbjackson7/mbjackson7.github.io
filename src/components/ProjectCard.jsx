import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <a className="w-1/2" href={props.url}>
      <img src={props.src} alt=""/>
      <div>
        <p>{props.title}</p>
        <p>{props.children}</p>
      </div>
    </a>
  );
}
