/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Box, Button, Flex, Text } from 'app/components/Blocks';
import { schemas } from '../../config';

export function Signup() {
  const handleSubmit = values => console.log(values);
  return (
    <Flex>
      <Text>Sign up</Text>
      <Formik
        initialValues={{ name: 'daniel' }}
        validationSchema={schemas.signupSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Box>
              <Input name="name" />
              <Text variant="error">
                <ErrorMessage name="name" />
              </Text>
            </Box>
            <Button>sign up</Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}
