import React, { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Todo from './components/Todo';
import Weather from './components/Weather';

import Placeholder from './components/Placeholder';

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const onLoad = useCallback(() => {
    console.log('loaded');
    setLoading(false);
  }, []);

  return (
    <div>
      {isLoading && (
        <>
          <Placeholder />
          <Img
            onLoad={onLoad}
            src="https://source.unsplash.com/1600x900/?nature,water,city,snow,flower,spring,summer"
          />
        </>
      )}
      {!isLoading && (
        <Wrap>
          <Img
            onLoad={onLoad}
            src="https://source.unsplash.com/1600x900/?nature,water,city,snow,flower,spring,summer"
          />
          <SectionWrap>
            <Weather />
            <Clock />
            <Greeting />
            <Todo />
          </SectionWrap>
        </Wrap>
      )}
    </div>
  );
};

export default App;

const fadein = keyframes`
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  animation: ${fadein} 1s linear 1;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
`;

const SectionWrap = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10;
  position: relative;
  padding-top: 10%;
`;
