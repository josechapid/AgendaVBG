import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

function Rutes(){
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* ----------------------------------------------------Imagen inicial  */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/img/rutes/rutes.jpg")}
            style={styles.imageRutes}
          />
        </View>
        {/* --------------------------------------------section reto y description  */}
        <View style={styles.textSection}>
          <Text style={styles.text}>¿Que son las rutas de atención?</Text>
        </View>
        <View style={styles.textDescription}>
          <Text style={styles.description}>
            Las rutas de violencia son los procedimientos y recursos
            establecidos para brindar atención integral a las víctimas de
            violencia, garantizando su acceso a salud, justicia y protección. En
            Colombia, estos incluyen:
          </Text>
        </View>
      </ScrollView>
    );
}

export default Rutes