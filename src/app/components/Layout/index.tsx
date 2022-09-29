/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Box } from '../Blocks';

export default ({ children }) => {
  return (
    <>
      <Header />
      <Box my={['10rem']}>{children}</Box>
      <Footer />
    </>
  );
};
