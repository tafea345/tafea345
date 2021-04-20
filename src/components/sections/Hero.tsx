import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { navDelay, loaderDelay } from "../../utils";
import Typical from 'react-typical';
import data from '../../config'


export default function Header() {
  const [animated, setAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout)
  }, []);

  const steps = ['web', 5000, 'mobile', 5000, 'desktop', 5000];

  const one = <h1 className="text-teal-500 text-lg font-normal">Hello, i'm</h1>;
  const two = <h2 className="mt-1 text-gray-100 text-4xl md:text-5xl font-bold">Taf</h2>;
  const three = (
    <h3 className="mt-1 text-gray-700 text-4xl md:text-6xl font-bold">
      I build things for the {' '}
      <Typical className="text-teal-400 inline-block" steps={steps} loop={Infinity} />
    </h3>
  );
  const four = (
    <div className="w-full sm:w-1/2">
      <p className="text-gray-500 my-4 leading-relaxed">
        I'm a software engineer based in Bangkok, Thailand; specializing in
        building (and occasionally designing) exceptional websites, applications,
        and just about anything in between.
    </p>
    </div>
  );

  const items = [one, two, three, four];
  return (
    <>
      <section id="hero" className="py-20 bg-tmprimary min-h-screen">
        <div className="max-w-5xl mx-auto">
          <TransitionGroup component={null}>
            <CSSTransition className="fadeIn" timeout={loaderDelay}>
              <div style={{ transitionDelay: `100ms` }}>
                {isMounted && items.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
                <button className="border-2 border-teal-500 text-teal-100 px-10 py-2 text-lg mt-5 rounded-md">
                  <a href={`mailto:${data.email}`}>Get In Touch</a>
                </button>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </section>
    </>
  );
}
