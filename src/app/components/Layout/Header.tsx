/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Box, Button } from '../Blocks';
import { ReactComponent as Logo } from '../../../assets/images/video.svg';
import { AppBar, IconButton, Toolbar, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';
import { useLocation } from 'react-router-dom';

export default () => {
  const param = useLocation().pathname;
  const pages = ['signin', 'signup', 'contact us'];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      sx={
        param === '/.'
          ? {
              background: `linear-gradient(
          to bottom,
          rgba(0, 0, 0,1) 40%,
          rgba(0, 0, 0, 0.98) 20%,
          rgba(0, 0, 0, 1) 100%
        )`,
            }
          : {
              background: '#fff',
              boxShadow: 'none',
            }
      }
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
                color={param === ',/' ? 'white.0' : 'primary.0'}
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
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map(page => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
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
            <Button
              key={page}
              color="white.0"
              onClick={handleCloseNavMenu}
              my={2}
            >
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

/**
 * <ul
        style={{
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            marginBottom: '0.5rem',
          }}
        >
          <Logo />
        </Link>
        <Link
          style={{
            textDecoration: 'none',
          }}
          to="/"
        >
          <Text
            fontFamily={'ubuntu'}
            fontSize={['2rem']}
            color="white.0"
            fontWeight={'bold'}
          >
            Movies
          </Text>
        </Link>
      </ul>

      <ul
        style={{
          alignItems: 'center',
        }}
      >
        <li>
          <Link to="/signup">
            <Text
              fontFamily={'ubuntu'}
              fontSize={['1rem']}
              fontWeight={[3]}
              px="3"
              py="2"
              color="primary.0"
              hover={{
                backgroundColor: '#00B7FD',
                borderRadius: '4px',
                color: 'white',
              }}
            >
              Signin
            </Text>
          </Link>{' '}
        </li>
        <li>
          <Link to="/signup">
            <Text
              fontFamily={'ubuntu'}
              fontSize={['1rem']}
              color="primary.0"
              fontWeight={[3]}
              px="3"
              py="2"
              hover={{
                backgroundColor: '#00B7FD',
                borderRadius: '4px',
                color: 'white',
              }}
            >
              Signup
            </Text>
          </Link>{' '}
        </li>
        <li>
          <Link to="/signup">
            <Text
              fontFamily={'ubuntu'}
              fontSize={['1rem']}
              color="primary.0"
              fontWeight={[3]}
              px="3"
              py="2"
              hover={{
                backgroundColor: '#00B7FD',
                borderRadius: '4px',
                color: 'white',
              }}
            >
              Contact us
            </Text>
          </Link>{' '}
        </li>
      </ul>
 */
