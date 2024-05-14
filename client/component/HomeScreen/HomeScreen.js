import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation, route}) => {
    return (
      <View>
        <Button
          title = "Black Widow"
          onPress={()=>
            navigation.navigate('Profile', {name: 'Black Windows'})
          }
        />
        <Button
          title = "Black Panther"
          onPress={()=>
            navigation.navigate('Profile', {name: 'Black Panther'})
          }
        />
        <Text>{route.params?.fromChild || "Param not provided yet"}</Text>
      </View>
    );
};


export default HomeScreen;