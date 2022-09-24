import React from 'react';
import { Box, Button, Text } from '../Blocks';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, imgUrl, rate, onClick = () => {} }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: '100%',
        cursor: 'pointer',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
      }}
    >
      <Box
        width="100%"
        height="350px"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#464646',
          borderRadius: '5px',
        }}
        background={`url(${imgUrl})`}
      >
        <Box
          background={`linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 10%,
            rgba(0, 0, 0, 0.3) 5%,
            rgba(0, 0, 0, 0.3) 3%,
            rgba(0, 0, 0, 0.3) 3%,
            rgba(0, 0, 0, 0.3) 1%)`}
        >
          <Text zIndex="10" color="gold" fontSize={'1.3rem'}>
            {rate}
          </Text>
          <Text
            zIndex={'10'}
            fontWeight="bold"
            color="white.0"
            px={'10px'}
            fontSize={['1rem']}
          >
            {title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export const BigCard = ({ imgUrl, description, title }) => (
  <Box
    minWidth={['100%', '800px']}
    mx="auto"
    borderRadius={'10px'}
    display="flex"
    flexDirection={'column'}
    justifyContent={'flex-end'}
    height={['50vh', 'calc(100vh - 10rem)']}
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'center',
      backgroundColor: '#464646',
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
    <Text color="white.0">{description}</Text>
    <Button
      mt={'1rem'}
      variant="primary"
      fontSize={['1rem']}
      fontFamily="ubuntu"
      px={['2rem']}
      type="submit"
      py={['0.5rem']}
      borderRadius={['0.4rem']}
    >
      Detail
    </Button>
  </Box>
);
