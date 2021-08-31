import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginLeft: 10,
  },
  addText: {
    fontSize: 20,
  },
  inputError: {
    color: 'red',
    paddingLeft: 15,
  },
  fieldError: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 1,
    width: 300,
    borderColor: 'red',
    color: 'red',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
    color: 'black',
  },
  placeholderStyleError: {
    color: 'red',
  },
  InputContainer: {},
});
