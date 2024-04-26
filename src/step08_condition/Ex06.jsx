import React, { useState } from "react";
import Ex06_Toolbar from "./Ex06_Toolbar";

function Ex06(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClikLogin = () => {
        setIsLoggedIn(true);
    }

    const onClikLogout = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Ex06_Toolbar 
                isLoggedIn ={isLoggedIn}
                onClikLogin ={onClikLogin}
                onClikLogout ={onClikLogout}
            />
            <div> 리액트 공부 ~ (본문)</div>
        </div>
    )
}

export default Ex06 ;