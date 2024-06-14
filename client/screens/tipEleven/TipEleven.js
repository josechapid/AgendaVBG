import React, { useState, useEffect } from "react";
import {  Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


const TipEleven = () => {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
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
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("FinalTip",{tipId: 11})}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TipEleven;