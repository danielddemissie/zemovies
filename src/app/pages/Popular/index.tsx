import React from 'react';
import { Grid, Flex, Text, Input } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';
import { moviesQuery } from 'app/hooks';
import { classNames, imgUrls } from 'app/config';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import './style.css';
import { Search as SearchIcon } from '@mui/icons-material';
import { Container } from '@mui/material';
import Pagination from 'app/components/Pagination';
import { CardSkelton } from 'app/components/Skeleton/Card';

export function PopularPage() {
  const [query, setQuery] = React.useState('');
  const [page, setPage] = React.useState(1);
  const history = useHistory();
  let movieData: any = [];

  const paginateQuery = moviesQuery.usegGetPopular(page);
  const searchQuery = moviesQuery.useGetSearchMovie('movie', query, page);

  const handleSearch = value => {
    setQuery(value.query);
  };
  const handlePagination = (event, newPageNumber) => {
    setPage(newPageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (query) {
    movieData = searchQuery;
  } else {
    movieData = paginateQuery;
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
            Array.from(Array(12)).map(_card => (
              <Grid
                item
                lg={2}
                sm={4}
                xs={6}
                p="10px"
                color="black.0"
                key={_card}
              >
                <CardSkelton />
              </Grid>
            ))
          ) : movieData.isError ? (
            <Text color="white.0">Error occured</Text>
          ) : movieData.data?.data?.results?.length >= 1 ? (
            movieData.data?.data.results?.map((movie, index) => (
              <Grid item xl={2.3} lg={3} sm={4} xs={6} p="10px" key={index}>
                <Card
                  onClick={() => {
                    history.push(`/detail/tv/${movie.id}`);
                  }}
                  title={movie.title}
                  imgUrl={imgUrls.mediumImages + movie.poster_path}
                  rate={movie.vote_average}
                />
              </Grid>
            ))
          ) : (
            <Text mx={'auto'}>No results found!.</Text>
          )}
        </Grid>

        {movieData.data && (
          <Flex alignItems={'center'} mt={'1rem'} justifyContent="center">
            <Pagination
              onChange={handlePagination}
              count={
                movieData?.data?.data?.total_pages > 1000
                  ? 500
                  : movieData?.data?.data?.total_pages
              }
              page={page}
              fontSize={'15px'}
            />
          </Flex>
        )}
      </Container>
    </>
  );
}
