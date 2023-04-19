import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="w-1/4 min-h-1/4 bg-white border-2 border-black hover:scale-105">
      <a href={props.url}>
        <img src={props.src} className="object-cover" alt={props.title} />
        <div>
          <p>{props.title}</p>
          <p>{props.children}</p>
        </div>
      </a>
    </div>
  );
}
