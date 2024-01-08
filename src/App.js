import React from "react";

import "./App.css";
import NavBbar from "./Components/NavBbar";
import Carouuusel from "./Components/Carouuusel";
import Cards from "./Components/Cards";

function App() {
	return (
		<div className='App'>
			<NavBbar />
			{/* Carousel  */}
			<Carouuusel />
			<h1>Workshop React Components</h1>
			{/* Card Part  */}
			<Cards />
		</div>
	);
}

export default App;
