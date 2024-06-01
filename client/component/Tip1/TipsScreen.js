import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from "./styles"
import tips from '../../assets/json/tips.json'


function TipsScreen({route,  navigation }) {
  const {tipId} =route.params;
  const tip= tips.find(t=> t.id === tipId);
  
   
  return (
    <View contentContainerStyle={styles.scrollViewContent}>
      <View>
        <Image source={tip.image} style={styles.tipImage} />
      </View>
      <View>
        <Text style={styles.tipText}>{tip.text}</Text>
      </View>
      <View>
        <Button
          title="Continuar"
          onPress={() => navigation.navigate('TipOneSecond')}
        />
      </View>
    </View>
  );
}

export default TipsScreen;