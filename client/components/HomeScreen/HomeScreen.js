import React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import workshops from '../../assets/json/workshops.json'
import styles from "./styles"

const HomeScreen = ({navigation}) => {
  const icon= require('../../assets/img/homeScree/libro.png')
    return (
      <ScrollView style={styles.scrollViewContainer}>
        {/* ------------------------------------section logo y title */}
        <View style={styles.headerContainer}>
          <View style={styles.logoHeader}>
            <Image
              source={require("../../assets/img/Logo 1.png")}
              style={styles.logo}
            />
          </View>
          <Text style={styles.titleInitial}>Renacer Juntas</Text>
        </View>
        {/* -------------------------------------------vista para talleres */}
        {workshops.map((workshop, index) => (
          <View
            key={workshop.id}
            style={[
              styles.workshopContainerUno,
              index % 2 === 0 ? styles.alignLeft : styles.alignRight,
            ]}
          >
            <Text style={styles.workshopTitle}>{workshop.title}</Text>
            <Text style={styles.workshopDescription}>{workshop.description}</Text>
            <View style={styles.buttonIcon}>
              <TouchableOpacity
                style={styles.workshopButton}
                onPress={() => navigation.navigate('TipsScreen', { tipId: workshop.id })}
              >
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
              <Image
                source={icon}
                style={styles.icon}
              />
            </View>
          </View>
        ))}
{/* 
        
        <Button
          title = "Final de cada tip"
          onPress={()=>
            navigation.navigate("FinalTip", {name: "FinalTip"})
          }
        />
        <Button
          title = "Final de cada tip"
          onPress={()=>
            navigation.navigate("TipFinalFour", {name: "TipFinalFour"})
          }
        /> */}
        
      </ScrollView>
    );
};


export default HomeScreen;