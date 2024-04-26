import React from "react";
import { Ex02_F, Ex02_T } from "./Ex02_TF";

function Ex02(props) {
    const isLoggedin = props.isLoggedIn;
    if(isLoggedin){
        return <Ex02_T />
    }
    return <Ex02_F />
}

export default Ex02;