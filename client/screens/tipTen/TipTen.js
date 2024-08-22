import React, { useState, useEffect } from "react";
import {  Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setTipTenSituation, setTipTenHowAct, setTipTenChange, clearTipTen } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";

const TipTen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { situation, howact, change} = useSelector((state) => state.tip.tipTen);
    const userIdR = useSelector((state) => state.tip.user)
    
    const handleEnviarDatos = async () => {
        try{
            const data = {
                user_id: userIdR.data.id,
                workshop_id: 10, 
                filled: true,
                response: {
                    situation,
                    howact,
                    change
                },
            }
            const response = await axios.post("https://agendavbg.onrender.com/response", data);
            dispatch(clearTipTen());
            navigation.navigate("FinalTip", { tipId: 10 });
        }catch(error){
            console.error("Error al enviar los datos: ", error);
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Controlate</Text>
            </View>
            <View style={styles.section}>
                <Image
                source={require("../../assets/img/tip10/Youcan.jpeg")}
                style={styles.img}
                />
                <View style={styles.textSection}>
                    <Text style={styles.textCenter}>Reto 10:Controla tus imsulsos</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.description}>
                <TextInput
                    
                    placeholder="Situacion"
                    onChangeText={text => dispatch(setTipTenSituation(text))} 
                    value={situation} 
                />
                </View>
                <View style={styles.description}>
                <TextInput
                    
                    placeholder="Como actuo"
                    onChangeText={text => dispatch(setTipTenHowAct(text))} 
                    value={howact} 
                />
                </View>
                <View style={styles.description}>
                <TextInput
                    
                    placeholder="Cambios"
                    onChangeText={text => dispatch(setTipTenChange(text))} 
                    value={change} 
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

export default TipTen;