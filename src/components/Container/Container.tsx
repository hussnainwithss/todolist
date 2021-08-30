import React from 'react';
import { View } from 'react-native';
import { styles } from 'components/Container/styles';
import { Props } from 'components/Container/types';

const Container: React.FC<Props> = ({ children }) => {
  return <View style={styles.webContainer}>{children}</View>;
};

export default Container;
