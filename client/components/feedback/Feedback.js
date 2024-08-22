import React, {useState, useEffect} from 'react';
import { View, Text, Image,TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import tipFinal from "../../assets/json/tipFinal.json";
import styles from './styles';
import axios from 'axios';


const Feedback = ({route,  navigation }) => {
    const {tipId} =route.params;
    const tip= tipFinal.find(t=> t.id === tipId);
    const userIdR = useSelector((state) => state.tip.user)
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        async function fetchResponse() {
            try {
                const {data}  = await axios.get("https://agendavbg.onrender.com/response", {
                    params: {
                        user_id: userIdR.data.id,
                        workshop_id: tipId, 
                    }
                });
                console.log("esa es la data", data)
                setResponse(data.data);
            } catch (err) {
                setError(err.message || "Error al obtener los datos");
            } finally {
                setLoading(false);
            }
        }

        fetchResponse();
    }, [userIdR.data.id, tipId]);

const renderResponse = (response) => {
        if (typeof response === 'string') {
            return <Text>{response}</Text>;
        } else if (Array.isArray(response)) {
            return response.map((item, index) => <Text key={index}>{item}</Text>);
        } else if (typeof response === 'object') {
            return Object.entries(response).map(([key, value]) => (
                 <View key={key}>
                <Text>{key}:</Text>
                {typeof value === 'object' && !Array.isArray(value) ? (
                    Object.entries(value).map(([subKey, subValue]) => (
                        <View key={subKey}>
                            <Text>{subKey}:</Text>
                            <Text>{subValue}</Text>
                        </View>
                    ))
                ) : (
                    <Text>{value}</Text>
                )}
            </View>
        ));
        } else {
            return <Text>Tipo de dato no soportado</Text>;
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
                    <Text style={styles.textCenter}>Mis respuestas:</Text>
                </View>
            </View>
            <View>
                {renderResponse(response)}
            </View>
            
        </View>

    )

}
export default Feedback;