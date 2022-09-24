import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Card, { BigCard } from 'app/components/Card';
import { Grid, Box, Text, Grad } from 'app/components/Blocks';
import AliceCarousel from 'react-alice-carousel';
import { useTrending, useUpcoming } from 'app/hooks';

export function HomePage() {
  const trendignQuery = useTrending();
  const upcomingQuery = useUpcoming();
  const baseUrl = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';
  const items = trendignQuery.data?.data?.results?.map((_card, _index) => (
    <BigCard
      imgUrl={baseUrl + _card.backdrop_path}
      title={_card.title}
      description={_card.overview}
    />
  ));
  const percent = 0.3;
  const section = React.useRef<HTMLElement>(null);
  const [padding, setPadding] = React.useState(0);

  const syncState = () => {
    const { current } = section;
    if (current) {
      setPadding(current?.offsetWidth * percent);
    }
  };

  React.useEffect(syncState, []);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Text as="h1">Trending Movies</Text>
      {trendignQuery.isLoading ? (
        <Text>Loading...</Text>
      ) : trendignQuery.isError ? (
        <Text>Error occured</Text>
      ) : (
        <Box ref={section}>
          <AliceCarousel
            infinite
            paddingLeft={padding}
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
      <Text as={'h2'} display="block">
        Upcoming Movies
      </Text>
      <Grid
        container
        direction={'row'}
        alignItems="center"
        justifyContent={'center'}
        mt="2rem"
      >
        {upcomingQuery.isLoading ? (
          <Text>Loading...</Text>
        ) : upcomingQuery.isError ? (
          <Text>Error occured</Text>
        ) : (
          upcomingQuery.data?.data.results?.map((movie, index) => (
            <Grid item lg={3} p="2px" key={index}>
              <Card
                title={movie.title}
                imgUrl={baseUrl + movie.backdrop_path}
                rate={movie.vote_average}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
