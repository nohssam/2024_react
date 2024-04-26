import React, { useState } from "react";

function Sample05(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirmed = () => {
        setIsConfirmed(!isConfirmed);
    } 
    return(
        <button 
            onClick={handleConfirmed}
            disabled={isConfirmed}
        >
            {isConfirmed?'확인됨':'확인하기'}
        </button>
    )
}

export default Sample05;