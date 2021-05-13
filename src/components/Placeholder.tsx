import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const Placeholder: React.FC = () => {
  return (
    <Wrap>
      <ContentLoader
        height={700}
        speed={2}
        backgroundColor={'#E9ECEF'}
        foregroundColor={'#F8F9FA'}
        viewBox="0 0 1000 700"
      >
        {/* Only SVG shapes */}
        <rect x="250" y="300" rx="5" ry="5" width="500" height="100" />
        <rect x="250" y="420" rx="5" ry="5" width="500" height="50" />
        <rect x="250" y="480" rx="5" ry="5" width="500" height="50" />
      </ContentLoader>
    </Wrap>
  );
};

export default Placeholder;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;
