import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import styles from "./styles"
import tips from '../../assets/json/tips.json'
import images from "../../assets/json/imageMap";


function TipsScreen({route,  navigation }) {
  const {tipId} =route.params;
  const tip= tips.find(t=> t.id === tipId);
  const imagePath = images[tip.image];
   
  return (
    <View style={styles.container}>
      <View style={styles.tipImageContainer}>
        <Image source={imagePath} style={styles.tipImage} />
      </View>
      <View style={styles.tipTextContainer}>
        <Text style={styles.tipText}>{tip.text}</Text>
      </View>
      <View style={styles.tipButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TipOneSecond")}
          style={styles.tipButton}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TipsScreen;