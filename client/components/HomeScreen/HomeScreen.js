import React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import workshops from '../../assets/json/workshops.json'
import styles from "./styles"
import axios from 'axios';


const HomeScreen = ({navigation}) => {
  const user= useSelector((state)=> state.tip.user)
  const icon= require('../../assets/img/homeScree/libro.png')

  const handleWorkshopPress = async (workshop) => {
    const data = {
      user_id: user.data.id,
      workshop_id: workshop.id,
    };
    const dataTwo={
      user_id: user.data.id,
      number: 2
    }
    const queryString = `?user_id=${data.user_id}&workshop_id=${data.workshop_id}`;
    
    try {
      const consultTipEleven = await axios.get(`https://agendavbg.onrender.com/howDoIFeel`, dataTwo);

      const consult = await axios.get(`https://agendavbg.onrender.com/response${queryString}`);    

      if (consult.data === false) {
        if (workshop.id === 1) {
          navigation.navigate("HowDoIFeel");
        } else {
          navigation.navigate("TipsScreen", { tipId: workshop.id });
        }
      }else{
        navigation.navigate("Feedback", {tipId: workshop.id});
      }
    } catch (error) {
      console.error("Error fetching response:", error);

    }
  };
    return (
      <ScrollView style={styles.scrollViewContainer}>
        {/* ------------------------------------section logo y title */}
        {user && <Text style={styles.greeting}>Hola, {user.data.user}</Text>}
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
            <Text style={styles.workshopDescription}>
              {workshop.description}
            </Text>
            <View style={styles.buttonIcon}>
              <TouchableOpacity
                style={styles.workshopButton}
                onPress={() => handleWorkshopPress(workshop)}
              >
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
              <Image source={icon} style={styles.icon} />
            </View>
          </View>
        ))}
      </ScrollView>
    );
};


export default HomeScreen;