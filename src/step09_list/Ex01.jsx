import React from "react";

function Ex01(props) {
    const {arr} = props;

    const listItems = arr.map((k) => {
        return(
            // 개발자도구를 보면 key 때문에 오류 발생
            // <li>{k}</li>

            // 키에 들어가는 값은 중복안되는것 으로 넣어주어줘야 한다.
            <li key={k}>{k}</li>
        )
    });
    
    const listItems2 = arr.map((k, index) => {
        return(
            <li key={index}>{k}</li>
        )
    });
    return(
        <ul>{listItems}</ul>
    )
}

export default Ex01;