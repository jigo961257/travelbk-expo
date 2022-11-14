/*
 * @name: PassangerDetails.js
 * type : screen layout
 * @authore: Jeegar goyani
 * discription: this screen for handle details of passanger enter by user...
 */

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useRoute } from '@react-navigation/native';

let seat = [
  {
    id: 1,
    seatNumber: 1,
  },
  {
    id: 2,
    seatNumber: 20,
  },
  {
    id: 3,
    seatNumber: 2,
  },
];

export default function PassangerDetails({ route, navigation }) {
  // const route = useRoute();
  // seat = [];
  const { totalSeatCount, data } = route.params;
  React.useMemo(() => {
    if (totalSeatCount <= 0) {
      navigation.goback();
    }
    return;
  }, [totalSeatCount]);

  const [seatState, setSeateState] = React.useState(data);

  function handleDetails(type, data, index) {
    let temparr = [];
    temparr = seatState;
    switch (type) {
      case 1:
        // if (temparr[index].id === index + 1) {
        temparr[index].userName = data.nativeEvent.text;
        // }
        break;
      case 2:
        // if (temparr[index].id === index + 1) {
        temparr[index].userage = data.nativeEvent.text;
        // }
        break;
      case 3:
        // if (temparr[index].id === index + 1) {
        temparr[index].zender = data;
        // }
        break;
      default:
        temparr = [];
    }
    // console.log(temparr);
    // seat = temparr

    temparr.map((ele, ind) => {
      const picked = (({ userName, userage, seatNumber }) => ({
        userName,
        userage,
        seatNumber,
      }))(ele);
      picked['age'] = picked['userage'];
      delete picked['userage'];
      temparr[ind] = picked;
    });

    setSeateState(temparr);
    // console.log(seatState);
  }

  return (
    <View style={styles.mainContianer}>
      {seatState.length > 0 ? (
        <>
          <View style={styles.haveSeatSelectedContainer}>
            {seatState.map((item, index) => {
              return (
                <View style={styles.inputDetailsContainer}>
                  <TextInput
                    placeholder={'passanger ' + (index + 1) + ' name'}
                    style={{
                      padding: 5,
                      borderBottomWidth: 1,
                    }}
                    onChange={(data) => {
                      handleDetails(1, data, index);
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{ flex: 0.4 }}>
                      <TextInput
                        placeholder={'age ' + (index + 1)}
                        style={{
                          padding: 5,
                          borderBottomWidth: 1,
                        }}
                        onChange={(data) => {
                          handleDetails(2, data, index);
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.4,
                        justifyContent: 'center',
                      }}>
                      <Text>
                        Seat No.{' '}
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                          {item.seatNumber || '0'}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <View
            style={{
              height: 80,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                navigation.navigate('conformBookingScreen', {
                  userInfo: seatState,
                });
                // console.log(seatState);
              }}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.noSeatSelectedContainer}>
          <Text>Please selecte seat</Text>
          <TouchableOpacity
            style={{ padding: 5, borderBottomWidth: 1 }}
            onPress={() => {
              navigation.navigate('home');
            }}>
            <Text>Back To Home</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  haveSeatSelectedContainer: {
    flex: 1,
    marginTop: 20,
  },
  inputDetailsContainer: {
    height: 100,
    // justifyContent: 'space-between',
    padding: 5,
    marginHorizontal: 10,
  },
  mainContianer: {
    flex: 1,
  },
  nextButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a9df4',
    borderRadius: 6,
    width: '80%',
    alignSelf: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  noSeatSelectedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
