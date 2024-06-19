import React, { useState } from 'react'
import {
  Text, TextInput, TouchableOpacity, View,
  Image, Button, Alert, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { styles } from './style';
import github from '../../Assets/github.jpg'
import { ButtonComponents } from '../../Components/ButtonComponent';

export function Home() {

  const buscar = () => {
    Alert.alert("Encontre suas coisas.")
  }
  const repositorio = () => {
    Alert.alert("Repositório Criado com Sucesso")
  }

  return (

      <View style={styles.container}>
        <Text style={styles.title}>Bem Vindo(a)!</Text>

        <Image source={github} style={styles.gif}/>

        <Text style={styles.bodytext}>
          Adicione repositorios favoritos aqui para ter acesso rápido a qualquer momento,
          sem ter que pesquisar

        </Text>

        <ButtonComponents title="Buscar GitHub" recebendoFuncao ={buscar}/>
        <ButtonComponents title="Repositórios" recebendoFuncao ={repositorio}/>





      </View>  )
}
