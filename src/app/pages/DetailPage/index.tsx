/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box, Flex, Button, Text } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';

export function DetailPage() {
  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Box minHeight={'400px'} width="165px">
        <img
          alt=""
          style={{
            maxWidth: '160px',
            height: '400px',
          }}
          srcSet="https://image.tmdb.org/t/p/w500/7NCRlXDQlHhFZFk3y1HJyJgGVHB.jpg"
        />
      </Box>
      <Box>Detail description</Box>

      <Box>Cast</Box>

      <Box>You may also like</Box>
    </>
  );
}
