import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  padding: 16px;
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 44px;
`;
