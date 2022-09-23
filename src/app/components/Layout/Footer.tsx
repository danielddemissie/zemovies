/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Flex, Box, Text, Button } from '../Blocks';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/video.svg';

export default () => {
  /**
   * Change the logic to
   * dynamically show the footer
   */

  const pages = ['about us', 'contact', 'info'];
  return (
    <Flex
      gap={10}
      alignItems="center"
      flexDirection={['column', 'row']}
      justifyContent={'space-evenly'}
    >
      <Box>
        <Link to="/">
          <Flex gap={'1rem'} alignItems="center">
            <Logo />
            <Text
              fontFamily={'ubuntu'}
              fontSize={['2rem']}
              color={'primary.0'}
              fontWeight={'bold'}
            >
              Movies
            </Text>
          </Flex>
        </Link>
      </Box>
      {Array.from(Array(4)).map(menus => (
        <Box key={menus}>
          <Text>Information</Text>
          {pages.map(page => (
            <Button key={page} color="white.0" my={2}>
              <Link to="/signup">
                <Text
                  fontFamily={'ubuntu'}
                  fontSize={['1rem']}
                  fontWeight={[3]}
                  py="0.4rem"
                  textAlign="left"
                  color="black.5"
                  hover={{
                    color: '#00B7FD',
                  }}
                >
                  {page}
                </Text>
              </Link>
            </Button>
          ))}
        </Box>
      ))}
    </Flex>
  );
};
