import React, {useEffect, useState} from "react";
import Link from 'next/link'
import content from "../../content";
import {navLinks} from '../../config'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {loaderDelay} from "../../utils";

export default function Navigation() {
    const [mounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    const timeout = loaderDelay;
  return (
    <div className="bg-tmprimary">
        <div className="container mx-auto flex flex-wrap pt-2 flex-col md:flex-row items-center w-10/12 mx-auto">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <h1 className="text-3xl font-bold text-teal-300">{content.nav.logo} <span className="w-3 h-3 inline-block bg-indigo-100 rounded-full"></span></h1>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <TransitionGroup component={null}>
                    <CSSTransition className="" timeout={timeout}>
                        <>
                        {navLinks.map(({url, name}, i) => {
                            return (
                                <li key={i} className="inline-block mx-4 text-gray-300 hover:text-teal-500">
                                    <Link href={url} className="">{name}</Link>
                                </li>
                            );
                        })}
                        </>
                    </CSSTransition>
                </TransitionGroup>
            </nav>
        </div>
    </div>
  );
}
