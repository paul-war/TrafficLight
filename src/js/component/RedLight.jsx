import React, {useState} from "react";


const RedLight = () => {
    const [clicked, setClicked] = useState(true);

    return clicked ? (
    <button type="button" onClick={() => setClicked(false)} className="redLight">Red</button>
    ) : (
    <button type="button" onClick={() => setClicked(true)} className="redLight Clicked">Red</button>);
};

export default RedLight;
