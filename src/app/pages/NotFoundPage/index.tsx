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
        <Img
          src={NotFoundImg}
          alt="not found image"
          width={'700px'}
          height="700px"
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
