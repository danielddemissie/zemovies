import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import Todos from '../Todos';
import { Flex } from 'app/components/Blocks/Basics';

export function HomePage() {
  //create new query

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Flex ml="100px" gap={'30px'} my={5}></Flex>
      <Todos />
    </>
  );
}
