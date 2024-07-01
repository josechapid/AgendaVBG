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
import axios from "axios";

function TipNine() {
    const navigation= useNavigation()
    const [name, setName] = useState("")
    const [rol, setRol] = useState ("")
    const [people, setPeople] = useState([])
    const [nextId, setNextId] =useState(1)

    function handlerAddPerson(){
       const addPerson = {
        id: nextId, 
        name, 
        rol 
       } 
       setPeople([...people, addPerson])
       setName("")
       setRol("")
       setNextId(nextId+1)
    }

async function enviarDatos() {
      try {
        /*  const response = await axios.post("http://servidor/api/tipUno", {
        fortalezas: fortalezas,
        debilidades: debilidades,
      });
      console.log(response.data) */
        navigation.navigate("FinalTip", { tipId: 9 });
      } catch (error) {
        console.error(error);
      }}
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* ----------------------------------------------------Imagen inicial  */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/img/tip9/mujerRed.jpg")}
            style={styles.imageTipNine}
          />
        </View>
        {/* --------------------------------------------section reto y description  */}
        <View style={styles.textSection}>
          <Text style={styles.text}>Reto 9: Creando mi red</Text>
        </View>
        <View style={styles.textDescription}>
          <Text style={styles.description}>
            Identifica tu red de apoyo. Escribe tu nombre y el de las personas
            que consideres más cercanas y ubícalas en la telaraña.
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Escribe el nombre de la persona"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Escribe el rol de la persona en tu vida"
            value={rol}
            onChangeText={setRol}
          />
          <View style={styles.buttonAddPerson}>
            <TouchableOpacity style={styles.button} onPress={handlerAddPerson}>
              <Text> Agregar Persona</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.peopleContainer}>
            {people.map((item) => (
              <View key={item.id} style={styles.personItem}>
                <Text>Red de apoyo no. {item.id}</Text>
                <Text>Nombre: {item.name}</Text>
                <Text>Rol: {item.rol}</Text>
              </View>
            ))}

            <View>
              <TouchableOpacity
                style={styles.enviarButton}
                onPress={enviarDatos}
              >
                <Text style={styles.enviarButtonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

export default TipNine
