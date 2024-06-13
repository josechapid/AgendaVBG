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
          <Image
            source={require("../../assets/img/amorPropio.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.middleSection}>
          <View style={styles.logoSection}>
            <Image
              source={require("../../assets/img/Logo 1.png")}
              style={styles.logo}
            />
          </View>
          <Text style={styles.rj}>Renacer Juntas</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.text}>Estamos felices de acompañarte{"\n"}</Text>

          <Text style={styles.text}>
            En un esfuerzo por combatir la violencia basada en género y
            empoderar a las mujeres, presentamos una innovadora aplicación móvil
            dedicada a acompañar a las mujeres en su camino hacia el
            fortalecimiento personal y la seguridad. Esta app se centra en
            ofrecer una serie de talleres diseñados para mejorar la autoestima,
            proporcionando además información oportuna sobre las rutas de ayuda
            disponibles y los diferentes tipos de violencia. Con recursos
            accesibles y personalizados, buscamos crear un entorno de apoyo y
            orientación, permitiendo que cada mujer reconozca su valor y
            encuentre el apoyo necesario para superar situaciones de violencia.
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