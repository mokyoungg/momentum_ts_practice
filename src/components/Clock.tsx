import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const time = setInterval(() => {
      getTime();
    }, 1000);

    return () => clearInterval(time);
  }, []);

  const getTime = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    const currentTime: string = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;

    setTime(currentTime);
  };

  return (
    <ClockWrap>
      <CurrentClock>{time}</CurrentClock>
    </ClockWrap>
  );
};

export default Clock;

const ClockWrap = styled.div`
  margin: 0 auto;
  width: 300px;
`;

const CurrentClock = styled.p`
  font-size: 70px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
