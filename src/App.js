import { useEffect } from "react";
import {init} from "./utils/initAnimeLayer";


function App() {
	useEffect(() => {
	init();
	} , []);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
