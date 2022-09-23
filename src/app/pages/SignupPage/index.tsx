/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Box, Button, Text, Grid, Img } from 'app/components/Blocks';
import { schemas } from '../../config';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import SignupHero from '../../../assets/images/signup-hero.jpg';

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
        container
        direction={'row'}
        alignItems={'center'}
        gap="1rem"
        justifyContent={'center'}
        columns={{ md: 5, lg: 8 }}
      >
        <Grid item md={2} mt="3rem" lg={3}>
          <Img width={500} height={400} src={SignupHero} alt="signup hero" />
        </Grid>
        <Grid item md={4} lg={2}>
          <Text as={'h1'}>Sign up</Text>

          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={schemas.signupSchema}
            onSubmit={values => handleSubmit(values)}
          >
            {({ values }) => (
              <Form>
                <Box mb={['1rem']} maxWidth={'500px'}>
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
                <Box mb={['1rem']} maxWidth={'500px'}>
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
                  sign up
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
}
