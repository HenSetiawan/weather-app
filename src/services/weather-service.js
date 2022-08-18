const apiKey = process.env.REACT_APP_API_KEY;

const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`
    );
    if (response.status === 404) {
      return 404;
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getWeatherIcon = (iconId) => {
  return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
};

// eslint-disable-next-line import/no-anonymous-default-export
export { getWeatherByCity, getWeatherIcon };
