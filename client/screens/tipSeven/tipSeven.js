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
import { useSelector, useDispatch } from "react-redux";
import {
  setMyGoals,
  deleteMyGoals,
} from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";


function TipSevent (){
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { myGoals } = useSelector((state) => state.tip);
  const userIdR = useSelector((state) => state.tip.user);

  const [goal, setGoal] = useState("");

  function addGoal() {
    if (goal.trim() !== "") {
      dispatch(setMyGoals(goal.trim()));
      setGoal("");
    }
  }
  function deleteGoal(index) {
    dispatch(deleteMyGoals(index));
  }

  async function enviarDatos() {
    try {
      const data = {
        user_id: userIdR.data.id,
        workshop_id: 7,
        filled: true,
        response: {
          myGoals: myGoals,
        },
      };
      const response = await axios.post(
        "https://agendavbg.onrender.com/response",
        data
      );
      console.log("Respuesta del servidor: ", response.data);
      navigation.navigate("FinalTip", { tipId: 7 });
    } catch (error) {
      console.error("Error al enviar los datos: ", error);
    }
  }
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
            las más prioritarias, hazlas y táchalas una vez realizadas. Repítelo
            cada vez que lo necesites.
          </Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Mis Metas</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Agrega tu meta"
          value={goal}
          onChangeText={setGoal}
          onSubmitEditing={addGoal}
        />
        <View style={styles.goalsContainer}>
          {myGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text>{goal}</Text>
              <TouchableOpacity onPress={() => deleteGoal(index)}>
                <Text style={styles.eliminarTexto}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
         <TouchableOpacity style={styles.enviarButton} onPress={enviarDatos}>
              <Text style={styles.enviarButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
}

export default TipSevent