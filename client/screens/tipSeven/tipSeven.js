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


function TipSevent (){
    return (
      <View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {/* ----------------------------------------------------Imagen inicial  */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/img/tip7/mujerMetas.jpg")}
              style={styles.imageTipSeven}
            />
          </View>
          {/* --------------------------------------------section reto y description  */}
          <View style={styles.textSection}>
            <Text style={styles.text}>Reto 7: Diseña tus propias metas</Text>
          </View>
          <View style={styles.textDescription}>
            <Text style={styles.description}>
              Realiza una lista de tareas pendientes desde las más básicas hasta
              las más prioritarias, hazlas y táchalas una vez realizadas.
              Repítelo cada vez que lo necesites.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
}

export default TipSevent