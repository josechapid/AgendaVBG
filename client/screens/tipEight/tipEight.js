import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert, Pressable} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setNewActivities } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";

function TipEight() {
    const navigation = useNavigation();
    const dispatch= useDispatch();
    const { nuevasActividades } = useSelector((state) => state.tip);
    const userIdR = useSelector((state) => state.tip.user);
    const [activity, setActivity] = useState("");

    function handleAddActivity(text) {
      setActivity(text)
      dispatch(setNewActivities(activity.trim()))
    }
   
    
    async function sendDates (){
     if (nuevasActividades === "") {
       Alert.alert(
         "Campo Vacio",
         "Por favor, agrega la descripcion de las nuevas actividades que hayas aprendido."
       );
       return;
     }
      try {
        const data = {
          user_id: userIdR.data.id,
          workshop_id: 8,
          filled: true,
          response: {
           nuevasActividades: nuevasActividades,
          },
        };
        const response = await axios.post("https://agendavbg-frp4.onrender.com/response", data);
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
            resizeMode="contain"
          />
        </View>
        {/* --------------------------------------------section reto y description  */}
        <View style={styles.textSection}>
          <Text style={styles.text}>Reto 8: Haz algo nuevo</Text>
        </View>
        <View style={styles.textDescription}>
          <Text style={styles.description}>
            Selecciona tres actividades (o más) de la rutina diaria y hazlo de
            una manera diferente (lavarte los dientes con la mano contraria,
            tomar otra ruta para ir a casa o al trabajo, arreglar tu cuarto de
            manera distinta, etc…) así como también piensa en algo que siempre
            hayas querido hacer o aprender y lo haz estado aplazando durante
            mucho tiempo. {"\n"} {"\n"}El momento es ahora. Ejemplo: Bailar,
            cocinar, tocar un instrumento, aprender algún idioma. Etc… Despúes,
            compartenos en el siguiente recuadro cuales fueron esas nuevas
            actividades y que han generado en ti
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe tu experiencia aquí..."
            value={activity}
            onChangeText={handleAddActivity}
            multiline
          />
        </View>        
        <Pressable style={styles.button} onPress={sendDates}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>
      </ScrollView>
    </View>
  ); 
}

export default TipEight;
