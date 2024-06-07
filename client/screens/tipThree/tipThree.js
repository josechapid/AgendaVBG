import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

function TipThree() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* ----------------------------------------------------Imagen inicial  */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/img/tip3/mujerPerdon.jpg")}
          style={styles.imageTipUno}
        />
      </View>
      {/* --------------------------------------------section reto y description  */}
      <View style={styles.textSection}>
        <Text style={styles.text}>Reto 3: Carta de perdón</Text>
      </View>
      <View style={styles.textDescription}>
        <Text style={styles.description}>
          El día de hoy vas a escribir una carta a esa persona que quieres
          perdonar, incluyéndote. Escríbela tranquilamente, sin detenerte y con
          el corazón, expresando todo lo que sientes.
        </Text>
      </View>
      {/* ----------------------------------------------------section de perdonsubtitle  */}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Carta del perdón</Text>
      </View>
    </ScrollView>
  );
}

export default TipThree;
