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
        <Button
          title = "Info. violencia"
          onPress={()=>
            navigation.navigate('Infoviolence', {name: 'InfoViolence'})
          }
        />
        <Button
          title = "Tip 1"
          onPress={()=>
            navigation.navigate('Tip1', {name: 'Tip1'})
          }
        />
        <Text>{route.params?.fromChild || "Param not provided yet"}</Text>
      </View>
    );
};


export default HomeScreen;