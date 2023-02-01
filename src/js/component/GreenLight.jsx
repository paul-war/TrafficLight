import React, {useState} from "react";


const GreenLight = () => {
    const [clicked, setClicked] = useState(true);

    return clicked ? (
    <button type="button" onClick={() => setClicked(false)} className="greenLight">Green</button>
    ) : (
    <button type="button" onClick={() => setClicked(true)} className="greenLight Clicked">Green</button>);
};

export default GreenLight;
