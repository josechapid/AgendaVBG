import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function TipTwo() {
  const navigation = useNavigation();
  const [behavior, setBehavior]= useState("")
  const [rewards, setRewards] = useState("");
  const [rewards_behavior, setRewards_behavior]= useState([])
  const [nextId, setNextId] = useState(1);

  function handleAddRecompensa() {

    const newRewards = {
      id: nextId,
      behavior,
      rewards
    };
    setRewards_behavior([...rewards_behavior, newRewards]);
    setBehavior("");
    setRewards ("");
    setNextId(nextId + 1);
  }

    async function enviarDatos() {
      try {
        /*  const response = await axios.post("http://servidor/api/tipUno", {
        fortalezas: fortalezas,
        debilidades: debilidades,
      });
      console.log(response.data) */
        navigation.navigate("FinalTip", { tipId: 2 });
      } catch (error) {
        console.error(error);
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
          {rewards_behavior.map((item) => (
            <View key={item.id} style={styles.recompensaItem}>
              <Text style={styles.recompensaTitle}>Recompensa {item.id}</Text>
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
