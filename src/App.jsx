import React from "react";
import { Routes, Route } from "react-router-dom";

import Radio from "./components/Radio";
import Landing from "./pages/Landing";

function App() {

  return (
    <div className="App">
	  <Routes>
		<Route path="/" element={<Landing/>}/>
		<Route path="/radio" element={<Radio/>}/>
		</Routes>
    </div>
  );
}

export default App;
