import * as React from 'react';
import {  Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

const Bienvenida = () => {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
            <Text style={styles.title}>Bienvenida!</Text>
             
        </View>
        <View style={styles.imageSec}>
            <Image source={require("../../assets/img/amorPropio.jpg")}
             style={styles.image}
            resizeMode="cover"
            />
        </View>
        <View style={styles.middleSection}>
            <Text style={styles.text}>Somos Renacer Juntas</Text>
        </View>
        <View style={styles.textSection}>
            <Text style={styles.text}>Estamos felices de acompañarte</Text>
        </View>
       
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Ingresar")}
        >
            <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
        
      </View>
    );
};


export default Bienvenida;