import { useEffect } from "react";
import {init} from "../utils/initAnimeLayer";
import BtnStylish from "../components/btnStylish";

const Landing = () => {
	useEffect(() => {
		init();
	},[]);
	return(
		<div>
			<div className="hero">
				<h1 className="title">Melodify</h1>
				<p className="text">
					A social radio chat app for music lovers.

				</p>
				
				
				<BtnStylish></BtnStylish>

				
		</div>
		</div>
	)
}

export default Landing;