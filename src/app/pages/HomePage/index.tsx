import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from 'app/components/Card';
import { Grid, Text, Box } from 'app/components/Blocks';
import { moviesQuery } from 'app/hooks';
import { imgUrls } from 'app/config/';
import { useHistory } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import './style.css';
import { CircularProgress, Container } from '@mui/material';

export function HomePage() {
  const nowPlaying = moviesQuery.usegGetNowPlaying();
  const upcomingQuery = moviesQuery.usegGetUpcoming();
  const topRatedQuery = moviesQuery.usegGetTopRated();
  const [viewNumber, setViewNumber] = React.useState({
    STR: 12,
    SP: 12,
    SNP: 12,
  });

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
          <Text
            textAlign={'left'}
            style={{
              display: topRatedQuery.isSuccess ? 'block' : 'none',
              float: 'right',
              marginRight: '30px',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => {
              setViewNumber(prev => {
                return viewNumber.STR === 12
                  ? { ...prev, STR: 20 }
                  : { ...prev, STR: 12 };
              });
            }}
          >
            {viewNumber.STR === 12 ? 'View More' : 'View Less'} &#187;
          </Text>
          <Grid
            container
            direction={'row'}
            alignItems="center"
            rowGap={[0, '1rem']}
            justifyContent={'center'}
          >
            {topRatedQuery.isLoading ? (
              <Box textAlign={'center'}>
                <CircularProgress />
                <Text color="white.0" display={'block'}>
                  Loading...
                </Text>
              </Box>
            ) : topRatedQuery.isError ? (
              <Text color={'white.0'}>Error occured</Text>
            ) : (
              topRatedQuery.data?.data.results
                ?.slice(0, viewNumber.STR)
                .map((movie, index) => (
                  <Grid item lg={2} sm={4} xs={6} p="10px" key={index}>
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
          <Text
            textAlign={'left'}
            style={{
              display: nowPlaying.isSuccess ? 'block' : 'none',
              float: 'right',
              marginRight: '30px',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => {
              setViewNumber(prev => {
                return viewNumber.SNP === 12
                  ? { ...prev, SNP: 20 }
                  : { ...prev, SNP: 12 };
              });
            }}
          >
            {nowPlaying.data && viewNumber.SNP === 12
              ? 'View More'
              : 'View Less'}{' '}
            &#187;
          </Text>
          <Grid
            container
            direction={'row'}
            alignItems="center"
            justifyContent={'center'}
            rowGap={[0, '1rem']}
          >
            {nowPlaying.isLoading ? (
              <Box textAlign={'center'}>
                <CircularProgress />
                <Text color={'white.0'} display="block">
                  Loading...
                </Text>
              </Box>
            ) : nowPlaying.isError ? (
              <Text color="white.0">Error occured</Text>
            ) : (
              nowPlaying.data?.data.results
                ?.slice(0, viewNumber.SNP)
                .map((movie, index) => (
                  <Grid item lg={2} sm={4} xs={6} p="10px" key={index}>
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
          <Text
            textAlign={'left'}
            style={{
              display: upcomingQuery.isSuccess ? 'block' : 'none',
              float: 'right',
              marginRight: '30px',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => {
              setViewNumber(prev => {
                return viewNumber.SP === 12
                  ? { ...prev, SP: 20 }
                  : { ...prev, SP: 12 };
              });
            }}
          >
            {upcomingQuery.data && viewNumber.SP === 12
              ? 'View More'
              : 'View Less'}{' '}
            &#187;
          </Text>
          <Grid
            container
            direction={'row'}
            alignItems="center"
            justifyContent={'center'}
            rowGap={[0, '1rem']}
          >
            {upcomingQuery.isLoading ? (
              <Box textAlign={'center'}>
                <CircularProgress />
                <Text display={'block'} color="white.0">
                  Loading...
                </Text>
              </Box>
            ) : upcomingQuery.isError ? (
              <Text color="white.0">Error occured</Text>
            ) : (
              upcomingQuery.data?.data.results
                ?.slice(0, viewNumber.SP)
                .map((movie, index) => (
                  <Grid item lg={2} sm={4} p={'10px'} xs={6} key={index}>
                    <Card
                      onClick={() => {
                        history.push(`/detail/movie/${movie.id}`);
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
