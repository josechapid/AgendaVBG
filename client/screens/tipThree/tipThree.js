import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { setForgivenessLetter } from "../../redux_toolkit/features/counter/Slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"

function TipThree() {
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const {cartaPerdon} = useSelector((state) => state.tip);
  
  const userIdR = useSelector((state) => state.tip.user);
  
  const [userExperience, setUserExperience] = useState("");

  function handleInputChange(text) {
    setUserExperience(text);
    dispatch(setForgivenessLetter(text.trim()));
  }

  async function enviarDatos (){
     if (userExperience.trim() === "") {
       Alert.alert(
         "Campo vacío",
         "Por favor, asegúrate de escribir tu carta de perdón antes de enviarla."
       );
       return;
     }
    try {
      
      const data = {
        user_id: userIdR.data.id,
        workshop_id: 3,
        filled: true,
        response: {
          cartaPerdon,
        },
      };
      const response = await axios.post(
        "https://agendavbg.onrender.com/response",
        data
      );
      
      navigation.navigate("FinalTip", { tipId: 3 });
    } catch (error) {
      console.error("Error al enviar los datos: ", error);
    }
  }

  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* ----------------------------------------------------Imagen inicial  */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/img/tip3/mujerPerdon.jpg")}
          style={styles.imageTipThree}
        />
      </View>
      {/* --------------------------------------------section reto y description  */}
      <View style={styles.textSection}>
        <Text style={styles.text}>Reto 3: Carta de perdón</Text>
      </View>
      <View style={styles.textDescription}>
        <Text style={styles.description}>
          El día de hoy vas a escribir una carta a esa persona que quieres
          perdonar, incluyéndote.{"\n"} {"\n"}Escríbela tranquilamente, sin
          detenerte y con el corazón, expresando todo lo que sientes.Puedes
          tomar como referencia estas pequeñas indicaciones{"\n"}
          {"\n"}1. Piensa en la situación que estás viviendo. Como víctimas del
          maltrato psicológico, cada uno vive su historia de manera diferente.
          Escribe la tuya ¿Qué necesitas perdonar? ¿A quién?{"\n"} {"\n"}
          2. ¿Para qué deseas hacerlo?{"\n"} {"\n"} 3.Escribe tus emociones, no
          importa que tan densas sean; saca toda la ira, la rabia, las
          frustraciones. Es tu oportunidad de expresarte y de sacar todo el
          dolor que te ha ocasionado el maltrato psicológico. {"\n"} {"\n"}4.
          Ponte en el lugar de la persona a la que quieres perdonar, como si
          fueras él o ella ¿Te gustaría que te perdonaran? {"\n"} {"\n"}5 .
          Ahora, escribe todo lo que necesitas y quieres perdonar. Saca todo ese
          sentimiento de culpa y rencor de tu corazón, aprende lo que necesites
          y olvida todo el daño que te han ocasionado. Te doy un ejemplo para
          que te hagas una idea: “Te perdono, porque todo este dolor que siento,
          yo quiero elegir transformarlo en aprendizaje“ {"\n"} {"\n"}6. Por
          último, agradece. Es importante que expreses todo lo que has
          descubierto con tu experiencia tan dolorosa. Agradécele a la vida esta
          oportunidad que te ha brindado de aprender de ti mismo y cómo crecer
          en medio de la tormenta. Si aún te cuesta agradecer, no pasa nada.
          Puedes escribir simplemente: “me doy las gracias por decidir
          perdonar”.
          {"\n"} {"\n"}
          Una vez termines de hacer tu carta del perdón, dejanos tu experiencia
          en la siguiente casilla
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe tu experiencia aquí..."
            value={userExperience}
            onChangeText={handleInputChange}
            multiline
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={enviarDatos}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default TipThree;
