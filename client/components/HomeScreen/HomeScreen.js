import React from 'react';
import { Text, View, Image, TouchableOpacity, BackHandler, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import workshops from '../../assets/json/workshops.json'
import Ionicons from "react-native-vector-icons/Ionicons";
import { clearUser } from '../../redux_toolkit/features/counter/Slice';
import styles from "./styles"
import axios from 'axios';


const HomeScreen = ({navigation}) => {
  const user= useSelector((state)=> state.tip.user)
  const dispatch = useDispatch()
  const icon= require('../../assets/img/homeScree/libro.png')

  const handleLogout =()=>{
    dispatch(clearUser())
    navigation.navigate("Bienvenida")
  }

   useFocusEffect(
     React.useCallback(() => {
       const onBackPress = () => {
         return true; // Esto bloquea la acción de regresar
       };

       BackHandler.addEventListener("hardwareBackPress", onBackPress);

       return () => {
         BackHandler.removeEventListener("hardwareBackPress", onBackPress);
       };
     }, [])
   );

   
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
    const queryStringTwo = `?user_id=${dataTwo.user_id}&number=${dataTwo.number}`;
    
    try {      
      const consult = await axios.get(`https://agendavbg-frp4.onrender.com/response${queryString}`);  

      if(workshop.id===11){
        const consultTipEleven = await axios.get(`https://agendavbg-frp4.onrender.com/howDoIFeel${queryStringTwo}`);
        if (consultTipEleven.data.success === true) {
          navigation.navigate("Feedback", { tipId: workshop.id });
        } else {
          navigation.navigate("TipsScreen", { tipId: workshop.id });
        }
      } else{
      if (consult.data === false) {
      if (workshop.id === 1) {
        navigation.navigate("HowDoIFeel");
      } else {
        navigation.navigate("TipsScreen", { tipId: workshop.id });
      }
    }else{
      navigation.navigate("Feedback", {tipId: workshop.id});
    }
    
      }
    } catch (error) {
      console.error("Error fetching response:", error);

    }
  };
    return (
      <ScrollView style={styles.scrollViewContainer}>
        {/* ------------------------------------section logo y title */}
        <View style={styles.userGreetingContainer}>
          {user && <Text style={styles.greeting}>Hola, {user.data.user}</Text>}
          
          {/* <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={30} color="black" />
          </TouchableOpacity> */}
          <Pressable onPress={handleLogout} style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={30} color="black" />
          </Pressable>
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.logoHeader}>
            <Image
              source={require("../../assets/img/Logo 1.png")}
              style={styles.logo}
              resizeMode='contain'
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
              {/* <TouchableOpacity
                style={styles.workshopButton}
                onPress={() => handleWorkshopPress(workshop)}
              >
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity> */}
              <Pressable
                style={styles.workshopButton}
                onPress={() => handleWorkshopPress(workshop)}
              >
                <Text style={styles.buttonText}>Continuar</Text>
              </Pressable>
              <Image source={icon} style={styles.icon} />
            </View>
          </View>
        ))}
      </ScrollView>
    );
};


export default HomeScreen;