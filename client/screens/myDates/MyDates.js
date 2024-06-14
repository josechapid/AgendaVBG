import * as React from 'react';
import {  Text, View,SafeAreaView, Image} from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Snackbar } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from "./styles";

const Dates = () => {
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [confirmed, setConfirmed] = React.useState(false); //para el boton de confirmar
    const [isSnackbarVisible, setSnackbarVisible] = React.useState(false); //advertencia de campos vacios

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

    const confirmAppointment = () => {
    if (name.trim() === '') {
            setSnackbarVisible(true);
        } else {
            setConfirmed(true);
        }
};

const hideSnackbar = () => {
        setSnackbarVisible(false);
    };

 return(
    <PaperProvider>
      <SafeAreaView style={styles.container}>
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
            />
          <Button onPress={showDatePicker} mode="contained">
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
          <Button onPress={confirmAppointment} mode="contained" style={styles.confirmButton}>
            Confirmar Cita
          </Button>
          {confirmed && (
            <View style={styles.confirmationContainer}>
              <Text style={styles.confirmationText}>Cita Confirmada:</Text>
              <Text style={styles.confirmationDetails}>Nombre: {name}</Text>
              <Text style={styles.confirmationDetails}>Fecha y Hora: {date.toLocaleString()}</Text>
            </View>
          )}
        </View>
            <Snackbar
                    visible={isSnackbarVisible}
                    onDismiss={hideSnackbar}
                    duration={Snackbar.DURATION_SHORT}
            >
                    El campo de nombre no puede estar vacío.
            </Snackbar>
      </SafeAreaView>
    </PaperProvider>
 );
}

export default Dates;