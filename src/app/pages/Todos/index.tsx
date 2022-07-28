import { API } from 'app/API';
import { Box, Flex } from 'app/components/Blocks/Basics';
import { Button } from 'app/components/Blocks/Button';
import { Input } from 'app/components/Blocks/Input';
import { Form, Formik } from 'formik';
import React from 'react';
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
    <Box mx={['auto']} width={['100px', '90%']}>
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
              <Flex gap={'20px'} mb={['10px']} flexDirection={['column']}>
                <Box>
                  <Input
                    width={['300px']}
                    height={[4]}
                    name="todo"
                    borderRadius={'4px'}
                  />
                </Box>
                <Box>
                  <Input name="userId" width={['300px']} height={[4]} />
                </Box>
              </Flex>
              <Button
                type="submit"
                borderRadius={'4px'}
                variant="primary"
                px={[1, 3]}
                fontSize={['15px']}
                py={[1, 1]}
                onClick={async () => {
                  mutation.mutate({});
                  console.log(values);
                }}
              >
                add Todo
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
