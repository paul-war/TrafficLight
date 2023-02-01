import React, {useState} from "react";


const YellowLight = () => {
    const [clicked, setClicked] = useState(true);

    return clicked ? (
    <button type="button" onClick={() => setClicked(false)} className="yellowLight">Yellow</button>
    ) : (
    <button type="button" onClick={() => setClicked(true)} className="yellowLight Clicked">Yellow</button>);
};

export default YellowLight;
