import '../css/weatherCard.css';
import { getWeatherIcon } from '../services/weather-service';
const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <img src={getWeatherIcon(props.icon)} alt="icon"/>
      <h1 className="title">{props.city}</h1>
      <p className="temperature">{props.temp}&#8451;</p>
    </div>
  );
};

export default WeatherCard;
