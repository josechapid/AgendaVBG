import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const PerfileScreen = ({route}) => {
    return <Text> This is {route.params.name}'s profile </Text>;
};


export default PerfileScreen;
