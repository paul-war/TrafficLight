import React, { useState } from "react";


//create your first component

export function Home() {

const [clicked, setClicked] = useState("");

return (
	<div className="text-center traffic-light">
		<div className="stick"></div>
		<div onClick={() => setClicked("red")} className={`redLight ${clicked === "red" ? "clicked" : ""}`}></div>
		<div onClick={() => setClicked("yellow")} className={`yellowLight ${clicked === "yellow" ? "clicked" : ""}`}></div>
		<div onClick={() => setClicked("green")} className={`greenLight ${clicked === "green" ? "clicked" : ""}`}></div>
	</div>
	);
} 
