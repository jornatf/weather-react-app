import React from 'react';

import WeatherFetch from './utilities/weather-fetch';

import Header from './components/header/Header';
import WeatherCard from './components/weather-card/WeatherCard';
import ReloadButton from './components/reload-button/ReloadButton';

const App = () => {
    const [response, loading] = WeatherFetch();

    if(!loading) {
        return (
            <div>
                <Header />
                <WeatherCard
                    temperature={ response.current?.temp_c }
                    locationName={ response.location?.name }
                    locationRegion={ response.location?.region }
                    locationCountry={ response.location?.country }
                    icon={ response.current?.condition?.icon }
                    isDay={ response.current?.is_day }
                    text={ response.current?.condition?.text }
                />
                <ReloadButton localtime={ response.location?.localtime } />
            </div>
        )
    }
    else return (<div className="loading">{ loading }</div>);
}

export default App;