import { PlayCircleOutline } from '@mui/icons-material';
import React from 'react';
import { Box, Img, Text } from '../Blocks';
import './style.css';
import { classNames } from 'app/config';

export const Card = ({ title, imgUrl, rate, onClick = () => {} }) => {
  return (
    <Box onClick={onClick} className={classNames.CARD_WRAPPER}>
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
      <Img src={imgUrl} alt={title + 'image'} />
      <PlayCircleOutline
        className={classNames.PLAY_ICON}
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
