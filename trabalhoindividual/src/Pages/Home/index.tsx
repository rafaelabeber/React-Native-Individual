import React, { useState } from 'react'
import {
  Text, TextInput, TouchableOpacity, View,
  Image, Button, Alert, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { styles } from './style';
import gatito from '../../Assets/gatito.gif'
import { ButtonComponents } from '../../Components/ButtonComponent';

export function Home() {

  const mensagem = () => {
    Alert.alert("Surpresa!")
  }

  return (

      <View style={styles.container}>
        <Text style={styles.title}>Bem Vindo(a)!</Text>

        <Image source={gatito} alt= "Gif de um Gato bem fofão" style={styles.gif}/>

        <Text style={styles.bodytext}>
          Esse é o meu trabalho individual da disciplina de
          ReactNative do Serratec!

        </Text>

        <ButtonComponents title="Aperte" recebendoFuncao ={mensagem}/>



      </View>  )
}
