// 엘리먼트 변수 => 컴포넌트(엘리먼트)를 변수 처럼 다루고 싶을 때 

function LogInButton(props) {
    return(
        <button onClick={props.onClick}>로그인</button>
    )
}

function LogOutButton(props) {
    return(
        <button onClick={props.onClick}>로그아웃</button>
    )
}

export {LogInButton, LogOutButton};