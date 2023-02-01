import React, {useEffect, useState} from "react";


const redLight = () => {
    const [color, setColor] = useState("red");
    return (
            <div className="redLight">Red</div>
    );
};

export default redLight;
