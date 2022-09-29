import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';
import { Grid, Text } from 'app/components/Blocks';
import { moviesQuery } from 'app/hooks';
import imgUrls from 'app/config/url';
import { useHistory } from 'react-router-dom';

import 'react-alice-carousel/lib/alice-carousel.css';
import './style.css';
import { Container } from '@mui/material';

export function HomePage() {
  const nowPlaying = moviesQuery.usegGetNowPlaying();
  const upcomingQuery = moviesQuery.usegGetUpcoming();
  const topRatedQuery = moviesQuery.usegGetTopRated();

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
          <Text className="section_header" as="h2">
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
                  <Grid item lg={2} sm={4} xs={11} p="10px" key={index}>
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
        </section>
        <section
          style={{
            margin: '0 10px',
          }}
        >
          <Text className="section_header" as={'h2'}>
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
                  <Grid item lg={2} sm={4} xs={11} p="10px" key={index}>
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
        </section>

        <section
          style={{
            margin: '0 10px',
          }}
        >
          <Text className="section_header" as="h2">
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
                  <Grid item lg={2} sm={4} p={'10px'} xs={11} key={index}>
                    <Card
                      onClick={() => {
                        history.push(`/detail/${movie.id}`);
                      }}
                      title={movie.title}
                      imgUrl={imgUrls.smallImages + movie.poster_path}
                      rate={movie.vote_average}
                    />
                  </Grid>
                ))
            )}
          </Grid>
        </section>
      </Container>
    </>
  );
}
