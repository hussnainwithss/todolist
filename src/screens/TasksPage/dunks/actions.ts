import { ADD_TASK, REMOVE_TASK } from 'screens/TasksPage/dunks/action-types';
import { AppDispatch } from 'store';

export function addTask(task: string) {
  console.log('this should be called');
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function removeTask(index: number) {
  return {
    type: REMOVE_TASK,
    payload: index,
  };
}

export const addTaskAsync = (task: string) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(addTask(task));
  }, 1000);
};

export const removeTaskAysnc = (index: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(removeTask(index));
  }, 1000);
};
