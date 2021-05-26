import styled from 'styled-components/native';

interface InputProps {
  isLarge: boolean;
}

export const Container = styled.View`
  margin-top: 24px;
`;

export const Label = styled.Text<InputProps>`
  font-weight: bold;
  font-size: ${({isLarge}) => (isLarge ? 24 : 14)}px;
  margin-bottom: 4px;
`;

export const TextInput = styled.TextInput<InputProps>`
  height: ${({isLarge}) => (isLarge ? 100 : 60)}px;
  background-color: #cecece;
  padding: 20px;
  font-size: ${({isLarge}) => (isLarge ? 44 : 14)}px;
  font-weight: bold;
  border-radius: 8px;
`;
