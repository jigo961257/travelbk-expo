import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function SplashScreen() {

  const navigaiton = useNavigation()

  React.useEffect(() => {
    setTimeout(() => {
      navigaiton.navigate("home");
    },3000)
  });

  return (
    <View style={styles.main_container}>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/591030/screenshots/1860170/media/5ccf22cddb5347d205e9ee9a0c40a3f9.gif',
        }}
        style={{ width: 180, height: 180, resizeMode:"cover" }}
      />
      <Text style={{fontSize:26, fontWeight:"600", color:"black"}}>TravelBK</Text>
      <Text style={{fontSize:16, fontWeight:"400", color:"black"}}>let's book your journy with me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#fff',
    flex: 1, justifyContent:"center",
    alignItems:"center",
  },
});
