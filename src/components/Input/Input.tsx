import React from 'react';

import {Container, Label, TextInput} from './styles';

interface InputProps {
  label: string;
  onChangeText: (text: string) => void;
  isLarge?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  onChangeText,
  isLarge = false,
}) => {
  return (
    <Container>
      {label && <Label isLarge={isLarge}>{label}</Label>}
      <TextInput
        isLarge={isLarge}
        onChangeText={onChangeText}
        keyboardType="decimal-pad"
      />
    </Container>
  );
};

export default Input;
