import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 40 : 40}px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: ${Platform.OS === 'android' ? 5 : 32}px;
`;

export const UserAvatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 98px;
  align-self: center;
`;
