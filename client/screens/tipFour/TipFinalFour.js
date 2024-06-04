import React from 'react';
import { View,StyleSheet } from 'react-native';
import FinalTip from '../../component/finaltip/FinalTip';

const TipFinalFour = () => {
    const tips = [
        {
            id: 1,
            title:"Encuentra la calma",
            image: require('../../assets/img/conformidad.jpg'),
            textTip: '"¡Gracias por completar este reto! Tu dedicación y esfuerzo son inspiradores. Estamos emocionados de verte seguir adelante con los demás retos. Cada paso que das te acerca más a tus objetivos. ¡Sigue con el mismo entusiasmo y determinación! ¡Felicitaciones y mucho éxito en los próximos desafíos!"',
            textPhrase: 'Frase del tip 4',
            onFinish: () => console.log('Tip 4 finalizado'),
        },
        
    ];

    return (
        <View style={styles.container}>
            {tips.map((tip) => (
                <FinalTip
                    key={tip.id}
                    title={tip.title}
                    image={tip.image}
                    textTip={tip.textTip}
                    textPhrase={tip.textPhrase}
                    onFinish={tip.onFinish}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});

export default TipFinalFour;
