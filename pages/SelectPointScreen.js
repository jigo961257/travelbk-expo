/*
 * @name: SelectPointScreen.js
 * type : screen layout
 * @authore: Jeegar goyani
 * discription: this screen for handle the select point for pickup and drop pints..
 */

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {useNavigation} from "@react-navigation/native"

export default function SelectPointScreen() {

  const navigation = useNavigation();

  const [pickupValue, setPickupValue] = React.useState(null);
  const [dropValue, setDropValue] = React.useState(null);

  let pickup_points = [
    {
      id: 1,
      name: 'pickup-stop',
    },
    {
      id: 2,
      name: 'amdavad centeral bus stop',
    },
    {
      id: 3,
      name: 'paldi bustop',
    },
    {
      id: 4,
      name: 'nehrunagar bus stop',
    },
    {
      id: 5,
      name: 'shivranjni bus stop',
    },
    {
      id: 6,
      name: 'Iscon bus stop',
    },
  ];

  let drop_point = [
    {
      id: 1,
      name: 'drop points',
    },
    {
      id: 2,
      name: 'nari chokdi',
    },
    {
      id: 3,
      name: 'Presh quater',
    },
    {
      id: 4,
      name: 'desainager patrol pump',
    },
    {
      id: 5,
      name: 'Vadla stop',
    },
    {
      id: 6,
      name: 'bhavngar center bus stop',
    },
  ];

  return (
    <View style={styles.mainCntainer}>
      <View style={styles.pickupDropLayoutContainer}>
        <View style={styles.pickupContainer}>
          <Text style={styles.headingText}>Selecte Pick-point</Text>
          <View style={{ borderWidth: 1, marginTop: 10, borderRadius: 5 }}>
            <Picker onValueChange={setPickupValue} selectedValue={pickupValue}>
              {pickup_points.map((item, indxe) => {
                return <Picker.Item label={item.name} value={item.name} />;
              })}
            </Picker>
          </View>
        </View>

        <View style={styles.pickupContainer}>
          <Text style={styles.headingText}>Selecte Drop-point</Text>
          <View style={{ borderWidth: 1, marginTop: 10, borderRadius: 5 }}>
            <Picker onValueChange={setDropValue} selectedValue={dropValue}>
              {drop_point.map((item, indxe) => {
                return <Picker.Item label={item.name} value={item.name} />;
              })}
            </Picker>
          </View>
        </View>

        <View style={{padding:5,}}>
          <TouchableOpacity style={styles.nextButton}
            onPress={() => {
              navigation.navigate("busListScreen")
            }}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  mainCntainer: {
    flex: 1,
  },
  nextButton:{
    height:40,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2a9df4",
    marginTop:20, borderRadius:6,
  },
  nextButtonText:{
    fontSize:14,fontWeight:"bold",
    color:"white", 
  },
  pickupContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  pickupDropLayoutContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    borderWidth: 5,
    paddingVertical: 20,
    borderRadius: 5,
    borderColor: '#00000022',
  },
});
