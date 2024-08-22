import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles'
import { useNavigation } from "@react-navigation/native";
import { setFortalezas, setDebilidades, deleteFortalezas, deleteDebilidades } from '../../redux_toolkit/features/counter/Slice';
import {useDispatch, useSelector} from "react-redux"
import axios from 'axios'

function TipOne (){
    const navigation = useNavigation();
    const dispatch= useDispatch();
    const {fortalezas, debilidades}=useSelector((state)=>state.tip)
    const userIdR = useSelector((state) => state.tip.user)
    const [fortalezaActual, setFortalezaActual] = useState("");
    const [debilidadActual, setDebilidadActual] = useState("");
    

    function addFortaleza() {
        if (fortalezaActual.trim() !== "") {
        dispatch(setFortalezas(fortalezaActual.trim()))
        setFortalezaActual("");
        }
      }

    function deleteFortaleza(index) {
        dispatch(deleteFortalezas(index))
        };
    
    function addDebilidad() {
    if (debilidadActual.trim() !== "") {
      dispatch(setDebilidades(debilidadActual.trim()))
      setDebilidadActual("");
    }
  };
   function  deleteDebilidad(index) {
     dispatch(deleteDebilidades(index))
   };

  async function enviarDatos() {
    try {
      const data = {
        user_id: userIdR.data.id,
        workshop_id: 1,
        filled: true,
        response: {
          fortalezas: fortalezas,
          debilidades: debilidades,
        },
      };
      const response = await axios.post("https://agendavbg.onrender.com/response", data);
      navigation.navigate("FinalTip", { tipId: 1 });
    } catch (error) {
      console.error("Error al enviar los datos: ", error);
    }
  }
    return (
      <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        
          {/* ----------------------------------------------------Imagen inicial  */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/img/tip1/mujercorazon.jpg")}
              style={styles.imageTipUno}
            />
          </View>
          {/* --------------------------------------------section reto y description  */}
          <View style={styles.textSection}>
            <Text style={styles.text}>Reto 1: Conócete</Text>
          </View>
          <View style={styles.textDescription}>
            <Text style={styles.description}>
              A continuación, describe una lista de fortalezas y debilidades,
              busca ser sincera contigo misma y reconocer cuales son:
            </Text>
          </View>
          {/* ----------------------------------------------------section de fortalezas  */}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Fortalezas</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Agrega tus fortalezas"
            value={fortalezaActual}
            onChangeText={setFortalezaActual}
            onSubmitEditing={addFortaleza}
          />
          <View style={styles.fortalezasContainer}>
            {fortalezas.map((fortaleza, index) => (
              <View key={index} style={styles.fortalezaItem}>
                <Text>{fortaleza}</Text>
                <TouchableOpacity onPress={() => deleteFortaleza(index)}>
                  <Text style={styles.eliminarTexto}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          {/* ----------------------------------------------------section debilidades  */}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Debilidades</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Agrega tus debilidades"
            value={debilidadActual}
            onChangeText={setDebilidadActual}
            onSubmitEditing={addDebilidad}
          />
          <View style={styles.debilidadesContainer}>
            {debilidades.map((debilidad, index) => (
              <View key={index} style={styles.debilidadItem}>
                <Text>{debilidad}</Text>
                <TouchableOpacity onPress={() => deleteDebilidad(index)}>
                  <Text style={styles.eliminarTexto}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
            {/* ----------------------------------------------------boton de envio   */}

            <TouchableOpacity style={styles.enviarButton} onPress={enviarDatos}>
              <Text style={styles.enviarButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        
      </ScrollView>
      </View>
    );
}

export default TipOne