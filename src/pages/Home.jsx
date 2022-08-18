import InputSearch from '../components/inputSearch';
import WeatherCard from '../components/WeatherCard';
import DetailWeather from '../components/DetailWeather';
import PageNotFound from '../components/PageNotFound';
import { useState, useEffect } from 'react';
import { getWeatherByCity } from '../services/weather-service';

const Home = () => {
  const [city, setCity] = useState('Jakarta');
  const [weather, setWeather] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);

  const sendKeyword = (keyword) => {
    setCity(keyword);
  };

  const weatherHandler = async () => {
    const weatherData = await getWeatherByCity(city);
    setWeather(weatherData);
    if (weatherData === 404) {
      setIsNotFound(true);
    }
  };

  useEffect(() => {
    weatherHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <main>
      <InputSearch sendKeyword={sendKeyword} />
      {isNotFound ? (
        <PageNotFound />
      ) : (
        <div>
          <WeatherCard
            city={weather.name}
            temp={Math.ceil(weather.main?.temp)}
            icon={weather.weather !== undefined ? weather.weather[0].icon : ''}
          />

          <DetailWeather
            feelsLike={Math.ceil(weather.main?.feels_like)}
            humidity={weather.main?.humidity}
            windSpeed={weather.wind?.speed}
          />
        </div>
      )}
    </main>
  );
};

export default Home;
