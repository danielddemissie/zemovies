/* eslint-disable import/no-anonymous-default-export */
import { Container } from '@mui/material';
import React from 'react';
import { Box } from '../Blocks';
import Footer from './Footer';
import Header from './Header';

export default ({ children }) => {
  return (
    <Container maxWidth={'xl'}>
      <Header />
      <Box my={['1rem']} minHeight={'calc(100vh - 5rem)'}>
        {children}
      </Box>
      <Footer />
    </Container>
  );
};
