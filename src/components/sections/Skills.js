import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../../content";

export default function Skills() {
  return (
    <div className="body-font bg-gray-100 py-24">
      <section class="w-11/12 mx-auto flex flex-col ">
        <div className="flex mt-10">
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
        </div>
        <div>

        </div>
        <div className="flex flex-wrap mt-10">
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
      </section>
    </div>
  );
}
