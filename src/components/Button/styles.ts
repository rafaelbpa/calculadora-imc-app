import styled from 'styled-components/native';
import {lighten} from 'polished';

interface ButtonProps {
  isDisabled: boolean;
  color: string;
}

export const Container = styled.View<ButtonProps>`
  background-color: ${({isDisabled, color}) =>
    isDisabled ? lighten(0.25, color) : color};
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Label = styled.Text<ButtonProps>`
  color: ${({isDisabled, color}) => (isDisabled ? '#aaaaaa' : color)};
  font-size: 22px;
  font-weight: bold;
`;
