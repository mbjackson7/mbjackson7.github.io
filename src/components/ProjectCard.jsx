import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="w-[40vh] aspect-square bg-white border-2 border-black p-8 hover:scale-105 hover:bg-tertiary">
      <a href={props.url}>
        <img src={props.src} className="w-full h-3/4 object-stretch" alt={props.title} />
        <div>
          <p className="font-bold">{props.title}</p>
          <p>{props.children}</p>
        </div>
      </a>
    </div>
  );
}
