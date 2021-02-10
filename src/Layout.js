import React, { useState, useEffect } from "react";
import Meta from "./Meta";
import {Header} from './components'

const Page = (props) => {
    return (
        <div>
            <Meta />
            <Header/>
            {/*<Navigation />*/}
            {props.children}
            {/*<Footer />*/}
        </div>
    );
};

export default Page;
