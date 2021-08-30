import React from 'react';
import { View, Text } from 'react-native';
import { Props } from 'components/Task/types';
import { styles } from 'components/Task/styles';

const Task: React.FC<Props> = ({ children }) => (
  <View style={styles.webTaskContainer}>
    <View style={styles.taskBody}>
      <View style={styles.square}></View>
      <Text style={styles.taskText}>{children}</Text>
    </View>
    <View style={styles.taskCheck}></View>
  </View>
);

export default Task;
