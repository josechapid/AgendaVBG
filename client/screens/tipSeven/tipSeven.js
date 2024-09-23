import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert, 
  Pressable
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
  const { mis_Metas } = useSelector((state) => state.tip);
  const userIdR = useSelector((state) => state.tip.user);
  const [goal, setGoal] = useState("");

  function addGoal() {
      if (goal.trim() === "") {
        Alert.alert(
          "Campo vacío",
          "Por favor, escribe una meta antes de agregarla."
        );
        return;
      }
      dispatch(setMyGoals(goal.trim()));
      setGoal("");
  }
  function deleteGoal(index) {
    dispatch(deleteMyGoals(index));
  }

  async function enviarDatos() {
     if (mis_Metas.length === 0) {
       Alert.alert("Sin metas", "No tienes metas para enviar.");
       return;
     }
    try {
      const data = {
        user_id: userIdR.data.id,
        workshop_id: 7,
        filled: true,
        response: {
          mis_Metas: mis_Metas,
        },
      };
      const response = await axios.post(
        "https://agendavbg-frp4.onrender.com/response",
        data
      );
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
            resizeMode="contain"
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
        <View style={styles.goalsContainer}>
          {mis_Metas.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text>{goal}</Text>
              {/* <TouchableOpacity onPress={() => deleteGoal(index)}>
                <Text style={styles.eliminarTexto}>X</Text>
              </TouchableOpacity> */}
              <Pressable onPress={() => deleteGoal(index)}>
                <Text style={styles.eliminarTexto}>X</Text>
              </Pressable>
            </View>
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Agrega tu meta"
          value={goal}
          onChangeText={setGoal}
          onSubmitEditing={addGoal}
        />
        {/* <TouchableOpacity style={styles.enviarButtonn} onPress={addGoal}>
          <Text style={styles.enviarButtonText}>Generar</Text>
        </TouchableOpacity> */}
        <Pressable style={styles.enviarButtonn} onPress={addGoal}>
          <Text style={styles.enviarButtonText}>Generar</Text>
        </Pressable>

        <View>
          {/* <TouchableOpacity style={styles.enviarButton} onPress={enviarDatos}>
            <Text style={styles.enviarButtonText}>Enviar</Text>
          </TouchableOpacity> */}
          <Pressable style={styles.enviarButton} onPress={enviarDatos}>
            <Text style={styles.enviarButtonText}>Enviar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default TipSevent