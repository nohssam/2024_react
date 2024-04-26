import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Ex06_Toolbar(props) {
    const {isLoggedIn, onClikLogin, onClikLogout } = props ;
    return(
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다.</span> }
            { isLoggedIn ? <button onClick={onClikLogout}> 로그아웃 </button> 
                :  <button onClick={onClikLogin}> 로그인 </button> }
        </div>
    )
}
export default Ex06_Toolbar;