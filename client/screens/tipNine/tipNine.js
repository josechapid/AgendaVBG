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
import { setSupportNet } from "../../redux_toolkit/features/counter/Slice";
import { useSelector, useDispatch } from "react-redux"; 
import axios from "axios";

function TipNine() {
    const navigation= useNavigation()
    const dispatch = useDispatch()
    const {supportNet}= useSelector((state)=>state.tip)
    const userIdR = useSelector((state) => state.tip.user);
    const [name, setName] = useState("")
    const [rol, setRol] = useState ("")
    const [people, setPeople]=useState([])
    const [idCounter, setIdCounter] = useState(1);

    function handlerAddPerson(){
      const addPerson = {
        id: idCounter,
        name,
        rol,
        }; 
        const updatedPeople = [...people, addPerson]
        setPeople(updatedPeople);
        setName("")
        setRol("")
        setIdCounter(idCounter+1);
        dispatch(setSupportNet(updatedPeople));
    }

async function enviarDatos() {
      try {
        const data = {
          user_id: userIdR.data.id,
          workshop_id: 9,
          response: {
            supportNet: supportNet,
          },
        };
        const response = await axios.post(
          "https://agendavbg.onrender.com/response",
          data
        );
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
