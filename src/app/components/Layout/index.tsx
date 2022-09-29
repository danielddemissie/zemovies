/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Box } from '../Blocks';
import { useLocation } from 'react-router-dom';

export default ({ children }) => {
  const pathName = useLocation().pathname;
  return (
    <>
      <Header />
      <Box
        my={pathName === '/' ? ['3rem'] : ['10rem']}
        minHeight={['calc(100vh - 20rem)']}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
