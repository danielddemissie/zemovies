/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box, Grid, Flex, Text, Input } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';
import { moviesQuery } from 'app/hooks';
import { classNames, imgUrls } from 'app/config';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import './style.css';
import { Search as SearchIcon } from '@mui/icons-material';
import { Container } from '@mui/material';

export function PopularPage() {
  const [query, setQuery] = React.useState('');
  const history = useHistory();
  let movieData: any = [];

  const discoverMoviesQuery = moviesQuery.usegGetPopular();
  const searchQuery = moviesQuery.useGetSearchMovie('movie', query);

  const handleSearch = value => {
    setQuery(value.query);
  };

  if (query) {
    movieData = searchQuery;
  } else {
    movieData = discoverMoviesQuery;
  }

  return (
    <>
      <Helmet>
        <title>Popular Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={values => handleSearch(values)}
      >
        {({ values }) => (
          <Form>
            <Flex alignItems="center" justifyContent={'center'}>
              <Input
                InputIcon={
                  <SearchIcon
                    onClick={() => {
                      handleSearch(values);
                    }}
                    style={{
                      color: '#fff',
                      position: 'relative',
                      top: 0,
                      marginRight: '10px',
                      cursor: 'pointer',
                      marginLeft: '5px',
                    }}
                  />
                }
                bg={'transparent'}
                className="input_search"
                color="white.0"
                border="none"
                py={['1rem']}
                name="query"
                placeholder="Search Movies..."
                style={{
                  paddingLeft: '20px',
                  width: '100%',
                }}
              />
              <button type="submit" style={{ visibility: 'hidden' }} />
            </Flex>
          </Form>
        )}
      </Formik>

      <Container maxWidth="xl">
        <Text as="h1" className={classNames.SECTION_HEADER} color="white.0">
          Popular Movies
        </Text>
        <Grid
          container
          direction={'row'}
          alignItems="center"
          rowGap={[0, '1rem']}
          justifyContent={'start'}
          color="white.0"
        >
          {movieData.isLoading ? (
            <Text>Loading...</Text>
          ) : movieData.isError ? (
            <Text>Error occured</Text>
          ) : (
            movieData.data?.data.results?.map((movie, index) => (
              <Grid item xl={2.3} lg={3} sm={4} xs={6} p="10px" key={index}>
                <Card
                  onClick={() => {
                    history.push(`/detail/movie/${movie.id}`);
                  }}
                  title={movie.title}
                  imgUrl={imgUrls.mediumImages + movie.poster_path}
                  rate={movie.vote_average}
                />
              </Grid>
            ))
          )}
          <Text textAlign={'left'}>View More</Text>
        </Grid>
      </Container>
    </>
  );
}
