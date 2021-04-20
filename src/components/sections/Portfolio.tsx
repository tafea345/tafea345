import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

const Portfolio = ({ portfolio }) => {
  console.log(portfolio);
  return (
    <div className="body-font py-24">
      <section className="w-11/12 mx-auto">
        <div className="flex items-center justify-center mt-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            Some Things I’ve Built
          </h2>
        </div>
        <div className="px-5 py-20">
          <div className="flex flex-wrap -m-4">
            {portfolio.map((item, key) => {
              const images = item.fields.image;
              return (
                <div className="p-4 md:w-1/3" key={key}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    {images.map((img, key) => {
                      console.log("img", img);
                      return (
                        <LazyLoadImage
                          src={img.fields.file.url}
                          alt={"test"}
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                        />
                      );
                    })}

                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-teal-500 mb-1">
                        Featured Project
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.fields.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{item.fields.slug}</p>
                      <div>
                        <span className="text-gray-600 inline-flex leading-none ">
                          {/* tech */}
                          {item.fields.tech.map((tech, key) => {
                            return (
                              <p className="mr-1" key={key}>
                                {" "}
                                {tech.name},{" "}
                              </p>
                            );
                          })}
                        </span>
                      </div>
                      <div className="flex items-center flex-wrap ">
                        <Link href={item.fields.link}>
                          <a
                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-indigo-900"
                            target="_blank"
                          >
                            Live Link
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </Link>
                        <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                          {/* tech */}
                          {/* <div>Collingwood, Ontario</div> */}
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          {/* url */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio
