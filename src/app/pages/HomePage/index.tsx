import { Box } from 'app/components/Blocks/Basics';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  //create new query

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Box>
        <h1>Home page</h1>
      </Box>
    </>
  );
}
