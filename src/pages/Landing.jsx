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
				<div className="cards mt-2">
				<div className="card  text-white bg-dark mb-3 w-25">
					<div className="card-header">Header</div>
					<div className="card-body">
						<h5 className="card-title">Stream</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
				<div className="card  text-white bg-dark mb-3 w-25">
					<div className="card-header">Header</div>
					<div className="card-body">
						<h5 className="card-title">Chat</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
				</div>
		</div>
		</div>
	)
}

export default Landing;