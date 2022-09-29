import { PlayCircleOutline } from '@mui/icons-material';
import React from 'react';
import { Box, Img, Text } from '../Blocks';
import './style.css';
import { classNames } from 'app/config';

export const Card = ({ title, imgUrl, rate, onClick = () => {} }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: {
          lg: '200px',
        },
      }}
      className={classNames.CARD_WRAPPER}
    >
      <Text
        className="rate"
        style={{
          backgroundColor: rate >= 8 ? 'black' : rate > 5 ? 'black' : 'black',
        }}
        color={rate >= 8 ? 'gold' : rate > 6 ? 'green' : 'red'}
        fontSize={'1.3rem'}
      >
        {rate}
      </Text>
      <Img
        style={{ position: 'relative' }}
        src={imgUrl}
        alt={title + 'image'}
      />

      <PlayCircleOutline className={classNames.PLAY_ICON} />
      <Text
        fontWeight="400"
        color="white.0"
        px={'5px'}
        py={['5px']}
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
    borderRadius={'10px'}
    display="flex"
    width={['400px']}
    height={'400px'}
    flexDirection={'column'}
    justifyContent={'flex-end'}
    flexWrap="wrap"
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'center',
    }}
    background={`url(${imgUrl})`}
  >
    {/* <Box
      style={{
        zIndex: '0',
        background: `linear-gradient(
          to top,
          rgba(0, 0, 0, 0.3) 50%,
          rgba(0, 0, 0, 0.3) 60%,
          rgba(0, 0, 0, 0.3) 10%
        )`,
        padding: '15px 10px',
      }}
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
      <Text
        variant={'multiLineEllipsis'}
        my={['1rem']}
        style={{
          zIndex: '10',
        }}
        color="white.0"
      >
        {description}
      </Text>
      <Text
        fontSize={['1rem']}
        fontFamily="ubuntu"
        px={['2rem']}
        textAlign="center"
        py={['0.5rem']}
        bg="primary.0"
        width={'100px'}
        color="white.0"
        borderRadius={['0.4rem']}
      >
        Detail
      </Text>
    </Box> */}
  </Box>
);
