import './weather-card.css';

const WeatherCard = props => {
    return (
        <div>
            <div className="weather-card">
                <div>
                    <div className="weather-card-temperature">{ props.temperature }°C</div>
                    <div className="weather-card-location">
                        <div className="location-name">{ props.locationName }</div>
                        <div className="location-country">{ props.locationRegion }, { props.locationCountry }</div>
                    </div>
                </div>
                {
                    props.icon &&
                    <img className="weather-card-icon" src={ props.icon } title={ props.text } alt={ props.text } width={64} height={64} />
                }
            </div>
        </div>
    )
}

export default WeatherCard;
