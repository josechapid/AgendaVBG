import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles"
import tips from '../../assets/json/tips.json'
import images from "../../assets/json/imageMap";


function TipsScreen({route,  navigation }) {
  const {tipId} =route.params;
  const tip= tips.find(t=> t.id === tipId);
  const imagePath = images[tip.image];


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.tipImageContainer}>
          <Image source={imagePath} style={styles.tipImage} />
        </View>
        <View style={styles.tipTextContainer}>
          <Text style={styles.tipText}>{tip.text}</Text>
        </View>
        <View style={styles.tipButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(tip.navigateTo)}
            style={styles.tipButton}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default TipsScreen;