import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

function TipTwo() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* ----------------------------------------------------Imagen inicial  */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/img/tip2/mujerespejo.jpg")}
          style={styles.imageTipUno}
        />
      </View>
      {/* --------------------------------------------section reto y description  */}
      <View style={styles.textSection}>
        <Text style={styles.text}>Reto 2: Sonríe más a menudo</Text>
      </View>
      <View style={styles.textDescription}>
        <Text style={styles.description}>
          Escribe una acción que realizaste (logro) y describe la recompensa que
          obtuviste por conseguirlo. {"\n"}
          {"\n"} Ideas: una palmadita en el hombro, palabras bonitas, comida
          favorita, deporte, descansar, salir con una persona, mirar tv, etc.
        </Text>
      </View>
      {/* ----------------------------------------------------section de fortalezas  */}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Lista de recompensas</Text>
      </View>
    </ScrollView>
  );
}

export default TipTwo;
