/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Box, Grid, Text } from 'app/components/Blocks';
import { Helmet } from 'react-helmet-async';
import { BigCard, Card } from 'app/components/Card';
import { moviesQuery } from 'app/hooks';
import { useParams, useHistory } from 'react-router-dom';
import { imgUrls } from 'app/config';

export function DetailPage() {
  const param = useParams<{ id: string }>();
  const history = useHistory();
  const [openModal, setOpenModal] = React.useState(false);

  const detailQuery = moviesQuery.useGetdetail(param?.id);
  const relatedQuery = moviesQuery.useGetRelated(param?.id);
  const videosQuery = moviesQuery.useGetVideo(param?.id);
  const movieCredit = moviesQuery.useGetCredit(param?.id);
  const videos = videosQuery.data?.data?.results;

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
              height={['80vh', '50vh']}
              sx={{
                zIndex: 0,
                backgroundImage: {
                  lg: `url(${imgUrls.bigImages}/${detailQuery.data?.data?.backdrop_path})`,
                  sm: `url(${imgUrls.bigImages}/${detailQuery.data?.data?.backdrop_path})`,
                  md: `url(${imgUrls.bigImages}/${detailQuery.data?.data?.backdrop_path})`,
                  xs: `url(${imgUrls.mediumImages}/${detailQuery.data?.data?.poster_path})`,
                },
              }}
            />
            <Box
              position={['relative', 'absolute']}
              top={['-20px', '20%', '25%']}
              left={['0px', '5%', '5%', '15%']}
              mx="10px"
              width={['90%', '90%', '90%', '80%']}
            >
              <BigCard
                open={openModal}
                setOpenModal={setOpenModal}
                detail={detailQuery.data?.data}
                videos={videos}
                credit={movieCredit.data?.data}
              />
            </Box>
          </Box>
        )}
      </Box>
      <section
        style={{
          margin: '0 10px',
        }}
      >
        <Box mt={[0, '35rem']} maxWidth={'xl'} mx="auto">
          <Text className="section_header" as="h2">
            Similar Movies You may Like
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
                  <Grid item lg={3} xl={2} sm={4} xs={6} p="10px" key={index}>
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
      </section>
    </>
  );
}
