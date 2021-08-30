import React from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView } from 'react-native';
import { styles } from 'screens/TasksPage/styles';
import { Props } from 'screens/TasksPage/types';
import Task from 'components/Task/Task';
import { addTask } from 'screens/TasksPage/dunks/actions';
import PageHeading from 'components/PageHeading/PageHeading';
import { RootState } from 'store';

const TasksPage: React.FC<Props> = ({ tasks, addNewTask }) => {
  return (
    <>
      <PageHeading>Today's Tasks</PageHeading>
      <ScrollView
        contentContainerStyle={styles.tasksWrapper}
        keyboardShouldPersistTaps="handled"
      >
        {tasks.length > 0 ? (
          tasks.map((task, index) => <Task key={index}>{task}</Task>)
        ) : (
          <Text style={styles.noTasksText}>
            Hurray! you're done for the day 🎉🎉
          </Text>
        )}
      </ScrollView>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addNewTask: (task: string) => dispatch(addTask(task)),
});
const mapStateToProps = (state: RootState) => ({
  tasks: state.tasks.tasks,
});

export const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(TasksPage);
