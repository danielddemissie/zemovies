import { PlayCircleOutline } from '@mui/icons-material';
import React from 'react';
import { Box, Text } from '../Blocks';
import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, imgUrl, rate, onClick = () => {} }) => {
  return (
    <Box
      onClick={onClick}
      width="100%"
      height="350px"
      display="flex"
      flexDirection={'column'}
      alignItems={'flex-start'}
      className="card_wrapper"
      sx={{
        cursor: 'pointer',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'contain',
        borderRadius: '5px',
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <Text
        style={{
          backgroundColor: rate >= 8 ? 'black' : rate > 5 ? 'black' : 'black',
        }}
        borderRadius="3px"
        px={'10px'}
        zIndex="10"
        color={rate >= 8 ? 'gold' : rate > 6 ? 'green' : 'red'}
        fontSize={'1.3rem'}
      >
        {rate}
      </Text>
      <PlayCircleOutline
        className="play_icon"
        sx={{
          alignSelf: 'center',
          position: 'relative',
          top: '40%',
          width: '50px',
          height: '50px',
          color: '#ffffffe1',
        }}
      />
      <Text
        style={{
          position: 'relative',
          top: '70%',
        }}
        fontWeight="bold"
        color="white.0"
        px={'5px'}
        variant="ellipsis"
        width="90%"
        fontSize={['1rem']}
      >
        {title}
      </Text>
    </Box>
  );
};

export const BigCard = ({ imgUrl, description, title }) => (
  <Box
    minWidth={['300px', '500px', '800px']}
    borderRadius={'10px'}
    display="flex"
    flexDirection={'column'}
    justifyContent={'flex-end'}
    flexWrap="wrap"
    height={['50vh', 'calc(100vh - 10rem)']}
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'center',
      padding: '3px 10px',
    }}
    background={`url(${imgUrl})`}
  >
    <Text
      color="white.0"
      display={'block'}
      fontSize={['1rem', '2rem', '2rem']}
      fontWeight={'bold'}
      p={0}
      my={'1rem'}
    >
      {title}
    </Text>
    <Text variant={'multiLineEllipsis'} color="white.0">
      {description}
    </Text>
    <Text
      mt={'0.5rem'}
      mb={'2rem'}
      fontSize={['1rem']}
      fontFamily="ubuntu"
      px={['1rem']}
      textAlign="center"
      py={['0.5rem']}
      bg="primary.0"
      width={'100px'}
      color="white.0"
      borderRadius={['0.4rem']}
    >
      Detail
    </Text>
  </Box>
);
