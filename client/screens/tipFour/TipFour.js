import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function TipFour () {
    const navigation = useNavigation();
    const [description, setDescription] = useState("");

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
                    onChangeText={text => setDescription(text)} 
                    value={description} 
                />
                </View>
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("FinalTip",{tipId: 4})}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
            
        </View>
    )
}

export default TipFour;