import React, { useState, useEffect } from "react";
import {  Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const TipTen = () => {
     const navigation = useNavigation();
     const [description, setDescription] = useState("");

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
                    onChangeText={text => setDescription(prevState => ({...prevState, day:text}))} 
                    value={description.day} 
                />
                </View>
                <View style={styles.description}>
                <TextInput
                    
                    placeholder="Como actuo"
                    onChangeText={text => setDescription(prevState => ({...prevState, exercise:text}))} 
                    value={description.exercise} 
                />
                </View>
                <View style={styles.description}>
                <TextInput
                    
                    placeholder="Cambios"
                    onChangeText={text => setDescription(prevState => ({...prevState, exercise:text}))} 
                    value={description.exercise} 
                />
                </View>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("FinalTip",{tipId: 10})}>
                <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
    )
}

export default TipTen;