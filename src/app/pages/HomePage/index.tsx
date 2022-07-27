import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckboxWithL from './CheckBoxWithL';
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
      <span>My HomePage</span>
      <br />
      <CheckboxWithL labelOn={'on'} labelOff="off" />
      <QueryClientProvider client={query}>
        <Todos />
      </QueryClientProvider>
    </>
  );
}
