/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';
import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { Signup } from './pages/SignupPage/Loadable';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';

const queryClient = new QueryClient();

export function App() {
  const { i18n } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
