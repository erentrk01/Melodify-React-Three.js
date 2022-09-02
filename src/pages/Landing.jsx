import { useEffect } from "react";
import {init} from "../utils/initAnimeLayer";
import style from '../Styling/landing.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
	useEffect(() => {
		init();
	},[]);
	return(
		<div>
			
			<div className="hero py-3 px-2">
				<h1 className="title">Melodify</h1>
				<p className="text">
					A social radio chat app for music lovers.

				</p>
				<div className="d-flex justify-content-space-between  p-1">
					<button className="btn btn-outline-danger">English</button>
					<button className="btn btn-outline-danger ms-2">Turkish</button>
				</div>
				
		</div>
		</div>
	)
}

export default Landing;