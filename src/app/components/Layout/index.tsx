/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box } from '../Blocks';
import Footer from './Footer';
import Header from './Header';

export default ({ children }) => {
  return (
    <>
      <Header />
      <Box minHeight={'calc(100vh - 5rem)'}>{children}</Box>
      <Footer />
    </>
  );
};
