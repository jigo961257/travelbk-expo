import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

interface CustomeTextInputProps {
  lable: String;
  setText: Function;
  setHeight: Number;
  setWidth: Number;
}

export default function CustomeTextInput(props: CustomeTextInputProps) {
  const { lable, setText, setHeight, setWidth } = props;

  const [d_source, setDSource] = React.useState('');
  const [d_destination, setDDestination] = React.useState('');

  return (
    <View
      style={[
        styles.textBoxContainer,
        setHeight
          ? { height: setHeight }
          : setWidth
          ? { width: setWidth }
          : null,
      ]}>
      <Text style={styles.label}>{lable ? lable : 'Enter Source:'}</Text>
      {setText ? (
        <TextInput
          placeholder="source"
          style={styles.textBox}
          // onChange={setText}
          // onChangeText={setText}
        />
      ) : (
        <Text>the seter is not define</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '400',
  },
  textBox: {
    fontSize: 12,
    color: 'gray',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingVertical: 5,
  },
  textBoxContainer: {
    margin: 5,
    marginTop: 5,
  },
});
