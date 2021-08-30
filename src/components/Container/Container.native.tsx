import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from 'components/Container/styles';
import { Props } from 'components/Container/types';

const Container: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
};

export default Container;
