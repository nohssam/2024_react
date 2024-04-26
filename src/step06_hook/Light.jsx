import React from "react";

function Light({room, on, toggle}) {
    console.log({room, on});
    return(
        <button onClick={toggle}>
            {room} {on ? "💡" : "⬛"}
        </button>
    )
}
// props 값이 변경되지 않은 한 다시 호출 되지 않는다.
export default React.memo(Light);