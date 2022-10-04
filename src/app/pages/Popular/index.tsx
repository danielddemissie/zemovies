/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box, Grid, Flex, Button, Text, Input } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';
import { moviesQuery } from 'app/hooks';
import { classNames, imgUrls } from 'app/config';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { Search } from '@mui/icons-material';
import './style.css';
import { Container } from '@mui/system';

export function PopularPage() {
  const dicoverMoviesQuery = moviesQuery.usegGetPopular();
  const genreQuery = moviesQuery.useGetGenres('series');
  const history = useHistory();
  const handleSearch = value => {
    console.log('search===>', value);
  };

  return (
    <>
      <Helmet>
        <title>Popular Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Formik
        initialValues={{ searchQuery: '' }}
        onSubmit={values => handleSearch(values)}
      >
        {({ values }) => (
          <Form>
            <Flex alignItems="center" justifyContent={'center'}>
              <Input
                bg={'transparent'}
                className="input_search"
                color="white.0"
                border="none"
                py={['1rem']}
                name="searchQuery"
                placeholder="Search Movies..."
                style={{
                  borderBottomLeftRadius: '2rem',
                  borderTopLeftRadius: '2rem',
                  borderBottomRightRadius: '0',
                  borderTopRightRadius: '0',
                  marginLeft: '5px',
                  paddingLeft: '20px',
                  width: '100%',
                }}
              />
              <Button
                variant="secondary"
                fontSize={['1rem']}
                fontFamily="ubuntu"
                px={['2rem']}
                py={['1rem']}
                type="submit"
                style={{
                  borderBottomRightRadius: '2rem',
                  borderTopRightRadius: '2rem',
                }}
              >
                Search
                <Search
                  sx={{
                    marginLeft: '5px',
                    mt: '2px',
                    width: '20px',
                    height: '20px',
                  }}
                />
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
      {genreQuery.isLoading ? (
        <Text>Loading...</Text>
      ) : genreQuery.isError ? (
        <Text>Error Ocuured!</Text>
      ) : (
        <Box maxWidth={'lg'} mx="auto">
          <Text color={'white.0'} className={classNames.SECTION_HEADER} as="h3">
            Filter By:
          </Text>{' '}
          <Grid
            container
            justifyContent={'center'}
            rowGap={{
              lg: '1rem',
            }}
            columns={{
              lg: 10,
            }}
          >
            {genreQuery.data?.data?.genres?.slice(0, 20).map(_genre => (
              <Grid item lg={1}>
                <Button
                  style={
                    {
                      // backgroundImage: `linear-gradient(to right top, #0092ca, #0082b2, #00729c, #006285, #025370, #025674, #015877, #015b7b, #00719a, #0088ba, #009fdb, #00b7fd)`,
                    }
                  }
                  variant="secondary"
                  color="#fff"
                  borderRadius={'10px'}
                  px="0.5rem"
                  py="0.5rem"
                  onClick={() => {
                    handleSearch('');
                  }}
                >
                  <Text variant="ellipsis">{_genre?.name}</Text>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <Container maxWidth="xl">
        <Flex alignItems={'center'} justifyContent="space-between">
          <Text as="h1" className={classNames.SECTION_HEADER} color="white.0">
            Popular Movies
          </Text>
          <Box></Box>
        </Flex>
        <Grid
          container
          direction={'row'}
          alignItems="center"
          rowGap={[0, '1rem']}
          justifyContent={'center'}
        >
          {dicoverMoviesQuery.isLoading ? (
            <Text>Loading...</Text>
          ) : dicoverMoviesQuery.isError ? (
            <Text>Error occured</Text>
          ) : (
            dicoverMoviesQuery.data?.data.results
              ?.slice(0, 12)
              .map((movie, index) => (
                <Grid item xl={2} lg={3} sm={4} xs={6} p="10px" key={index}>
                  <Card
                    onClick={() => {
                      history.push(`/detail/${movie.id}`);
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
