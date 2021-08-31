import { ADD_TASK, REMOVE_TASK } from 'screens/TasksPage/dunks/action-types';

interface IState {
  tasks: string[];
}

const initialState: IState = { tasks: [] };

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      console.log(action.payload);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((value, index) => index !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
