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
            resizeMode="contain"
          />
        </View>
        {/* --------------------------------------------section title y description  */}
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
        <View style={styles.ruteDescription}>
          <Text style={styles.description}>
            Salud: Línea 123 para emergencias médicas y atención inmediata.
          </Text>
        </View>
        <View style={styles.ruteDescription}>
          <Text style={styles.description}>
            Justicia: Línea 122 para denunciar casos de violencia y obtener
            asistencia judicial.
          </Text>
        </View>
        <View style={styles.ruteDescription}>
          <Text style={styles.description}>
            Protección: Línea 141 del Instituto Colombiano de Bienestar Familiar
            (ICBF) para protección de menores y familias.
          </Text>
        </View>
      </ScrollView>
    );
}

export default Rutes