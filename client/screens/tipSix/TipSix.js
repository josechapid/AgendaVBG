import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setDescriptionSeis, clearDescriptionSeis } from '../../redux_toolkit/features/counter/Slice';
import axios from "axios";


function TipSix () {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const descriptionTipSeis = useSelector((state) => state.tip.descriptionTipSeis);
    const userIdR = useSelector((state) => state.tip.user)
    

        const handleEnviarDatos = async () => {
    try {
      const data = {
        user_id: userIdR.data.id,
        workshop_id: 6, 
        filled: true,
        response: {
          descriptionTipSeis: descriptionTipSeis
        },
      };
      const response = await axios.post("https://agendavbg.onrender.com/response", data);
      console.log("Respuesta del servidor: ", response.data);
      dispatch(clearDescriptionSeis());
      navigation.navigate("FinalTip", { tipId: 6 });
    } catch (error) {
      console.error("Error al enviar los datos: ", error);      
    }
  };


    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Piensa positivo</Text>
            </View>
            <View>
                <Image
                source={require("../../assets/img/tip6/positive.jpeg")}
                style={styles.img}
                />
                <View style={styles.textSection}>
                    <Text style={styles.text}>Como te sentiste</Text>
                </View>
            </View>
            <View style={styles.description}>
                
                <TextInput
                    
                    placeholder="Escribe aquí tu descripción"
                    multiline
                    onChangeText={text => dispatch(setDescriptionSeis(text))} 
                    value={descriptionTipSeis} 
                />
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={handleEnviarDatos}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
    )
}

export default TipSix;