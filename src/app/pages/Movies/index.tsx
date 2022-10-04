/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box, Grid, Flex, Button, Text, Input } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';
import { moviesQuery } from 'app/hooks';
import { classNames, imgUrls } from 'app/config';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import './style.css';
import { Container } from '@mui/system';
import {
  FilterAlt as FilterIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import './style.css';
import {
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  FormControl,
} from '@mui/material';
import Pagination from 'app/components/Pagination';

export function MoviesPage() {
  const history = useHistory();
  const [query, setQuery] = React.useState('');
  const [filterType, setFilterType] = React.useState('');
  const [filterValue, setFilterValue] = React.useState('');
  const scrollRef = React.useRef<Element>(null);
  const [page, setPage] = React.useState(1);
  const filterBy = ['Genre', 'Time', 'All'];
  let movieData: any = [];

  const discoverMoviesQuery = query
    ? moviesQuery.useGetSearchMovie('movie', query, page)
    : moviesQuery.useGetDiscover('movie', page);
  const genreQuery = moviesQuery.useGetGenres('movie');
  const filterQuery = moviesQuery.useGetFilterhMovie('movie', filterValue);

  const handleSearch = value => {
    setFilterValue('');
    setQuery(value.query);
  };

  const handleFilterType = (event: SelectChangeEvent) => {
    if (event.target.value === 'All') {
      setFilterType('');
    }
    setFilterType(event.target.value);
  };

  const handleFilter = value => {
    setQuery('');
    setFilterValue(value);
    if (scrollRef) {
      scrollRef?.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const handlePagination = (event, newPageNumber) => {
    setPage(newPageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (filterValue) {
    movieData = filterQuery;
  } else {
    movieData = discoverMoviesQuery;
  }
  return (
    <>
      <Helmet>
        <title>Movies Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={values => handleSearch(values)}
      >
        {({ values }) => (
          <Form>
            <Flex
              alignItems="center"
              flexDirection={['column-reverse', 'row']}
              justifyContent={'center'}
            >
              <FormControl
                size="small"
                sx={{
                  m: 1,
                  mt: {
                    lg: '0.5rem',
                    xs: '0.8rem',
                  },
                  minWidth: {
                    lg: '150px',
                    xs: '290px',
                  },
                  backgroundColor: '#053F55',
                  borderRadius: '10px',
                }}
              >
                <InputLabel
                  id="demo-multiple-chip-label"
                  sx={{
                    color: 'white',
                    mt: '5px',
                  }}
                >
                  FilterBy
                </InputLabel>
                <Select
                  sx={{
                    border: 'none',
                    color: 'white',
                    py: '6px',
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        marginTop: '10px ',
                        marginLeft: '20px',
                        color: 'white',
                        backgroundColor: '#053F55',
                        width: {
                          lg: '150px',
                          sm: '250px',
                          xs: '290px',
                        },
                      },
                    },
                  }}
                  label={null}
                  labelId="demo-single-chip-label"
                  id="demo-single-chip"
                  IconComponent={() => (
                    <FilterIcon
                      sx={{
                        marginRight: '10px',
                        color: '#fff',
                      }}
                    />
                  )}
                  value={filterType}
                  onChange={handleFilterType}
                >
                  {filterBy.map(name => (
                    <MenuItem key={name} value={name === 'none' ? '' : name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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

      {filterType === 'Genre' && (
        <Box maxWidth={'md'} mx="auto">
          <Text color={'white.0'} textAlign="center" as="h3">
            Genres:
          </Text>{' '}
          <Grid container columns={{}} gap={'1rem'} justifyContent={'center'}>
            {genreQuery.data?.data?.genres?.slice(0, 20).map(_genre => (
              <Grid item lg={2} sm={3} xs={4} md={3}>
                <Button
                  style={{
                    width: '150px',
                    fontFamily: 'ubuntu',
                  }}
                  variant="secondary"
                  color="#fff"
                  borderRadius={'10px'}
                  px="0.5rem"
                  py="0.5rem"
                  onClick={() => {
                    handleFilter(_genre?.id);
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
        <Box ref={scrollRef}>
          <Text as="h1" className={classNames.SECTION_HEADER} color="white.0">
            Discover Movies
          </Text>
        </Box>
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
          ) : movieData.data?.data.results.length >= 1 ? (
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
          ) : (
            <Text mx={'auto'}>No results found!.</Text>
          )}
        </Grid>
        <Flex alignItems={'center'} mt={'1rem'} justifyContent="center">
          <Pagination
            onChange={handlePagination}
            count={
              movieData?.data?.data?.total_pages > 500
                ? 500
                : movieData?.data?.data?.total_pages
            }
            page={page}
            fontSize={'12px'}
          />
        </Flex>
      </Container>
    </>
  );
}
