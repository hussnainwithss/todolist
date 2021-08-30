import React from 'react';
import { View, Text } from 'react-native';
import { styles } from 'components/PageHeading/styles';
import { Props } from 'components/PageHeading/types';

const PageHeading: React.FC<Props> = ({ children }) => {
  return <Text style={styles.pageHeading}>{children}</Text>;
};

export default PageHeading;
