import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function TipEight() {
    const navigation = useNavigation();
    const [userExperience, setUserExperience] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* ----------------------------------------------------Imagen inicial  */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/img/tip8/mujerAprender.jpg")}
            style={styles.imageTipEight}
          />
        </View>
        {/* --------------------------------------------section reto y description  */}
        <View style={styles.textSection}>
          <Text style={styles.text}>Reto 8: Haz algo nuevo</Text>
        </View>
        <View style={styles.textDescription}>
          <Text style={styles.description}>
            Selecciona tres actividades de la rutina diaria y hazlo de una
            manera diferente, (lavarte los dientes con la mano contraria, tomar
            otra ruta para ir a casa o al trabajo, arreglar tu cuarto de manera
            distinta, etc…) así como también piensa en algo que siempre hayas
            querido hacer o aprender y no lo dejes para después. {"\n"} {"\n"}El
            momento es ahora. Ejemplo: Bailar, cocinar, tocar un instrumento,
            aprender algún idioma. Etc…
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe tu experiencia aquí..."
            value={userExperience}
            onChangeText={setUserExperience}
            multiline
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FinalTip", { tipId: 8 })}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  ); 
}

export default TipEight;
