import React, { useEffect, useState } from "react";
import Link from "next/link";
import content from "../../content";
import data from "../../config";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { loaderDelay } from "../../utils";

export default function Navigation() {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const timeout = loaderDelay;
  return (
    <div className="bg-tmprimary">
      <div className="container mx-auto flex flex-wrap pt-2 flex-col md:flex-row items-center w-10/12 mx-auto">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-teal-300">
            {content.nav.logo}{" "}
            <span className="w-3 h-3 inline-block bg-indigo-100 rounded-full"></span>{" "}
            {content.nav.slogan}
          </h1>
        </a>
        <nav className="md:ml-auto flex text-base">
          <TransitionGroup component={null}>
            <CSSTransition className="" timeout={timeout}>
              <>
                <div className="flex flex-wrap  text-md justify-center items-center">
                  {data.navLinks.map(({ url, name }, i) => {
                    return (
                      <Link href={url} key={i}>
                        <a className="mr-4 text-gray-300 hover:text-teal-500 hover:scale-125"> <span className="text-teal-500">_</span> {name}</a>
                      </Link>
                    )
                  })}
                  <a className="cursor-pointer p-2 border-2 border-teal-600 rounded-md text-teal-100 hover:text-teal-500 px-4 py-2">Resume</a>
                </div>
              </>
            </CSSTransition>
          </TransitionGroup>
        </nav>
      </div>
    </div>
  );
}
