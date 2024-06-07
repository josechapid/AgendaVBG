import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles'

function TipOne (){

    const [fortalezaActual, setFortalezaActual] = useState("");
    const [debilidadActual, setDebilidadActual] = useState("");
    const [fortalezas, setFortalezas] = useState([]);
    const [debilidades, setDebilidades] = useState([]);

    function agregarFortaleza() {
        if (fortalezaActual.trim() !== "") {
        setFortalezas([...fortalezas, fortalezaActual.trim()]);
        setFortalezaActual("");
        }
        ; }

    function eliminarFortaleza(index) {
        const nuevasFortalezas = [...fortalezas];
        nuevasFortalezas.splice(index, 1);
        setFortalezas(nuevasFortalezas);
        };
    
    function agregarDebilidad() {
    if (debilidadActual.trim() !== '') {
      setDebilidades([...debilidades, debilidadActual.trim()]);
      setDebilidadActual('');
    }
  };
   function  eliminarDebilidad(index) {
     const nuevasDebilidades = [...debilidades];
     nuevasDebilidades.splice(index, 1);
     setDebilidades(nuevasDebilidades);
   };

  async function enviarDatos() {
    try {
      const response = await axios.post("http://tuservidor/api/tipUno", {
        fortalezas: fortalezas,
        debilidades: debilidades,
      });
      console.log(response.data);
      // Aquí podrías redirigir al usuario a otro componente
      // por ejemplo, usando la navegación de React Navigation
      // navigation.navigate('VistaFinal');
    } catch (error) {
      console.error(error);
    }
  }

    return (
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
          onSubmitEditing={agregarFortaleza}
        />
        <View style={styles.fortalezasContainer}>
          {fortalezas.map((fortaleza, index) => (
            <View key={index} style={styles.fortalezaItem}>
              <Text>{fortaleza}</Text>
              <TouchableOpacity onPress={() => eliminarFortaleza(index)}>
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
          onSubmitEditing={agregarDebilidad}
        />
        <View style={styles.debilidadesContainer}>
          {debilidades.map((debilidad, index) => (
            <View key={index} style={styles.debilidadItem}>
              <Text>{debilidad}</Text>
              <TouchableOpacity onPress={() => eliminarDebilidad(index)}>
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
    );
}

export default TipOne