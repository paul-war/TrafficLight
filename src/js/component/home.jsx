import React, { useState, useEffect } from "react";
import redLight from "./redLight.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center traffic-light">
			<redLight />
			<div className="yellowLight">Yellow</div>
			<div className="greenLight">Green</div>
		</div>
	);
};

export default Home;
