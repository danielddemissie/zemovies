/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Box, Flex, Button, Text, Grid } from 'app/components/Blocks';
import { schemas } from '../../config';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { ReactComponent as GoogleIcon } from '../../../assets/images/googleIcon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/images/facebookIcon.svg';
import { Divider, Chip } from '@mui/material';
import './style.css';

export function Signup() {
  const [isSignin, setIsSignin] = React.useState(true);
  const history = useHistory();
  const handleSubmit = values => {
    history.push('/');
  };
  return (
    <>
      <Helmet>
        <title>SignupPage </title>
        <meta
          name="description"
          content="Signup page to register for zmovies"
        />
      </Helmet>
      <Flex
        maxWidth="lg"
        alignItems={'center'}
        flexDirection={['column', 'row']}
        mx="auto"
        mt={'5rem'}
        height={['60vh', '50vh']}
        justifyContent={'space-between'}
        style={{
          boxShadow: `rgba(3, 102, 214, 0.3) 0px 0px 0px 3px`,
          borderRadius: '10px',
        }}
      >
        <Box mx="auto">
          <Text as={'h1'} color="primary.0">
            {isSignin ? 'Sign in' : 'Sign up'}
          </Text>

          <Flex flexWrap={'wrap'} justifyContent="space-between">
            <Text
              px="1rem"
              py="0.5rem"
              fontSize={['12px', '15px']}
              hover={{
                boxShadow: `rgba(3, 102, 214, 0.3) 0px 0px 0px 3px`,
                borderRadius: '10px',
              }}
              style={{
                cursor: 'pointer',
                color: 'white',
              }}
            >
              <GoogleIcon
                style={{
                  width: '20px',
                  marginRight: '5px',
                }}
              />
              Signin with Google{' '}
            </Text>

            <Text
              px="1rem"
              py="0.5rem"
              hover={{
                boxShadow: `rgba(3, 102, 214, 0.3) 0px 0px 0px 3px`,
                borderRadius: '10px',
              }}
              fontSize={['12px', '15px']}
              style={{
                cursor: 'pointer',
                color: 'white',
              }}
            >
              <FacebookIcon
                style={{
                  width: '25px',
                  marginRight: '5px',
                }}
              />
              Signin with Facebook{' '}
            </Text>
          </Flex>
          <Divider
            sx={{
              my: '1rem',
            }}
          >
            <Chip
              label="Or"
              sx={{
                px: '1rem',
                color: 'white',
              }}
            />
          </Divider>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={schemas.signupSchema}
            onSubmit={values => handleSubmit(values)}
          >
            {({ values }) => (
              <Form>
                {!isSignin && (
                  <Box mb={['1rem']}>
                    <Input
                      bg={'black.0'}
                      color="white.0"
                      border="1px solid #0092ca"
                      borderRadius={[0]}
                      p={[3]}
                      placeholder="Email"
                      name="email"
                      style={{
                        width: '100%',
                      }}
                    />
                    <Text variant="error">
                      <ErrorMessage name="email" />
                    </Text>
                  </Box>
                )}
                <Box mb={['1rem']}>
                  <Input
                    bg={'black.0'}
                    color="white.0"
                    border="1px solid #0092ca"
                    borderRadius={[0]}
                    p={[3]}
                    placeholder="User name"
                    name="username"
                    style={{
                      width: '100%',
                    }}
                  />
                  <Text variant="error">
                    <ErrorMessage name="username" />
                  </Text>
                </Box>
                <Box mb={['1rem']}>
                  <Input
                    bg={'black.0'}
                    color="white.0"
                    border="1px solid #0092ca"
                    borderRadius={[0]}
                    p={[3]}
                    placeholder="Password"
                    style={{
                      width: '100%',
                    }}
                    name="password"
                  />
                  <Text variant="error">
                    <ErrorMessage name="password" />
                  </Text>
                </Box>
                <Button
                  variant="primary"
                  fontSize={['1rem']}
                  fontFamily="ubuntu"
                  px={['2rem']}
                  type="submit"
                  py={['0.5rem']}
                  borderRadius={['1rem']}
                >
                  {isSignin ? 'sign in' : 'sign up'}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>

        <Divider />
        <Box
          bg="black.1"
          width={['100%', '50%']}
          display="flex"
          alignItems={'center'}
          flexDirection="column"
          justifyContent="center"
          borderRadius="10px"
          height={'100%'}
          mb="20px"
        >
          <Text as="h4" color="white.0" textAlign={'center'}>
            {isSignin ? "Don't have an account?" : 'Continue with my account?'}
          </Text>
          <Button
            variant="primary"
            fontSize={['1rem']}
            fontFamily="ubuntu"
            px={['2rem']}
            type="submit"
            py={['0.5rem']}
            borderRadius={['1rem']}
            onClick={() => setIsSignin(!isSignin)}
          >
            {isSignin ? 'sign up' : 'sign in'}
          </Button>
        </Box>
      </Flex>
    </>
  );
}
