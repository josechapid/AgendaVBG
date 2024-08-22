import React, { useState, useEffect } from "react";
import {  Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { setHowDoIFeel } from "../../redux_toolkit/features/counter/Slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const TipEleven = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();     
    const userIdR = useSelector((state) => state.tip.user);
    const {howDoIFeel}= useSelector((state)=>state.tip)
    const [feeling, setFeeling] = useState(''); 

    function handleSend(text){        
        setFeeling(text)
        dispatch(setHowDoIFeel(text.trim()));
    }

    async function enviarDatos() {
      try {
        
        const data = {
          user_id: userIdR.data.id,
          number: 2,
          response: {
            howDoIFeel,
          },
        };
        const response = await axios.post(
          "https://agendavbg.onrender.com/howDoIFeel",
          data
        );
        navigation.navigate("FinalTip",{tipId: 11});
      } catch (error) {
        console.error("Error al enviar los datos: ", error);
      }
    }
    
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Empoderate</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.textSection}>
                    <Text style={styles.textCenter}>Reto 11:Comparte y contagia</Text>
                </View>
                <Text style={styles.text}>Expande tus conocimientos con ejemplo y optimismo.Comparte este reto y educa a quien lo necesite crea un grupo de auto-ayuda si es necesario  </Text>

                <Image
                source={require("../../assets/img/tip11/Power.jpeg")}
                style={styles.img}
                />
               <View style={styles.section}>
                <View style={styles.textSection}>
                    <Text style={styles.textCenter}>Como me senti</Text>
                </View>
                <View style={styles.description}>
                
                <TextInput
                    
                    placeholder="Escribe aquí tu descripción"
                    multiline
                    onChangeText={handleSend} 
                    value={feeling} 
                />
                </View>
            </View>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={enviarDatos}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default TipEleven;