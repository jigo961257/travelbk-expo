import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import CustomeTextInput from '../components/CustomeTextInput';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const [d_source, setDSource] = React.useState('');
  const [d_destination, setDDestination] = React.useState('');

  const BookingLayoutInput = () => {
    return (
      <View style={styles.mainBookingLayoutStyle}>
        <Text style={styles.title}>Book your seat</Text>
        
        <View style={styles.inputsLayoutContainer}>
          <CustomeTextInput lable="Source :" setText={setDSource} />
          <CustomeTextInput lable="Destination :" setText={setDDestination} />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("busListScreen")
          }}
          style={styles.bookButtonStyle}
        >
          <Text style={{fontSize:13, fontWeight:'600', color:"white"}}>Book a Travel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainHomeContainer}>
    <StatusBar barStyle="light-content" />
      <BookingLayoutInput />
    </View>
  );
}

const styles = StyleSheet.create({
  bookButtonStyle: {
    height: 30,
    // width:"40%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#2a9df4',
    margin: 20,
    marginHorizontal: 15,
  },
  inputsLayoutContainer: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  mainHomeContainer: {
    flex: 1,
  },
  mainBookingLayoutStyle: {
    width: '70%',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
    alignSelf: 'center',
    marginTop: 30,
    elevation: 10,
    borderWidth: 0.5,
    borderColor: '#bebebe',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
});
