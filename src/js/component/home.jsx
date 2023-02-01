import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {
	return (
		<div className="text-center traffic-light"> This Light
			<div className="redLight">Red</div>
			<div className="yellowLight">Yellow</div>
			<div className="greenLight">Green</div>
		</div>
	);
};

export default Home;
