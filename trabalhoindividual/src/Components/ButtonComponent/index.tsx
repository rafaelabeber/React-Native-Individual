import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./style"
import Banner from '../../Assets/banner.jpg'


type PropsButton ={
  title: string;
  recebendoFuncao:() => void;
}

export function ButtonComponents({recebendoFuncao, title}: PropsButton){
    return(
        <>
        <TouchableOpacity style={styles.button} onPress={recebendoFuncao}>
          <Image
            style={{
              width: '100%',
              height: 50,
              position: 'absolute',
              borderRadius: 10,
            }}
            source={Banner}
            alt="fundo botão"
          />

          <Text style={styles.textButton}>
           {title}
          </Text>
        </TouchableOpacity>
        </>
    )
}