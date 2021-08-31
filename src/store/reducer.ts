import { combineReducers } from 'redux';
import tasks from 'screens/TasksPage/dunks/reducers';

const combinedReducer = combineReducers({
  tasks,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

export default rootReducer;
