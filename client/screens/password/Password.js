import React from "react";
import {  Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

const Password = ({navigation}) => {
    const [newPassword, setNewPassword] = React.useState('');
    const [confirPassword, setConfirPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
    return(
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
                        onChangeText={text => setNewPassword(text)}
                    />
        
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordVisibilityButton} >
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" />
                     </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Confirmar contraseña"
                        secureTextEntry={!showPassword}
                        value={confirPassword}
                        onChangeText={text => setConfirPassword(text)}
                    />
        
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordVisibilityButton}>
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" />
                    </TouchableOpacity>
                </View>

        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("HomeScreen")}>
            <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}

export default Password;