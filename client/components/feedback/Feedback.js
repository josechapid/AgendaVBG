import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import tipFinal from "../../assets/json/tipFinal.json";
import styles from './styles';
import axios from 'axios';


const Feedback = ({route }) => {
    const {tipId} =route.params;
    const tip= tipFinal.find(t=> t.id === tipId);
    const userIdR = useSelector((state) => state.tip.user)
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [eleven, setEleven]=useState(null)

     useEffect(() => {
        async function fetchResponse() {
            try {
                const {data}  = await axios.get("https://agendavbg-frp4.onrender.com/response", {
                    params: {
                        user_id: userIdR.data.id,
                        workshop_id: tipId, 
                    }
                });
                const dataTwo = {
                  user_id: userIdR.data.id,
                  number: 2,
                };
                const queryStringTwo = `?user_id=${dataTwo.user_id}&number=${dataTwo.number}`;
                 const consultTipEleven = await axios.get(
                   `https://agendavbg-frp4.onrender.com/howDoIFeel${queryStringTwo}`
                 );
                setResponse(data.data);
                setEleven(consultTipEleven.data.data)
            } catch (err) {
                setError(err.message || "Error al obtener los datos");
            } finally {
                setLoading(false);
            }
        }

        fetchResponse();
    }, [userIdR.data.id, tipId]);
    
const renderResponse = (response, eleven) => {
  if ((tipId === 5 || tipId === 10) && typeof response === 'object' && response !== null) {
    const isTipFive = tipId === 5;
    //Se asegura que los arrays están bien formateados
    const firstArray = isTipFive ? Array.isArray(response.dia) ? response.dia : [response.dia] : Array.isArray(response.situacion) ? response.situacion : [response.situacion];
    const secondArray = isTipFive ? Array.isArray(response.ejercicio) ? response.ejercicio : [response.ejercicio] : Array.isArray(response.como_actuo) ? response.como_actuo : [response.como_actuo];
    const thirdArray = !isTipFive ? Array.isArray(response.cambio) ? response.cambio : [response.cambio] : [];

    return (
      <View style={styles.responseContainer}>
        
        <View style={styles.responseTitles}>
          <Text style={styles.keyText}>{isTipFive ? 'Día:' : 'Situación:'}</Text>
          <Text style={styles.keyText}>{isTipFive ? 'Ejercicio:' : 'Cómo actúo:'}</Text>
          {!isTipFive && <Text style={styles.keyText}>Cambio:</Text>}
        </View>
        
        {firstArray.map((item, index) => (
          <View key={index} style={styles.responseRow}>
            <View style={styles.responseItem}>
              <Text style={styles.responseText}>{item}</Text>
            </View>
            <View style={styles.responseItem}>
              <Text style={styles.responseText}>{secondArray[index] || ''}</Text>
            </View>
            {!isTipFive && (
              <View style={styles.responseItem}>
                <Text style={styles.responseText}>{thirdArray[index] || ''}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    );
  } else if (tipId === 9 && Array.isArray(response)) {
    return response.map((item, index) => (
      <View key={index} style={styles.responseContainer}>
        <Text style={styles.keyText}>Nombre: {item.name}</Text>
        <Text style={styles.keyText}>Rol: {item.rol}</Text>
      </View>
    ))}
  else if (typeof response === 'string') {
    return (
      <View style={styles.responseContainer}>
        <Text style={styles.responseText}>{response}</Text>
      </View>
    );
  } else if (Array.isArray(response)) {
    return response.map((item, index) => (
      <View style={styles.responseContainer} key={index}>
        {renderResponse(item)}
      </View>
    ));
  } else if (typeof response === 'object' && response !== null) {
    return (
      <View style={styles.responseContainer}>
        {Object.entries(response).map(([key, value]) => (
          <View key={key} style={styles.responseContainerObject}>
            <Text style={styles.keyText}>{key}:</Text>
            {renderResponse(value)}
          </View>
        ))}
      </View>
    );
  } else if (typeof eleven === 'object' && eleven !== null) {
    return (
      <View style={styles.responseContainer}>
        {Object.entries(eleven).map(([key, value]) => (
          <View key={key} style={styles.responseContainerObject}>
            <Text style={styles.keyText}>{key}:</Text>
            {renderResponse(value)}
          </View>
        ))}
      </View>
    );
  } else {
    return (
      <View style={styles.responseContainer}>
        <Text style={styles.responseText}>Tipo de dato no soportado</Text>
      </View>
    );
  }
};

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>{tip.title}</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.textSection}>
                    <Text>Mis respuestas:</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {renderResponse(response, eleven)}
            </ScrollView>
            
        </View>

    )

}
export default Feedback;