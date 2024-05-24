import * as React from 'react';
import {  Text, View, Button, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";


const Bienvenida = () => {
    const navigation = useNavigation();

    return (
      <ScrollView style={styles.container}>
        <View style={{ height: 50 }} />
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
            <View style={styles.logoSection}>
            <Image source={require("../../assets/img/Logo 1.png")}
                style={styles.logo}
            />
            </View>
            <Text style={styles.rj}>Renacer Juntas</Text>
        </View>
        <View style={styles.textSection}>
            <Text style={styles.text}>Estamos felices de acompañarte</Text>
            <Text style={styles.text}>La violencia es el “uso intencional de la fuerza física o el poder real o como amenaza contra uno mismo, una persona, grupo o comunidad que tiene como resultado la probabilidad de daño psicológico, lesiones, la muerte, privación o mal desarrollo.
            La violencia es el “uso intencional de la fuerza física o el poder real o como amenaza contra uno mismo, una persona, grupo o comunidad que tiene como resultado la probabilidad de daño psicológico, lesiones, la muerte, privación o mal desarrollo.
            La violencia es el “uso intencional de la fuerza física o el poder real o como amenaza contra uno mismo, una persona, grupo o comunidad que tiene como resultado la probabilidad de daño psicológico, lesiones, la muerte, privación o mal desarrollo.
            La violencia es el “uso intencional de la fuerza física o el poder real o como amenaza contra uno mismo, una persona, grupo o comunidad que tiene como resultado la probabilidad de daño psicológico, lesiones, la muerte, privación o mal desarrollo.
            </Text>
        </View>
       
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Ingresar")}
        >
            <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
        
      </ScrollView>
    );
};


export default Bienvenida;