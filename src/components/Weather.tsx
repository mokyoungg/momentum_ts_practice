import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const API_KEY;

interface weatherInt {
  city: string;
  weather: string;
  temp: number;
}

const Weather: React.FC = () => {

  const [weatherData, setWeatherData] = useState<weatherInt>({
    city: '',
    weather: '',
    temp: 0,
  });

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    try {
      const res: any = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`,
      );
      //console.log(res.data);

      const currentCity = res.data.name;
      const currentTemp = res.data.main.temp;
      const currentWeather = res.data.weather[0].main;
      setWeatherData({
        ...weatherData,
        city: currentCity,
        weather: currentWeather,
        temp: currentTemp,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const renderWeather = () => {
    const { city, weather, temp } = weatherData;
    return <p>{`${city}, ${weather}, ${temp}`}</p>;
  };

  return <WeatherWrap>{renderWeather()}</WeatherWrap>;
};

export default Weather;

const WeatherWrap = styled.div``;
