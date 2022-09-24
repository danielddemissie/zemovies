import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Bg1 from '../../../assets/images/queen.jpg';
import Card, { BigCard } from 'app/components/Card';
import { Grid, Text } from 'app/components/Blocks';
import AliceCarousel from 'react-alice-carousel';

export function HomePage() {
  const items = Array.from(Array(5)).map((_card, _index) => (
    <BigCard imgUrl={Bg1} message={`Image ${_index}`} />
  ));

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <AliceCarousel
        infinite
        autoPlay
        disableButtonsControls
        disableDotsControls
        mouseTracking
        autoPlayInterval={1000}
        animationDuration={1000}
        items={items}
      />

      <Grid
        container
        direction={'row'}
        columns={{
          lg: 12,
        }}
        mt="2rem"
      >
        <Text>Movies</Text>
        {Array.from(Array(6)).map((_card, _index) => (
          <Grid item lg={2} mx="2px">
            <Card
              title="title"
              imgUrl={
                'https://image.tmdb.org/t/p/w300//iRV0IB5xQeOymuGGUBarTecQVAl.jpg'
              }
              rate={4}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
