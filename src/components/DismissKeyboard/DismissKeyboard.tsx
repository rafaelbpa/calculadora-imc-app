import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const DismissKeyboard: React.FC = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
