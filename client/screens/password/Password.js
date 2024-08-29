import React from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import axios from "axios";


const Password =  () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState('');
    const userId = useSelector((state) => state.tip.user.data.id);
    
   const handleEnviarDatos = async () => {
    try {
        if (newPassword !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        
        const data = {
        password: newPassword
    }
    
    const response = await axios.patch(`https://agendavbg.onrender.com/user/${userId}`, data)
    if(response){
        navigation.navigate("MyProfile");
    }else{
        Alert.alert("Error al modificar password")
    }
    
    } catch (error) {
        console.error("error al enviar datos",error)
    }
    
   }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Contraseña</Text>
            </View>

            <View style={styles.section}>
                <View style={styles.input}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Nueva contraseña"
                        secureTextEntry={!showPassword}
                        value={newPassword}
                        onChangeText={text => {
                            setNewPassword(text);
                            setError('');
                        }}
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordVisibilityButton}>
                        <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" />
                    </TouchableOpacity>
                </View>

                <View style={styles.input}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Confirmar contraseña"
                        secureTextEntry={!showPassword}
                        value={confirmPassword}
                        onChangeText={text => {
                            setConfirmPassword(text);
                            setError('');
                        }}
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordVisibilityButton}>
                        <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" />
                    </TouchableOpacity>
                </View>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleEnviarDatos}>
                    <Text style={styles.buttonText}>Guardar cambios</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Password;