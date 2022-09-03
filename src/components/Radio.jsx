import React,{useState,useEffect} from "react";

import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import { filters } from "../services/filter";

import style from "../Styling/radio.css";
import defaultImage from "./default.jpg";
const Radio =()=>{
	const [stations, setStations] = React.useState([]);
	const [stationFilter, setStationFilter] = useState("all");


	const setupApi = async(stationFilter) => {
		const api = new RadioBrowserApi(fetch.bind(window),"My Radio App");
		const stations = await api.searchStations({
			language:["english"],
			tag:stationFilter,
			limit: 30,
		});

		setStations(stations);
		return stations;
	}

	const setDefaultSrc =(event)=>{
		event.target.src = defaultImage;
	}
	useEffect(() => {
		setupApi(stationFilter)
		.then(data=>{
			setStations(data);
		})
		
	},[stationFilter]);
	return (
		<div className="radio">
			<div className="filters">
				{
					filters.map((filter,index) => {
						return(
							<span 
							key={index}
							className={stationFilter === filter ? "selected" : "text-dark"}
							onClick={()=>setStationFilter(filter)}>{filter}</span>
						)})
				}
			</div>
			<div className="stations">
				{ stations&& stations.map((station,index) => {
					return(
						<div className="station" key={index}>
							<div className="station-name">
								<img 
								className="logo"
								src={station.favicon}
								alt="station logo"
								onError={setDefaultSrc}
								   />
								<div className="name text-dark">
									{station.name}
								</div>
								<AudioPlayer 
							className="player"
							src={station.urlResolved}
							showJumpControls={false}
							layout="stacked"
							customProgressBarSection={["PROGRESS_BAR"]}
							customControlsSection={["MAIN_CONTROLS","VOLUME_CONTROLS"]}
							autoPlayAfterSrcChange={false}
							onPlay={e => console.log("onPlay")}
							/>
							</div>
						
						</div>
					)
				})}
			</div>
		</div>)


}
export default Radio;