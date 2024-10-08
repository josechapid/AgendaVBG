import { View, Text, Image, TextInput,Pressable, Alert, BackHandler } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setDescriptionSeis, clearDescriptionSeis } from '../../redux_toolkit/features/counter/Slice';
import axios from "axios";

function TipSix () {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const descripcion = useSelector((state) => state.tip.descripcion);
    const userIdR = useSelector((state) => state.tip.user)

    const [think, setThink] = useState("");

    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          return true; // Esto bloquea la acción de regresar
        };

        BackHandler.addEventListener("hardwareBackPress", onBackPress);

        return () => {
          BackHandler.removeEventListener("hardwareBackPress", onBackPress);
        };
      }, [])
    );
    function handleAddThink(text) {
      setThink(text)
      dispatch(setDescriptionSeis(think.trim()))
      
    }
    
    const handleEnviarDatos = async () => {
      if(descripcion === ""){
          Alert.alert("Campo Vacio", 
            "Por favor agrega como te sentiste"
          );
          return
        }
    try {
      const data = {
        user_id: userIdR.data.id,
        workshop_id: 6, 
        filled: true,
        response: {
          descripcion: descripcion
        },
      };
      const response = await axios.post("https://agendavbg-frp4.onrender.com/response", data);
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
            <View style={styles.section}>
            <View style={styles.description}>
                
                <TextInput
                    
                    placeholder="Escribe aquí tu descripción"
                    multiline
                    onChangeText={handleAddThink} 
                    value={think} 
                />
            </View>
            </View>
            <Pressable 
            style={styles.button}
            onPress={handleEnviarDatos}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>
        </View>
    )
}

export default TipSix;