import { API } from 'app/API';
import { Box } from 'app/components/Blocks/Basics';
import { Input } from 'app/components/Blocks/Basics/Input';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
const todos = ['task1', 'task2', 'task3'];
const getTodos = () => todos;

const postTodo: MutationFunction = () => {
  todos.push('new Task');
  return Promise.resolve();
};
export default function Todos() {
  //access the client
  const queryClient = useQueryClient();
  //query

  const query = useQuery('todos', getTodos);
  //mutation

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      //invalidate and refresh
      queryClient.invalidateQueries('todos');
    },
  });

  return (
    <Box mx={['auto']} backgroundColor={'#fff'} width={['100px', '90%']}>
      Todos
      <ul>
        {query.data?.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <Box>
        <Formik
          initialValues={{
            todo: '',
            userId: '',
          }}
          onSubmit={async values => {
            const res = await API({
              method: 'POST',
              data: values,
              route: 'todo/add',
            });
            console.log(res);
            console.log('call ');
          }}
        >
          {({ values }) => (
            <Form>
              <Box>
                <Input
                  border={'1px solid #000'}
                  backgroundColor={'black.4'}
                  width={['300px']}
                  height={[4]}
                  name="todo"
                />
              </Box>
              <Box>
                <Input
                  name="userId"
                  border={'1px solid #000'}
                  backgroundColor={'black.4'}
                  width={['300px']}
                  height={[4]}
                />
              </Box>
              <button
                type="submit"
                onClick={async () => {
                  mutation.mutate({});
                  console.log(values);
                }}
              >
                addTodo
              </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
