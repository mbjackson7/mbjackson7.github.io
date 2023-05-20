import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="w-[40vh] aspect-3/4 bg-white border-2 border-black p-8 hover:scale-105 hover:bg-tertiary">
      <a href={props.url} className="">
        <img src={props.src} className="w-full h-1/2 object-stretch border-2 bg-bg dark:bg-darkbg hover:scale-125" alt={props.title} />
        <div className="">
          <p className="font-bold">{props.title}</p>
          <p className="h-1/6 text-sm">{props.children}</p>
        </div>
      </a>
    </div>
  );
}
