import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {navDelay, loaderDelay} from "../../utils";
import Typical from 'react-typical';
import {email} from '../../config'

import styled from "styled-components";

const StyledHeroSection = styled.section`
  p {
    max-width: 500px;
  }
`;

export default function Header() {
  const [animated, setAnimated] = useState(false);
  const [isMounted,setIsMounted] = useState(false);

  useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), navDelay);
      return () => clearTimeout(timeout)
  }, []);

  const steps = ['web', 2000, 'mobile', 2000, 'desktop', 2000];

  const one = <h1 className="text-gray-500 text-lg font-normal">Hello, my name is,</h1>;
  const two = <h2 className="mt-1 text-gray-100 text-4xl md:text-6xl font-bold">Tafadzwa Makuyana</h2>;
  const three = (
      <h3 className="mt-1 text-gray-700 text-4xl md:text-6xl font-bold">
          I build things for the {' '}
          <Typical className="text-teal-400 inline-block" steps={steps} loop={Infinity} />
      </h3>
  );
  const four = (
    <p className="text-gray-500 mt-4">
      I'm a software engineer based in Bangkok, Thailand; specializing in
      building (and occasionally designing) exceptional websites, applications,
      and just about anything in between.
    </p>
  );

  const items = [one, two, three, four];
  return (
    <StyledHeroSection className="min-h-screen flex flex-col justify-center bg-tmprimary">
        <div className="w-10/12 mx-auto">
            <TransitionGroup component={null}>
                {isMounted && items.map((item, i) => (
                    <CSSTransition key={i} className="fadeIn" timeout={loaderDelay}>
                        <div style={{ transitionDelay: `${i + 1}00ms`}}>{item}</div>
                    </CSSTransition>
                ))}
                <button className="border-2 border-teal-500 text-teal-100 px-10 py-2 text-lg mt-5 rounded-sm">
                    <a href={`mailto:${email}`}>Get In Touch</a>
                </button>
            </TransitionGroup>
        </div>
    </StyledHeroSection>
  );
}
