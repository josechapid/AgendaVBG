import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { setRewards_behavior } from "../../redux_toolkit/features/counter/Slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function TipTwo() {
  const navigation = useNavigation();
  const dispatch= useDispatch()
  const {rewards_behavior}= useSelector((state)=>state.tip)
  console.log("este es el redux", rewards_behavior)
  const userIdR = useSelector((state) => state.tip.user)
  const [behavior, setBehavior]= useState("")
  const [rewards, setRewards] = useState("");
  


  function handleAddRecompensa() {
    if (behavior.trim() && rewards.trim()){
      dispatch(setRewards_behavior({behavior, rewards}))
      setBehavior("");
      setRewards("");
    }   
  }

    async function enviarDatos() {
    try {
      const data = {
        user_id: userIdR.data.id,
        workshop_id: 2,
        response: {
          rewards_behavior
        },
      };
       
      const response = await axios.post("https://agendavbg.onrender.com/response", data);
      console.log("Respuesta del servidor: ", response.data);
      navigation.navigate("FinalTip", { tipId: 2 });
    } catch (error) {
      console.error("Error al enviar los datos: ", error);
      
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>

      {/* ----------------------------------------------------Imagen inicial  */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/img/tip2/mujerespejo.jpg")}
          style={styles.imageTipTwo}
        />
      </View>
      {/* --------------------------------------------section reto y description  */}
      <View style={styles.textSection}>
        <Text style={styles.text}>Reto 2: Sonríe más a menudo</Text>
      </View>
      <View style={styles.textDescription}>
        <Text style={styles.description}>
          Escribe una acción que realizaste (logro) y describe la recompensa que
          obtuviste por conseguirlo. {"\n"}
          {"\n"} Ideas: una palmadita en el hombro, palabras bonitas, comida
          favorita, deporte, descansar, salir con una persona, mirar tv, etc.
        </Text>
      </View>
      {/* ----------------------------------------------------section de recompensas */}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Lista de recompensas</Text>
      </View>
      {/* ----------------------------------------------------form de recompensas */}

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Comportamiento"
          value={behavior}
          onChangeText={setBehavior}
        />
        <TextInput
          style={styles.input}
          placeholder="Recompensa"
          value={rewards}
          onChangeText={setRewards}
        />
        <View style={styles.buttonGenerate}>

        <TouchableOpacity style={styles.button} onPress={handleAddRecompensa}>
          <Text style={styles.textGenerate}>Generar</Text>
        </TouchableOpacity>
        </View>


        <ScrollView style={styles.recompensasContainer}>
          {rewards_behavior.map((item, index) => (
            <View key={index} style={styles.recompensaItem}>
              <Text style={styles.recompensaTitle}>Recompensa {index+1}</Text>
              <Text>Comportamiento: {item.behavior}</Text>
              <Text>Recompensa: {item.rewards}</Text>
            </View>
          ))}
      <View>
        <TouchableOpacity style={styles.enviarButton} onPress={enviarDatos}>
          <Text style={styles.enviarButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
        </ScrollView>
      </View>
    </View>
    </ScrollView>
  );
}

export default TipTwo;
