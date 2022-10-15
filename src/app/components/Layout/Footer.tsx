/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Flex, Box, Text, Button } from '../Blocks';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/video.svg';
import { EmailRounded, GitHub, LinkedIn, Phone } from '@mui/icons-material';
import { Container, Divider } from '@mui/material';
import './style.css';

export default () => {
  /**
   * Change the logic to
   * dynamically show the footer
   */

  const pages = ['about us', 'contact', 'info'];
  return (
    <Container>
      <Divider
        sx={{
          mt: '5rem',
          fontSize: '10px',
        }}
      />
      <Flex
        gap={10}
        alignItems="center"
        flexWrap="wrap"
        flexDirection={['column', 'row']}
        justifyContent={'space-evenly'}
        px="1rem"
        py="2rem"
        mt="2rem"
      >
        <Box mb="10px">
          <Link to="/">
            <Flex gap={'1rem'} alignItems="center">
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

        <Box>
          <Text color="white.0" as="h3">
            Information
          </Text>
          {pages.map(page => (
            <Button key={page} color="white.0" my={2}>
              <Link to="/signup">
                <Text
                  fontFamily={'ubuntu'}
                  fontSize={['1rem']}
                  fontWeight={[3]}
                  py="0.4rem"
                  textAlign="left"
                  style={{
                    textTransform: 'capitalize',
                  }}
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
        <Box>
          <Text color="white.0" as="h3">
            Contact
          </Text>
          <a
            href="tel:+251920615870"
            style={{
              color: 'white',
            }}
          >
            <Phone
              sx={{
                color: '#656A71',
              }}
            />
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
              +251920615870
            </Text>
          </a>
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            color="white.0"
            my={2}
          >
            <a
              href="mailto:danielddemissie@gmail.com"
              style={{
                color: 'white',
              }}
            >
              <EmailRounded
                sx={{
                  '& :hover': {
                    color: '#00B7FD',
                  },
                }}
              />
            </a>
            <a
              href="https://github.com/danielddemissie"
              style={{
                color: 'white',
              }}
            >
              <GitHub
                sx={{
                  '& :hover': {
                    color: '#00B7FD',
                  },
                }}
              />
            </a>
            <a
              href="mailto:danielddemissie@gmail.com"
              style={{
                color: 'white',
              }}
            >
              <LinkedIn
                sx={{
                  '& :hover': {
                    color: '#00B7FD',
                  },
                }}
              />
            </a>
          </Flex>
        </Box>
      </Flex>
      <Text textAlign={'center'} display="block" color="white.2" py="1rem">
        Copy Rights @
        <a
          href="https://github.com/danielddemissie"
          style={{
            color: '#00B7FD',
          }}
        >
          Daniel Demelash
        </a>{' '}
        2022
      </Text>
    </Container>
  );
};
