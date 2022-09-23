import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Bg1 from '../../../assets/images/queen.jpg';
import { BigCard } from 'app/components/Card';
import { Grid } from 'app/components/Blocks';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Grid
        container
        direction={'row'}
        columns={{ lg: 12, md: 12, sm: 12 }}
        columnGap={{
          lg: 1,
          md: 0.5,
          sm: 1,
        }}
      >
        {Array.from(Array(5)).map((_card, _index) => (
          <Grid lg={12} sm={2} md={2} item>
            <BigCard imgUrl={Bg1} message="Introducing IMDb What to Watch" />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
