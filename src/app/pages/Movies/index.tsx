/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box, Flex, Button, Text } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';

export function MoviesPage() {
  return (
    <>
      <Helmet>
        <title>Movies Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Flex justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Card imgUrl={''} title={'title'} rate={9} />
        </Box>
        <Box>Detail description</Box>
      </Flex>

      <Box>Cast</Box>

      <Box>You may also like</Box>
    </>
  );
}