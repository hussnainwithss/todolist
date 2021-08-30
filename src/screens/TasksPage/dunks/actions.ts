import { ADD_TASK } from 'screens/TasksPage/dunks/action-types';
import { AppDispatch } from 'store';

export function addTask(task: string) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export const addTaskAsync = (task: string) => (dispatch:AppDispatch) => {
  setTimeout(() => {
    dispatch(addTask(task));
  }, 1000);
};
