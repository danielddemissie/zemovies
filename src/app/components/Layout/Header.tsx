/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Box, Button } from '../Blocks';
import { ReactComponent as Logo } from '../../../assets/images/video.svg';
import { AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
export default () => {
  const pages = ['signin', 'pricing', 'about us'];

  return (
    <AppBar
      sx={{
        background: '#fff',
        boxShadow: 'none',
      }}
      position="static"
    >
      <Flex
        flexDirection={['row']}
        alignContent={['center']}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box>
          <Link to="/">
            <Flex alignItems={'center'} gap={'1rem'}>
              <Logo />
              <Text
                fontFamily={'ubuntu'}
                fontSize={['2rem']}
                color={'primary.0'}
                fontWeight={'bold'}
              >
                ZeMovies
              </Text>
            </Flex>
          </Link>
        </Box>

        <Box
          alignSelf={'center'}
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <MenuIcon
            style={{
              width: '3rem',
              height: '3rem',
              color: '#0092ca',
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {pages.map(page => (
            <Button key={page} color="white.0" onClick={() => {}} my={2}>
              <Link to="/signup">
                <Text
                  fontFamily={'ubuntu'}
                  fontSize={['1rem']}
                  fontWeight={[3]}
                  px="1rem"
                  py="0.4rem"
                  color="primary.0"
                  hover={{
                    backgroundColor: '#00B7FD',
                    borderRadius: '4px',
                    color: 'white',
                  }}
                >
                  {page}
                </Text>
              </Link>
            </Button>
          ))}
        </Box>
      </Flex>
    </AppBar>
  );
};
