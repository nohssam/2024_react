import React, { useState } from "react";

const scaleNames = {
    c : '섭씨',
    f : '화씨'
};

function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function TemperatureInput(props){
    const [temperature, setTemperature] = useState('');

    const handleChange = (e) =>{
        setTemperature(e.target.value);
        console.log(temperature);
    }

    return(
        <fieldset>
            <legend>온도를 입력해주세요(단위 : {scaleNames[props.scale]}) : </legend>
            <input 
              type="number"
              value={temperature}
              onChange={handleChange} />
         <BoilingVerdict celsius={temperature}  />
        </fieldset>
    )
}

function Calc2(props) {
    return(
        <div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>
    )
}


export default Calc2 ;