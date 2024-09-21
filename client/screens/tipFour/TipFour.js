import { View, Text, Image, TextInput,Pressable, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
// import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDescription, clearDescription } from '../../redux_toolkit/features/counter/Slice';
import { Video } from 'expo-av';


function TipFour () {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const descripcion = useSelector((state) => state.tip.descripcion);
    const userIdR = useSelector((state) => state.tip.user)

    const [experience, setExperience] = useState("");

    function handleAddExperience(text) {
      setExperience(text)
      
      
      dispatch(setDescription(experience.trim()))
      
      
    }
    
  

      const handleEnviarDatos = async () => {
        if(descripcion === ""){
          Alert.alert("Campo Vacio", 
            "Por favor agrega tu experiencia con el video"
          );
          return
        }
    try {
      const data = {
        user_id: userIdR.data.id,
        workshop_id: 4, 
        filled: true,
        response: {
          descripcion: descripcion
        },
      };
      const response = await axios.post(
        "https://agendavbg-frp4.onrender.com/response",
        data
      );
      dispatch(clearDescription());
      navigation.navigate("FinalTip", { tipId: 4 });
    } catch (error) {
      console.error("Error al enviar los datos: ", error);      
      
    }
  };

   return(
        <ScrollView style={styles.container}>
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
                  
        {/* Aquí agregas el video */}
        <Video
          source={require("../../assets/video/Principiantes_6Minutos_.mp4")} 
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          // shouldPlay
          useNativeControls
          style={{ width: '100%', height: 150 }} 
        />
                
            </View>
            {/* <View style={styles.icon}>
                <AntDesign name="caretright" size={30} color="#f4a261" />
            </View> */}
            <View style={styles.section}>
                <View style={styles.description}>
                
                <TextInput
                    placeholder="Escribe aquí tu descripción"
                    value={experience} 
                    onChangeText={handleAddExperience} 
                    multiline
                />
                </View>
            </View>
            <Pressable
            style={styles.button}
            onPress={handleEnviarDatos}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>
            
        </ScrollView>
    )
}

export default TipFour;