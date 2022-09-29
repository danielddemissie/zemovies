/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box, Flex, Button, Text } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';

export function PopularPage() {
  return (
    <>
      <Helmet>
        <title>Popular Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Flex justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Card imgUrl={''} title={'title'} rate={9} />
        </Box>
        <Box>Popular description</Box>
      </Flex>

      <Box>Cast</Box>

      <Box>You may also like</Box>
    </>
  );
}
