import * as React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Snackbar } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from "./styles";
import { useSelector } from "react-redux";

const Dates = () => {
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [professional, setProfessional] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [confirmed, setConfirmed] = React.useState(false);
    const [isSnackbarVisible, setSnackbarVisible] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false); // Nuevo estado para editar
    const userId = useSelector((state) => state.tip.user.data.id);
    const [appointmentId, setAppointmentId] = React.useState(null); 

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (selectedDate = new Date()) => {
        setDate(selectedDate);
        hideDatePicker();
    };

    const confirmAppointment = async () => {
        if (name.trim() === '' || professional.trim() === '' || address.trim() === '') {
            setSnackbarVisible(true);
        } else {
            try {
                const response = await fetch('https://agendavbg.onrender.com/mydates', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        date,
                        professional,
                        address,
                        userId
                    }),
                });
                if (response.ok) {
                    const data = await response.json();
                    setAppointmentId(data.id); // Guardar el ID de la cita
                    setConfirmed(true);
                } else {
                    console.error('Error al confirmar la cita');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        }
    };

    const editAppointment = () => {
        setIsEditing(true);
        setConfirmed(false);
    };

    const updateAppointment = async () => {
        try {
            const response = await fetch(`https://agendavbg.onrender.com/mydates/${appointmentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date,
                    professional,
                    address,
                    userId
                }),
            });
            if (response.ok) {
                const data = await response.json();
                setIsEditing(false);
                setConfirmed(true);
            } else {
                console.error('Error al actualizar la cita');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const hideSnackbar = () => {
        setSnackbarVisible(false);
    };

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.topSection}>
                        <Text style={styles.title}>Mis Citas</Text>
                    </View>
                    <View>
                        <Image
                            source={require("../../assets/img/My Dates.jpeg")}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            label="Nombre"
                            value={name}
                            onChangeText={text => setName(text)}
                            style={styles.input}
                            editable={!confirmed || isEditing} // para saber si confirmo o  está en modo de edición
                        />
                        <TextInput
                            label="Profesional"
                            value={professional}
                            onChangeText={text => setProfessional(text)}
                            style={styles.input}
                            editable={!confirmed || isEditing}
                        />
                        <TextInput
                            label="Dirección"
                            value={address}
                            onChangeText={text => setAddress(text)}
                            style={styles.input}
                            editable={!confirmed || isEditing}
                        />
                        <Button onPress={showDatePicker} mode="contained" disabled={confirmed && !isEditing}>
                            Seleccionar Fecha y Hora
                        </Button>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <TextInput
                            label="Fecha y Hora Seleccionada"
                            value={date.toLocaleString()}
                            editable={false}
                            style={styles.input}
                        />
                        {!confirmed && (
                            <Button onPress={confirmAppointment} mode="contained" style={styles.confirmButton}>
                                Confirmar Cita
                            </Button>
                        )}
                        {confirmed && !isEditing && (
                            <Button onPress={editAppointment} mode="contained" style={styles.confirmButton}>
                                Editar Cita
                            </Button>
                        )}
                        {isEditing && (
                            <Button onPress={updateAppointment} mode="contained" style={styles.confirmButton}>
                                Guardar Cambios
                            </Button>
                        )}
                        {confirmed && !isEditing && (
                            <View style={styles.confirmationContainer}>
                                <Text style={styles.confirmationText}>Cita Confirmada:</Text>
                                <Text style={styles.confirmationDetails}>Nombre: {name}</Text>
                                <Text style={styles.confirmationDetails}>Profesional: {professional}</Text>
                                <Text style={styles.confirmationDetails}>Dirección: {address}</Text>
                                <Text style={styles.confirmationDetails}>Fecha y Hora: {date.toLocaleString()}</Text>
                            </View>
                        )}
                    </View>
                    <Snackbar
                        visible={isSnackbarVisible}
                        onDismiss={hideSnackbar}
                        duration={Snackbar.DURATION_SHORT}
                    >
                        Todos los campos son obligatorios.
                    </Snackbar>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    );
}

export default Dates;