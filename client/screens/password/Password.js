import React from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const Password = () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState('');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSave = () => {
        if (newPassword !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        
        navigation.navigate("MyProfile");
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
                    onPress={handleSave}>
                    <Text style={styles.buttonText}>Guardar cambios</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Password;