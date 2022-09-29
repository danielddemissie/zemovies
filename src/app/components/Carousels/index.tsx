import './style.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useHistory } from 'react-router-dom';
import { usePopular } from 'app/hooks';
import { Box, Text } from '../Blocks';
import { imgUrls } from 'app/config/';

const HomeCarousel = () => {
  const trendingQuery = usePopular();
  const history = useHistory();

  const handleClick = id => {
    history.push(`/detail/${id}/`);
  };

  const items = trendingQuery.data?.data.results.map((item: any) => (
    <Box
      key={item?.id}
      className="main__nav"
      height={['70vh', '100vh']}
      style={{
        backgroundImage: `url(${imgUrls.bigImages}/${item?.backdrop_path})`,
      }}
    >
      <div className="nav">
        <h3>{item?.title || item?.name}</h3>
        <h5 style={{ color: '#abb7c4' }}>
          {item?.media_type === 'tv' ? 'Tv Series' : 'Movie'}
        </h5>

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
          autoPlayInterval={3000}
          items={items}
        />
      )}
    </>
  );
};

export default HomeCarousel;
