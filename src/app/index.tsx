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
// import { Auth } from './pages/Auth/Loadable';
import { DetailPage } from './pages/DetailPage/Loadable';
import { PopularPage } from './pages/Popular/Loadable';
import { MoviesPage } from './pages/Movies/Loadable';
import { SeriesPage } from './pages/Series/Loadable';

import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import { ProfilePage } from './pages/Profile/Loadable';

const queryClient = new QueryClient();

export function App() {
  const { i18n } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - A What To Watch Site"
          defaultTitle="Ze movies"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A what to watch site" />
        </Helmet>
        <Layout>
          <Switch>
            {/* <Route path="/login" component={Auth} /> */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/popular" component={PopularPage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route exact path="/series" component={SeriesPage} />
            <Route exact path={'/user/:id'} component={ProfilePage} />
            <Route path="/detail/" component={DetailPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
