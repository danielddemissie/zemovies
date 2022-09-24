/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import {
  Input,
  Box,
  Flex,
  Button,
  Text,
  Grid,
  Img,
} from 'app/components/Blocks';
import { schemas } from '../../config';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import SignupHero from '../../../assets/images/signup-hero.jpg';
import { ReactComponent as GoogleIcon } from '../../../assets/images/googleIcon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/images/facebookIcon.svg';
import { Divider, Chip } from '@mui/material';

export function Signup() {
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
      <Grid
        maxWidth="lg"
        container
        direction={'row'}
        alignItems={'center'}
        gap="1rem"
        justifyContent={'center'}
        columns={{ md: 5, lg: 12 }}
      >
        <Grid item md={2} mt="3rem" lg={6}>
          <Img width={500} height={400} src={SignupHero} alt="signup hero" />
        </Grid>
        <Divider />
        <Grid item md={4} lg={5}>
          <Text as={'h1'} color="primary.0">
            Sign in
          </Text>

          <Flex flexWrap={'wrap'} justifyContent="space-between">
            <Text
              px="1rem"
              py="0.5rem"
              style={{
                boxShadow: `rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px`,
                cursor: 'pointer',
              }}
            >
              <GoogleIcon
                style={{
                  width: '20px',
                  marginRight: '5px',
                }}
              />
              Signup with Google{' '}
            </Text>

            <Text
              px="1rem"
              py="0.5rem"
              style={{
                cursor: 'pointer',

                boxShadow: `rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px`,
              }}
            >
              <FacebookIcon
                style={{
                  width: '25px',
                  marginRight: '5px',
                }}
              />
              Signup with FaceBook{' '}
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
                <Box mb={['1rem']}>
                  <Input
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
                  sign in
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
}
