import React, { useState, useEffect } from "react";
import RedLight from "./RedLight.jsx";
import YellowLight from "./YellowLight.jsx";
import GreenLight from "./GreenLight.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center traffic-light">
			<div className="stick"></div>
			<RedLight />
			<YellowLight />
			<GreenLight />
		</div>
	);
};

export default Home;
