import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Card, { BigCard } from 'app/components/Card';
import { Grid, Box, Text } from 'app/components/Blocks';
import AliceCarousel from 'react-alice-carousel';
import { useTopRated, useTrending, useUpcoming } from 'app/hooks';
import 'react-alice-carousel/lib/alice-carousel.css';
import './style.css';

export function HomePage() {
  const trendignQuery = useTrending();
  const upcomingQuery = useUpcoming();
  const topRatedQuery = useTopRated();

  const baseUrl = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';
  const items = trendignQuery.data?.data?.results?.map((_movie, _index) => (
    <BigCard
      imgUrl={baseUrl + _movie.backdrop_path}
      title={_movie.title ? _movie.title : _movie.original_name}
      description={_movie.overview}
    />
  ));

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <section>
        <Text as="h1" my="5rem" color={'white.0'}>
          Trending Movies
        </Text>
        {trendignQuery.isLoading ? (
          <Text>Loading...</Text>
        ) : trendignQuery.isError ? (
          <Text>Error occured</Text>
        ) : (
          <Box>
            <AliceCarousel
              infinite
              touchTracking
              autoPlay
              disableButtonsControls
              mouseTracking
              autoWidth
              keyboardNavigation
              autoPlayInterval={1000}
              animationDuration={1000}
              animationType="fadeout"
              items={items}
            />
          </Box>
        )}
      </section>

      <section>
        <Text my="5rem" as={'h1'} color="white.0" display="block">
          Upcoming Movies
        </Text>
        <Grid
          container
          direction={'row'}
          alignItems="center"
          justifyContent={'center'}
          rowGap={{
            lg: '1rem',
          }}
        >
          {upcomingQuery.isLoading ? (
            <Text>Loading...</Text>
          ) : upcomingQuery.isError ? (
            <Text>Error occured</Text>
          ) : (
            upcomingQuery.data?.data.results
              ?.slice(0, 12)
              .map((movie, index) => (
                <Grid item lg={2} sm={6} xs={12} p="10px" key={index}>
                  <Card
                    title={movie.title}
                    imgUrl={baseUrl + movie.backdrop_path}
                    rate={movie.vote_average}
                  />
                </Grid>
              ))
          )}
        </Grid>
      </section>

      <section>
        <Text my="5rem" color={'white.0'} as={'h1'} display="block">
          Top Rated Movies
        </Text>
        <Grid
          container
          direction={'row'}
          alignItems="center"
          rowGap={{
            lg: '1rem',
          }}
          justifyContent={'center'}
        >
          {topRatedQuery.isLoading ? (
            <Text>Loading...</Text>
          ) : topRatedQuery.isError ? (
            <Text>Error occured</Text>
          ) : (
            topRatedQuery.data?.data.results
              ?.slice(0, 12)
              .map((movie, index) => (
                <Grid item lg={2} sm={6} xs={12} p="10px" key={index}>
                  <Card
                    title={movie.title}
                    imgUrl={baseUrl + movie.backdrop_path}
                    rate={movie.vote_average}
                  />
                </Grid>
              ))
          )}
          <Text textAlign={'left'}>View More</Text>
        </Grid>
      </section>
    </>
  );
}
