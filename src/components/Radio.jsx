import React,{useState,useEffect} from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import { filters } from "../services/filter";
const Radio =()=>{
	const [stations, setStations] = React.useState([]);
	const [stationFilter, setStationFilter] = useState("all");

	const setupApi = async(stationFilter) => {
		const api = new RadioBrowserApi(fetch.bind(window),"My Radio App");
		const stations = await api.searchStations({
			language:"english",
			tag:stationFilter,
			limit: 30,
		});

		setStations(stations);
		return stations;
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
								<img  className="logo"  src="" alt="station logo" />
							</div>
						</div>
					)
				})}
			</div>
		</div>)


}
export default Radio;