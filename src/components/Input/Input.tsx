import React from 'react';

import {Container, Label, TextInput} from './styles';

interface InputProps {
  label: string;
  onChangeText: (text: string) => void;
  isLarge?: boolean;
  password?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  onChangeText,
  isLarge = false,
  password = false,
}) => {
  return (
    <Container>
      {label && <Label isLarge={isLarge}>{label}</Label>}
      <TextInput
        isLarge={isLarge}
        onChangeText={onChangeText}
        keyboardType="decimal-pad"
        secureTextEntry={password}
      />
    </Container>
  );
};

export default Input;
