/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Box, Button } from '../Blocks';
import { ReactComponent as Logo } from '../../../assets/images/video.svg';
import { AppBar, MenuItem, Menu } from '@mui/material';
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
        alignContent={['space-between']}
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
                Movies
              </Text>
            </Flex>
          </Link>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <MenuIcon />
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={false}
            onClose={() => {}}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map(page => (
              <MenuItem key={page} onClick={() => {}}>
                <Text textAlign="center" color="white.0">
                  {page}
                </Text>
              </MenuItem>
            ))}
          </Menu>
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
