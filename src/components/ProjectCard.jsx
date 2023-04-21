import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <a href={props.url} className="">
      <div className="w-[40vh] aspect-3/4 [perspective:256vmin] bg-transparent group">
        <div className="w-full h-full relative flip-card-inner group-hover:[transform:rotateY(180deg)]">
          <div className="w-full h-full bg-white border-2 border-black p-8 hide-back">
            <img
              src={props.src}
              className="w-full h-1/2 object-stretch border-2 bg-bg"
              alt={props.title}
            />
            <div className="">
              <p className="font-bold">{props.title}</p>
              <p className="h-1/6 text-sm">{props.children}</p>
            </div>
          </div>
          <div className="w-full h-full bg-white border-2 border-black p-8 hide-back [transform:rotateY(180deg)]"></div>
        </div>
      </div>
    </a>
  );
}
