import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Label} from './styles';

interface ColorScheme {
  backgroundColor: string;
  labelColor: string;
}

interface ButtonProps {
  label: string;
  isDisabled?: boolean;
  onPress: () => void;
  colors: ColorScheme;
}

const Button: React.FC<ButtonProps> = ({
  label,
  isDisabled = false,
  onPress,
  colors,
}) => {
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <Container color={colors.backgroundColor} isDisabled={isDisabled}>
        <Label color={colors.labelColor} isDisabled={isDisabled}>
          {label}
        </Label>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
