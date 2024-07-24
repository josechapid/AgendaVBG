import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setTipFiveDay, setTipFiveExercise, clearTipFive } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";



function TipFive () {
     const navigation = useNavigation();
     const dispatch = useDispatch();
     const { day, exercise} = useSelector((state) => state.tip.tipFive);

    const handleEnviarDatos = async () => {
        try{
            const data = {
                user_id: 1,
                workshop_id: 5, 
                response: {
                    day,
                    exercise
                },
            }
            const response = await axios.post("http://localhost:3001/response", data);
            console.log("Respuesta del servidor: ", response.data);
            dispatch(clearTipFive());
            navigation.navigate("FinalTip", { tipId: 5 });
        }catch(error){
            console.error("Error al enviar los datos: ", error);
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Construye la felicidad</Text>
            </View>
            <View>
                <Image
                source={require("../../assets/img/Tip5/smiling.jpg")}
                style={styles.img}
                />
                <View style={styles.textSection}>
                    <Text>Reto 5:Ejercita cuerpo y alma</Text>
                </View>
            </View>
            <View style={styles.textDescription}>
                <Text>Dias de ejercicio </Text>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.description}>
                <TextInput
                    
                    placeholder="Dia"
                    onChangeText={text => dispatch(setTipFiveDay(text))} 
                    value={day} 
                />
                </View>
                <View style={styles.description}>
                <TextInput
                    
                    placeholder="Ejercicio"
                    onChangeText={text => dispatch(setTipFiveExercise(text))} 
                    value={exercise} 
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

export default TipFive;