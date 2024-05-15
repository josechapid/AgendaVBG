import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

const Bienvenida = () => {
    return (
      <View>
        <View>
            <Text>Bienvenida</Text>
        </View>
        <View>
            <Image/>
        </View>
        <View>
            <Text>Somos</Text>
        </View>
        <TouchableOpacity>
            <Text>Siguiente</Text>
        </TouchableOpacity>
         <TouchableOpacity>
            <Text>Siguiente</Text>
        </TouchableOpacity>
      </View>
    );
};


export default Bienvenida;