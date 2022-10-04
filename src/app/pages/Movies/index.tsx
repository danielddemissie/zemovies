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

export function MoviesPage() {
  const history = useHistory();
  const [query, setQuery] = React.useState('');
  const [filterType, setFilterType] = React.useState('');
  const [filterValue, setFilterValue] = React.useState('');
  const filterBy = ['Genre', 'Time', 'All'];
  let movieData: any = [];

  const discoverMoviesQuery = moviesQuery.useGetDiscover('movie');
  const genreQuery = moviesQuery.useGetGenres('movie');
  const searchQuery = moviesQuery.useGetSearchMovie('movie', query);
  const filterQuery = moviesQuery.useGetFilterhMovie('movie', filterValue);

  const handleSearch = value => {
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
  };

  if (query) {
    movieData = searchQuery;
  } else if (filterValue) {
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
        initialValues={{ searchQuery: '' }}
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
                  minWidth: {
                    lg: '130px',
                    xs: '250px',
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
                    '& .MuiList-root-MuiMenu-list': {
                      backgroundColor: 'red',
                    },
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  }}
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
                  marginLeft: '5px',
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
          <Grid
            container
            justifyContent={'center'}
            rowGap={{
              lg: '1rem',
            }}
            columns={
              {
                //
              }
            }
            gap={'1rem'}
          >
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
        <Flex alignItems={'center'} justifyContent="space-between">
          <Text as="h1" className={classNames.SECTION_HEADER} color="white.0">
            Discover Movies
          </Text>
        </Flex>
        <Grid
          container
          direction={'row'}
          alignItems="center"
          rowGap={[0, '1rem']}
          justifyContent={'center'}
          color="white.0"
        >
          {movieData.isLoading ? (
            <Text>Loading...</Text>
          ) : movieData.isError ? (
            <Text>Error occured</Text>
          ) : (
            movieData.data?.data.results?.slice(0, 12).map((movie, index) => (
              <Grid item xl={2} lg={3} sm={4} xs={6} p="10px" key={index}>
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
