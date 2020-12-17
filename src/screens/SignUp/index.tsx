import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';

import { FormHandles } from '@unform/core';
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const _keyboardShown = useCallback(() => setKeyboardOpen(true), []);
  const _keyboardHidden = useCallback(() => setKeyboardOpen(false), []);

  useEffect(() => {
    if (Platform.OS !== 'ios') {
      Keyboard.addListener('keyboardDidShow', _keyboardShown);
    }

    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardShown);
    };
  }, [_keyboardShown]);

  useEffect(() => {
    if (Platform.OS !== 'ios') {
      Keyboard.addListener('keyboardDidHide', _keyboardHidden);
    }

    return () => {
      Keyboard.removeListener('keyboardDidHide', _keyboardHidden);
    };
  }, [_keyboardHidden]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Form
              ref={formRef}
              onSubmit={(data: string) => {
                console.log(data);
              }}
            >
              <Input name="name" icon="user" placeholder="Nome" />

              <Input name="email" icon="mail" placeholder="E-mail" />

              <Input name="password" icon="lock" placeholder="Senha" />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {(Platform.OS === 'ios' || !keyboardOpen) && (
        <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#FFF" />
          <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
      )}
    </>
  );
};

export default SignUp;
