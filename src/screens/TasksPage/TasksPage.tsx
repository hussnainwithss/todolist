import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from 'screens/TasksPage/styles';
import { Props } from 'screens/TasksPage/types';
import Task from 'components/Task/Task';
import { addTaskAsync, removeTaskAysnc } from 'screens/TasksPage/dunks/actions';
import PageHeading from 'components/PageHeading/PageHeading';
import InputField from 'elements/Form/InputField/InputField';
import { RootState } from 'store';

const TasksPage: React.FC<Props> = ({ tasks, addNewTask, removeTask }) => {
  return (
    <>
      <PageHeading>Today's Tasks</PageHeading>
      <ScrollView
        style={styles.webTasksWrapper}
        keyboardShouldPersistTaps="handled"
      >
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TouchableOpacity key={index} onPress={() => removeTask(index)}>
              <Task key={index}>{task}</Task>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noTasksText}>
            Hurray! you're done for the day 🎉🎉
          </Text>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Add a new task"
          submissionHelper={addNewTask}
          addIcon="+"
          name="tasks"
        />
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addNewTask: (task: string) => dispatch(addTaskAsync(task)),
  removeTask: (index: number) => dispatch(removeTaskAysnc(index)),
});
const mapStateToProps = (state: RootState) => ({
  tasks: state.tasks.tasks,
});

export const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(TasksPage);
