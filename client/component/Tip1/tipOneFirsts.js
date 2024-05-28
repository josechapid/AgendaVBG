import * as React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from "./styles"


function tipOneFirts ({navigation}){
    return (
      <View contentContainerStyle={styles.scrollViewContent}>
        <View>
          <Image source={require("../../assets/img/tip1/tip1.png")} />
        </View>
        <View>
          <Text>
            Hacer un listado de habilidades y fortalezas.{"\n"}Empieza el reto
            haciendo tu propio listado de habilidades y fortalezas.{"\n"}
            Comienza por reconocerte a ti misma, esto te ayuda a percibir lo
            positivo de ti, por pequeño que sea.
          </Text>
        </View>
        <View>
          <Button
            title="Continuar"
            onPress={() => navigation.navigate("TipOneSecond")}
          />
        </View>
      </View>
    );
}

export default tipOneFirts;