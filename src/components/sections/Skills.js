import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../../content";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-dosis" id="skills">
      <h2 className="text-5xl font-bold">Stacks I use</h2>
      <div className="flex flex-wrap text-center justify-center mt-10">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              key={index}
              className={`w-40 h-40 bg-white shadow-2xl m-2 rounded-full justify-center flex items-center p-5`}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 text-xl md:max-w-lg text-center mt-10">
        {content.stack.desc}
      </p>
    </div>
  );
}
