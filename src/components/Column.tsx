import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

const Column = ({children, style}: Props) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default Column;
