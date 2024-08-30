import { View, Text, Image, TextInput,TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setTipFiveDay, deleteTipFiveDay, setTipFiveExercise, deleteTipFiveExercise, clearTipFive } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";

function TipFive () {
     const navigation = useNavigation();
     const dispatch = useDispatch();
     const { dia, ejercicio} = useSelector((state) => state.tip.tipFive);
     const userIdR = useSelector((state) => state.tip.user)

    const [currentDay, setCurrentDay] = useState("");
    const [currentExercise, setCurrentExercise] = useState("");

    const handleAddDay = () => {
    if (currentDay.trim() !== "") {
      dispatch(setTipFiveDay(currentDay));
      setCurrentDay("");
    }
  };

  const handleAddExercise = () => {
    if (currentExercise.trim() !== "") {
      dispatch(setTipFiveExercise(currentExercise));
      setCurrentExercise("");
    }
  };

    const handleDeleteDay = (index) => {
    dispatch(deleteTipFiveDay(index));
  };

  const handleDeleteExercise = (index) => {
    dispatch(deleteTipFiveExercise(index));
  };

     

    const handleEnviarDatos = async () => {
        try{
            const data = {
                user_id: userIdR.data.id,
                workshop_id: 5, 
                filled: true,
                response: {
                    dia,
                    ejercicio,
                },
            }
            const response = await axios.post("https://agendavbg.onrender.com/response", data);
            dispatch(clearTipFive());
            navigation.navigate("FinalTip", { tipId: 5 });
        }catch(error){
            console.error("Error al enviar los datos: ", error);
        }
    };

    return(
        <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Construye la felicidad</Text>
      </View>
      <View>
        <Image source={require("../../assets/img/Tip5/smiling.jpg")} style={styles.img} />
        <View style={styles.textSection}>
          <Text>Reto 5: Ejercita cuerpo y alma</Text>
        </View>
      </View>
      <View style={styles.textDescription}>
        <Text>Días de ejercicio</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <TextInput
          placeholder="Día"
          value={currentDay}
          onChangeText={setCurrentDay}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddDay}>
          <Text style={styles.generateButtonText}>Generar</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Ejercicio"
          value={currentExercise}
          onChangeText={setCurrentExercise}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddExercise}>
          <Text style={styles.generateButtonText}>Generar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.generatedContainer}>
        {dia.map((d, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{d}</Text>
            <TouchableOpacity onPress={() => handleDeleteDay(index)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
        {ejercicio.map((e, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{e}</Text>
            <TouchableOpacity onPress={() => handleDeleteExercise(index)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEnviarDatos}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
    )
}

export default TipFive;