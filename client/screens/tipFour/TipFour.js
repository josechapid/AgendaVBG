import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDescription, clearDescription } from '../../redux_toolkit/features/counter/Slice';



function TipFour () {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const description = useSelector((state) => state.tip.description);
    

      const handleEnviarDatos = async () => {
    try {
      const data = {
        user_id: 1,
        workshop_id: 4, 
        response: {
          description: description
        },
      };
      const response = await axios.post("http://localhost:3001/response", data);
      console.log("Respuesta del servidor: ", response.data);
      dispatch(clearDescription());
      navigation.navigate("FinalTip", { tipId: 4 });
    } catch (error) {
      console.error("Error al enviar los datos: ", error);      
    }
  };

   return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Encuentra la calma</Text>
            </View>
            <View style={styles.section}>
                <Image 
                source={require("../../assets/img/tip4/yourself.jpg")}
                style={styles.img}
                />
                <View style={styles.textSection}>
                    <Text style={styles.textCenter}>Reto 4:Meditacion</Text>
                </View>
                <View>
                    <Text style={styles.text}>Mira el siguiente video y sigue cada instruccion que te dan. Cuentanos como te sentistes</Text>
                </View>
                
            </View>
            <View style={styles.icon}>
                <AntDesign name="caretright" size={30} color="#f4a261" />
            </View>
            <View style={styles.section}>
                <View style={styles.description}>
                
                <TextInput
                    
                    placeholder="Escribe aquí tu descripción"
                    multiline
                    onChangeText={(text) => dispatch(setDescription(text))} 
                    value={description} 
                />
                </View>
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={handleEnviarDatos}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
            
        </View>
    )
}

export default TipFour;