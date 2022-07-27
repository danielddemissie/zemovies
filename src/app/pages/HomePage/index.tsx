import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from 'react-query';
import Todos from '../Todos';

export function HomePage() {
  //create new query
  const query = new QueryClient();
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <QueryClientProvider client={query}>
        <Todos />
      </QueryClientProvider>
    </>
  );
}
