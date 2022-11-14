/*
 * @name: ConformBookingScreen.js
 * type : screen layout
 * @authore: Jeegar goyani
 * discription: this screen for handle details of passanger enter by user...
 */

import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
// import Constants from 'expo-constants';

// let userInfo1 = [
//   {
//     name: 'jigo goyani',
//     age: 21,
//     seatNumber: 'R12',
//   },
// ];

export default function ConformBookingScreen({ route, navigation }) {
  const { userInfo } = route.params;

  React.useMemo(() => {
    if (userInfo === undefined || !userInfo) {
      navigaiton.goBack();
      return;
    }
  }, [userInfo]);

  const [userDetails, setUserDetails] = React.useState(userInfo);
  console.log(userDetails);

  let final_arry = [];
  userDetails.map((item, index) => {
    let final_make_arry = [];
    Object.keys(item).map((item2, index2) => {
      let val = Object.values(item)[index2];
      // console.log(val);
      final_make_arry.push(val);
    });
    console.log(final_make_arry);
    let final_arr = [];
    final_make_arry = [index + 1, ...final_make_arry];
    final_arry.push(final_make_arry);
  });

  console.log(final_arry);

  const ThankyouComponet = () => {
    // console.log('update ThankyouComponet');
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: 'https://i.gifer.com/6F8w.gif' }}
          style={{ height: 200, width: 200, alignSelf: 'center' }}
        />
      </View>
    );
  };

  const ShowBookingInfoComponent = () => {
    return (
      <View style={{ flex: 1, padding: 5, paddingHorizontal: 10 }}>
        <View style={styles.bkd_headingContainer}>
          <Text style={styles.bkd_headingText}>Bus Name : </Text>
          <Text style={styles.bkd_headingTextValue}>Radhe Travel Prv.</Text>
        </View>
        <View style={styles.bkd_headingContainer}>
          <Text style={styles.bkd_headingText}>Bus Time : </Text>
          <Text style={styles.bkd_headingTextValue}>06 : 00 am</Text>
        </View>
        <View style={styles.bkd_headingContainer}>
          <Text style={styles.bkd_headingText}>Bus pickup point : </Text>
          <Text style={styles.bkd_headingTextValue}>Iscon Corse Road.</Text>
        </View>
        <View style={styles.bkd_headingContainer}>
          <Text style={styles.bkd_headingText}>Bus Drop point : </Text>
          <Text style={styles.bkd_headingTextValue}>Nari Chokdi.</Text>
        </View>
      </View>
    );
  };

  const child1 = React.useMemo(() => <ThankyouComponet />, []);
  const child2 = React.useMemo(() => <ShowBookingInfoComponent />, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.thankyouContainer}>{child1}</View>
      <Text style={styles.heading}>Your Bokking is conform</Text>
      <Text style={styles.bookignText}>Your booking details</Text>
      <View style={styles.bookingDetailsContainer}>{child2}</View>
      <View style={{ margin: 20, marginTop: 30 }}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row
            data={['No', 'Name', 'Age', 'seat']}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={final_arry} textStyle={styles.text} />
        </Table>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: 'purple',
            borderRadius: 20,
            width: '50%',
            alignItems:"center",
          }}
            onPress={() => {
              navigation.navigate("home")
            }}
          >
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookingDetailsContainer: {
    height: 130,
    // display:"flex",
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'gray',
  },
  bookignText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center',
  },
  bkd_headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  bkd_headingText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
  bkd_headingTextValue: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  text: {
    margin: 6,
  },
  thankyouContainer: {
    height: 200,
    // borderWidth: 1,
  },
});
