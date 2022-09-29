import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';
import { Grid, Img, Text } from 'app/components/Blocks';
import { useTopRated, useNowPlaying, useUpcoming } from 'app/hooks';
import imgUrls from 'app/config/url';
import { useHistory } from 'react-router-dom';

import 'react-alice-carousel/lib/alice-carousel.css';
import './style.css';
import { Container } from '@mui/material';

export function HomePage() {
  const nowPlaying = useNowPlaying();
  const upcomingQuery = useUpcoming();
  const topRatedQuery = useTopRated();

  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Container maxWidth={'xl'}>
        <section
          style={{
            margin: '0 10px',
          }}
        >
          <Text as="h1" mt="-5rem" mb="3rem" color={'white.0'}>
            Now Playing Movies
          </Text>
          <Grid
            container
            direction={'row'}
            alignItems="center"
            justifyContent={'center'}
            rowGap={'1rem'}
          >
            {nowPlaying.isLoading ? (
              <Text>Loading...</Text>
            ) : nowPlaying.isError ? (
              <Text>Error occured</Text>
            ) : (
              nowPlaying.data?.data.results
                ?.slice(0, 12)
                .map((movie, index) => (
                  <Grid item lg={2} sm={6} xs={11} p="10px" key={index}>
                    <Card
                      onClick={() => {
                        history.push(`/detail/${movie.id}`);
                      }}
                      title={movie.title}
                      imgUrl={imgUrls.mediumImages + movie.backdrop_path}
                      rate={movie.vote_average}
                    />
                  </Grid>
                ))
            )}
            <Text textAlign={'left'}>View More</Text>
          </Grid>
        </section>

        <section
          style={{
            margin: '0 10px',
          }}
        >
          <Text my="5rem" as={'h1'} color="white.0" display="block">
            Upcoming Movies
          </Text>
          <Grid
            container
            direction={'row'}
            alignItems="center"
            justifyContent={'center'}
            rowGap={'1rem'}
          >
            {upcomingQuery.isLoading ? (
              <Text>Loading...</Text>
            ) : upcomingQuery.isError ? (
              <Text>Error occured</Text>
            ) : (
              upcomingQuery.data?.data.results
                ?.slice(0, 12)
                .map((movie, index) => (
                  <Grid item lg={2} sm={6} p={'10px'} xs={11} key={index}>
                    <Card
                      onClick={() => {
                        history.push(`/detail/${movie.id}`);
                      }}
                      title={movie.title}
                      imgUrl={imgUrls.smallImages + movie.backdrop_path}
                      rate={movie.vote_average}
                    />
                  </Grid>
                ))
            )}
          </Grid>
        </section>

        <section
          style={{
            margin: '0 10px',
          }}
        >
          <Text my="5rem" color={'white.0'} as={'h1'} display="block">
            Top Rated Movies
          </Text>
          <Grid
            container
            direction={'row'}
            alignItems="center"
            rowGap={'1rem'}
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
                  <Grid item lg={2} sm={6} xs={11} p="10px" key={index}>
                    <Card
                      onClick={() => {
                        history.push(`/detail/${movie.id}`);
                      }}
                      title={movie.title}
                      imgUrl={imgUrls.mediumImages + movie.backdrop_path}
                      rate={movie.vote_average}
                    />
                  </Grid>
                ))
            )}
            <Text textAlign={'left'}>View More</Text>
          </Grid>
        </section>
      </Container>
    </>
  );
}
