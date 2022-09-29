/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box, Flex, Button, Grid, Text } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { BigCard, Card } from 'app/components/Card';
import { moviesQuery } from 'app/hooks';
import { useParams, useHistory } from 'react-router-dom';
import { imgUrls } from 'app/config';

export function DetailPage() {
  const param = useParams<{ id: string }>();
  const history = useHistory();
  const detailQuery = moviesQuery.useGetdetail(param?.id);
  const relatedQuery = moviesQuery.useGetRelated(param?.id);

  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Box>
        {detailQuery.isLoading ? (
          <Text>Loading</Text>
        ) : detailQuery.isError ? (
          <Text>Error occured!</Text>
        ) : (
          <Box>
            <Box
              className="main__nav"
              sx={{
                display: {
                  xs: 'none',
                  lg: 'flex',
                },
                zIndex: '0',
              }}
              height={['80vh']}
              style={{
                backgroundImage: `url(${imgUrls.bigImages}/${detailQuery.data?.data?.backdrop_path})`,
              }}
            />
            <Box
              position={'absolute'}
              top={['-20px', '25%']}
              left={['0px', '15%']}
            >
              <BigCard detail={detailQuery.data?.data} />
            </Box>
          </Box>
        )}
      </Box>
      <Box mt={['140vh', '10rem']} maxWidth={'xl'} mx="auto">
        <Text mt={'10rem'} className="section_header" as="h2">
          Related Movies
        </Text>
        <Grid
          container
          direction={'row'}
          alignItems="center"
          rowGap={'1rem'}
          justifyContent={'center'}
        >
          {relatedQuery.isLoading ? (
            <Text>Loading...</Text>
          ) : relatedQuery.isError ? (
            <Text>Error occured</Text>
          ) : (
            relatedQuery.data?.data.results
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
      </Box>
    </>
  );
}
