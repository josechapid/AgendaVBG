import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

function TipFive () {
     const navigation = useNavigation();
     const [description, setDescription] = useState("");

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
                    onChangeText={text => setDescription(prevState => ({...prevState, day:text}))} 
                    value={description.day} 
                />
                </View>
                <View style={styles.description}>
                <TextInput
                    
                    placeholder="Ejercicio"
                    onChangeText={text => setDescription(prevState => ({...prevState, exercise:text}))} 
                    value={description.exercise} 
                />
                </View>
            </View>
             <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("FinalTip",{tipId: 5})}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
    )
}

export default TipFive;