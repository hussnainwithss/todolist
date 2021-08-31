import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import Container from 'components/Container/Container';
import TasksPage from 'screens/TasksPage/TasksPage';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Container>
        <TasksPage />
      </Container>
    </Provider>
  );
}
