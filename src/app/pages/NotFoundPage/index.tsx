import * as React from 'react';
import styled from 'styled-components/macro';
import { Img, Text } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import NotFoundImg from '../../../assets/images/not-found.jpg';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <Text color="white.0">Page not found.</Text>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  filter: drop-shadow(0 2px 2px rgba(63, 63, 63, 0.3));
  height: calc(100vh - 3rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: white;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
