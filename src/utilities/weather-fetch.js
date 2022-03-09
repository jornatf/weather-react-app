import { useState, useEffect } from 'react';
import urlBuilder from './url-builder';

const WeatherFetch = () => {
    const [response, setResponse] = useState({});
	const [loading, setLoading] = useState('Localization...');

	const fetchData = async (query) => {
		const resp = await fetch(urlBuilder(query));
		const data = await resp.json();
		
		if(data.current && data.location) {
			setResponse(data);
			setLoading(false);
		}
		else setLoading('No data retrieved');
	}

	const geolocate = () => {
		if(navigator.geolocation) {
			setLoading('Data recovery in progress...');
			navigator.geolocation.getCurrentPosition((pos) => {
				const lat = pos.coords.latitude;
				const lon = pos.coords.longitude;
				fetchData(`${lat},${lon}`);
			});
		}
		else {
			setLoading('Impossible geolocation!');
		}
	}

	useEffect(() => {
		geolocate();
		// auto refresh every minute
		setInterval(() => geolocate(), 1000 * 600); 
	}, []);

    return [response, loading];
}

export default WeatherFetch;