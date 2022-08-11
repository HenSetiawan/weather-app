import '../css/detailWeather.css';
const DetailWeather = (props) => {
  return (
    <div className="container">
      <div className="box">
        <p>FEELS LIKE</p>
        <p>{props.feelsLike}&#8451;</p>
      </div>
      <div className="box">
        <p>HUMIDITY</p>
        <p>{props.humidity}</p>
      </div>
      <div className="box">
        <p>WIND SPEED</p>
        <p>{props.windSpeed}</p>
      </div>
    </div>
  );
};

export default DetailWeather;
