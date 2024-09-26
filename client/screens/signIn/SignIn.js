import React, {useState} from "react";
import {View, Text, Pressable, TextInput, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";
import styles from "./styles";

function SignIn () {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const data = { email, password };

    // Función para validar el formato de un correo electrónico
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    async function handleLogin() {
        if (!validateEmail(email)) {
            Alert.alert("Error", "Por favor ingresa un correo electrónico válido.");
            return;
        }

        if (password.length === 0) {
            Alert.alert("Error", "Por favor ingresa una contraseña.");
            return;
        }

        try {
            const response = await axios.post("https://agendavbg-frp4.onrender.com/login", data);

            if (response.data) {
                dispatch(setNewUser(response.data));
                navigation.navigate("Main");
            } else {
                Alert.alert("Error", "Correo electrónico o contraseña incorrectos.");
            }
        } catch (error) {
            console.error("Error al enviar datos: ", error);
            Alert.alert("Error", "Hubo un problema al iniciar sesión. Inténtalo de nuevo.");
        }
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>¡Hola!</Text>
                <Text style={styles.titleInitial}>Ingresa a tu cuenta</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    inputMode="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default SignIn;