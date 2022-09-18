/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box } from '../Blocks';
import Footer from './Footer';
import Header from './Header';

export default ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};
