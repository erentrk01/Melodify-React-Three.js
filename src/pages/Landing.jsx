import { useEffect } from "react";
import {init} from "../utils/initAnimeLayer";
import style from '../Styling/landing.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

import { useTranslation} from "react-i18next";
import { languages } from "../services/langInfo";
import i18n from "i18next";

const Landing = () => {
	const {t} =	useTranslation();

	useEffect(() => {
		init();
	},[]);
	return(
		<div>
			
			<div className="hero py-3 px-2">
				<h1 className="title">Melodify</h1>
				<p className="text">
					{t("Landing.app-definition")}
				</p>
				<div className="d-flex justify-content-space-between  p-1">
					<button 
					onClick={() => i18n.changeLanguage(languages[0].code)}
					className="btn btn-outline-danger">English</button>
					<button 
					onClick={() => i18n.changeLanguage(languages[1].code)}
					className="btn btn-outline-danger ms-2">Turkish</button>
				</div>
				<div className="cards mt-2">
				<div className="card  text-white bg-dark mb-3">
					<div className="card-header">{t("Landing.Stream.header")}</div>
					<div className="card-body">

						<p className="card-text">{t("Landing.Stream.description")}</p>
					</div>
				</div>
				<div className="card  text-white bg-dark mb-3 sm">
					<div className="card-header">{t("Landing.Chat.header")}</div>
					<div className="card-body">
	
						<p className="card-text">{t("Landing.Chat.description")}</p>
					</div>
				</div>
				</div>
		</div>
		</div>
	)
}

export default Landing;