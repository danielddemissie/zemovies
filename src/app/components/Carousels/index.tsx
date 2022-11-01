import './style.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useHistory } from 'react-router-dom';
import { moviesQuery } from 'app/hooks';
import { Box, Text, Img, Flex } from '../Blocks';
import { imgUrls } from 'app/config/';

const HomeCarousel = () => {
  const trendingQuery = moviesQuery.usegGetPopular();
  const history = useHistory();

  const handleClick = id => {
    history.push(`/detail/movie/${id}/`);
  };

  const items = trendingQuery.data?.data.results.map((item: any) => (
    <Box
      key={item?.id}
      className="main__nav"
      height={['100vh', '90vh']}
      style={{
        cursor: 'pointer',
        backgroundImage: `url(${imgUrls.bigImages}/${item?.backdrop_path})`,
      }}
      onClick={() => handleClick(item?.id)}
    >
      <div className="nav">
        <h3>{item?.title || item?.name}</h3>
        {/* <h5 style={{ color: '#abb7c4' }}>
          {item?.media_type === 'tv' ? 'Tv Series' : 'Movie'}
        </h5> */}

        <p>{item?.overview}</p>
        <div className="back__btn">
          <button
            onClick={() => handleClick(item?.id)}
            style={{ textTransform: 'uppercase' }}
          >
            detail
          </button>
        </div>
      </div>
    </Box>
  ));

  return (
    <>
      {trendingQuery.isLoading ? (
        <Box className="main__nav">
          <Text>Loading..</Text>
        </Box>
      ) : trendingQuery.isError ? (
        <Box>
          <Text>Error occurred</Text>
        </Box>
      ) : (
        <AliceCarousel
          infinite
          autoPlay
          disableButtonsControls
          disableDotsControls
          keyboardNavigation
          mouseTracking
          autoPlayInterval={2000}
          items={items}
        />
      )}
    </>
  );
};
const CastCarousel = ({ casts }) => {
  const responsive = {
    1024: {
      items: 1,
    },
  };
  const items = casts?.map((item: any) => (
    <Flex flexDirection="column" alignItems={'center'} py="10px" key={item?.id}>
      {item.profile_path ? (
        <Img
          width="80px"
          height="80px"
          borderRadius={'50%'}
          src={imgUrls.smallImages + item.profile_path}
          alt={item.name}
        />
      ) : (
        <Box
          width="80px"
          borderRadius={'50%'}
          backgroundColor="white.0"
          height="80px"
          textAlign={'center'}
          pt="20px"
          fontSize="small"
        >
          Image Not Found
        </Box>
      )}
      <Text color="white.0" fontSize={'1rem'} py="10px" display={'block'}>
        {item.name}
      </Text>
    </Flex>
  ));

  return (
    <AliceCarousel
      infinite
      autoPlay
      disableButtonsControls
      disableDotsControls
      keyboardNavigation
      mouseTracking
      autoWidth
      responsive={responsive}
      autoPlayInterval={1000}
      items={items}
    />
  );
};

export { HomeCarousel, CastCarousel };
