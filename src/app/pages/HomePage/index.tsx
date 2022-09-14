import { Grid } from 'app/components/Blocks/Basics';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Card from 'app/components/Card';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Grid
        width={['100%', '90%']}
        mx={['auto']}
        mt={[5]}
        container
        justifyContent={'center'}
        spacing={{ xs: 2, sm: 3, md: 3, lg: 4 }}
        columns={{
          xs: 12,
          sm: 6,
          md: 12,
          lg: 12,
        }}
      >
        {Array.from(Array(20)).map((_, index) => (
          <Grid item xs={12} sm={3} md={4} lg={3} key={index}>
            <Card
              index={index}
              userName={'Daniel'}
              title={'This is Cool'}
              subheader={'so cool man'}
              imgUrl={
                'https://images.freeimages.com/images/previews/4ba/healthy-food-1327899.jpg'
              }
              description={`Lorem ipsum dolor sit amet, consect etur adipi sicing elit. Necess itatibus ab distinctio,
           veritatis corrupti dolore corporis? Quo facere distinctio earum aliquid cum architecto tempore molestiae nihil aliquam, 
           consequatur, velit blanditiis labore recusandae aperiam sunt similique eius ipsa tenetur quod officia nesciunt! Aut, 
           explicabo laborum hic maiores aliquid optio voluptate quidem atque nam sed, quibusdam iste soluta ab qui. Numquam iusto facilis perferendis? 
           Explicabo doloribus ducimus sit distinctio soluta, dolorem id animi nesciunt itaque officiis! Ut iste natus, voluptates esse numquam expedita.`}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
