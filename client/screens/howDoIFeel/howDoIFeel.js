import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { setHowDoIFeel } from "../../redux_toolkit/features/counter/Slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function HowDoIFeel (){
    const navigation = useNavigation();
    const dispatch = useDispatch();     
    const userIdR = useSelector((state) => state.tip.user);
    const {howDoIFeel}= useSelector((state)=>state.tip)
    const [howDoIFeelUser, setHowDoIFeelUser] = useState("");


    function handleSend(text){        
        setHowDoIFeelUser(text)
        dispatch(setHowDoIFeel(text.trim()));
    }

    async function enviarDatos() {
      try {
        
        const data = {
          user_id: userIdR.data.id,
          number: 1,
          response: {
            howDoIFeel,
          },
        };
        const response = await axios.post(
          "https://agendavbg.onrender.com/howDoIFeel",
          data
        );
        console.log("Respuesta del servidor: ", response.data);
        navigation.navigate("TipsScreen", { tipId: 1 });
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
          <Text style={styles.text}>¿Como me siento?</Text>
        </View>
        <View style={styles.textDescription}>
          <Text style={styles.description}>
            {"\n"}
            "Por favor, utiliza este espacio para describir cómo te sientes
            antes de iniciar esta serie de sesiones o proceso terapéutico.
            {"\n"}
            Considera los siguientes puntos mientras escribes: {"\n"}
            1.Identifica tus emociones: ¿Qué emociones estás sintiendo al
            comenzar este proceso? (por ejemplo, nerviosismo, esperanza,
            incertidumbre, etc.)
            {"\n"}2.Explora tus pensamientos: ¿Qué pensamientos están pasando
            por tu mente en este momento? (por ejemplo, preocupaciones,
            expectativas, dudas) {"\n"} 3. Describe tus expectativas: ¿Qué
            esperas lograr o experimentar durante estas sesiones? {"\n"}
            4. Reflexiona sobre tu disposición: ¿Cómo te sientes acerca de la
            idea de hablar sobre tus sentimientos y experiencias? {"\n"} 5. Sé
            honesta contigo misma y recuerda que no hay respuestas incorrectas.
            Este espacio es para ayudarte a entender y procesar tus sentimientos
            antes de comenzar tu viaje terapéutico."
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Describe en este espacio como te sientes..."
              value={howDoIFeelUser}
              onChangeText={handleSend}
              multiline
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={enviarDatos}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
}

export default HowDoIFeel