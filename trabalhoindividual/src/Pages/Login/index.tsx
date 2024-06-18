import React, { useState } from 'react'
import {
  Text, TouchableOpacity, View,
  Image, Alert, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { styles } from './style';
import Banner from '../../Assets/banner.jpg'
import { TextInputComponent } from '../../Components/TextInputComponent'
import { ButtonComponents } from '../../Components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (value: string) => {
    setEmail(value)
    console.log('Valor do email: ' + value)
  }

  const handlePassword = (value: string) => {
    setPassword(value)
    console.log('Valor da senha: ', value);
  }

  const handleLogin = () => {
    Alert.alert("Login Efetuado!")
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <Text style={styles.title}>Bem Vindo(a)!</Text>

        <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoValue={email}
          recebendoPlaceHolder="Digite seu email..."
        />

        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Digite sua senha..."
          recebendoTipoDoInput={true}
          recebendoBackgroundColor='#c9c9c9'
        />

      <ButtonComponents title="Entrar" recebendoFuncao ={handleLogin}/>

      </View>
    </TouchableWithoutFeedback>
  )
}
