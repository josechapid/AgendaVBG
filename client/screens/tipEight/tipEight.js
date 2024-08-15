import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setNewActivities } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";

function TipEight() {
    const navigation = useNavigation();
    const dispatch= useDispatch();
    const {newActivities}=useSelector((state)=>state.tip)
    const userIdR = useSelector((state) => state.tip.user);
    const [userExperience, setUserExperience] = useState("");

    function setActivities(text){
      setUserExperience(text)
      dispatch(setNewActivities(text.trim()));
    }
      
    

    async function sendDates (){
      try {
        const data = {
          user_id: userIdR.data.id,
          workshop_id: 8,
          filled: true,
          response: {
            newActivities: newActivities,
          },
        };
        const response = await axios.post("https://agendavbg.onrender.com/response", data);
        navigation.navigate("FinalTip", { tipId: 8 });
      } catch (error) {
        console.error("Error al enviar los datos: ", error)
      }
    }

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
            onChangeText={setActivities}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={sendDates}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  ); 
}

export default TipEight;
