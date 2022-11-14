import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { letftRowSeats, rightRowSeats } from '../utils/RawData';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

export default function BusLayout() {
  // listing all states here
  const navigaiton = useNavigation();

  const [leftRow, setLeftRow] = React.useState(letftRowSeats);
  const [rightRow, setRightRow] = React.useState(rightRowSeats);

  const final_selected_seats = [];

  // all life cycle is start here
  // React.useEffect(() => {

  // },[])

  // the left row component for the seat
  const SeatsLeftRowLayout = ({ setData, data }) => {
    const onSelected = (index) => {
      let tempRow = [];
      tempRow = data;
      tempRow.map((item, ind) => {
        if (index === ind) {
          if (item.isBooked) {
            alert('seat already book!');
          } else if (item.selected) {
            item.selected = false;
            // item.isBooked = false;
          } else {
            item.selected = true;
          }
        }
      });

      // console.log(tempRow);
      let tempSeat = [];
      tempRow.map((item) => {
        tempSeat.push(item);
      });
      setData(tempSeat);
    };
    const leftSeatRender = ({ item, index }) => {
      return (
        <View style={{ margin: 4 }}>
          {index === 6 || index === 7 ? (
            <View style={{ height: 40 }} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                onSelected(index);
              }}>
              <MaterialCommunityIcons
                name="seat"
                size={40}
                color={
                  item.isBooked
                    ? 'green'
                    : item.selected
                    ? 'lightgreen'
                    : 'gray'
                }
              />
            </TouchableOpacity>
          )}
        </View>
      );
    };
    // let data = Array(16).fill(1);
    return (
      <View>
        <FlatList
          data={data}
          renderItem={leftSeatRender}
          keyExtractor={(item) => item}
          numColumns={2}
        />
      </View>
    );
  };

  // this for right component for the seats
  const SeatsRightRowLayout = ({ setData, data }) => {
    const onSelected = (index) => {
      let tempRow = [];
      tempRow = data;
      tempRow.map((item, ind) => {
        if (index === ind) {
          if (item.isBooked) {
            alert('seat already book!');
          } else if (item.selected) {
            item.selected = false;
            // item.isBooked = false;
          } else {
            item.selected = true;
          }
        }
      });

      console.log(tempRow);
      let tempSeat = [];
      tempRow.map((item) => {
        tempSeat.push(item);
      });
      setData(tempSeat);
    };

    const rightSeatRender = ({ item, index }) => {
      return (
        <View style={{ margin: 4 }}>
          <TouchableOpacity
            onPress={() => {
              onSelected(index);
            }}>
            <MaterialCommunityIcons
              name="seat"
              size={40}
              color={
                item.isBooked ? 'green' : item.selected ? 'lightgreen' : 'gray'
              }
            />
          </TouchableOpacity>
        </View>
      );
    };
    // let data = Array(24).fill(1);
    return (
      <View>
        <FlatList
          data={data}
          renderItem={rightSeatRender}
          keyExtractor={(item) => item}
          numColumns={3}
        />
      </View>
    );
  };

  // by this calculate the total seats selected
  function getAllSeat() {
    leftRow.map((item) => {
      if (item.selected) {
        final_selected_seats.push(item);
      }
    });
    rightRow.map((item) => {
      if (item.selected) {
        final_selected_seats.push(item);
      }
    });

    return final_selected_seats.filter(
      (item, index) => final_selected_seats.indexOf(item) === index
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={styles.busSeatLayoutContainer}>
        <View style={{ alignSelf: 'flex-end', margin: 5 }}>
          <MaterialCommunityIcons
            name="steering"
            size={50}
            color="black"
            style={{ opacity: 0.5 }}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <SeatsLeftRowLayout setData={setLeftRow} data={leftRow} />

          <SeatsRightRowLayout setData={setRightRow} data={rightRow} />
        </View>
      </View>

      <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Octicons name="dot-fill" size={20} color="gray" />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              fontWeight: '600',
              color: 'gray',
            }}>
            available seats
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 4,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Octicons name="dot-fill" size={20} color="green" />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                fontWeight: '600',
                color: 'green',
              }}>
              already Booked
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Octicons name="dot-fill" size={20} color="lightgreen" />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                fontWeight: '600',
                color: 'lightgreen',
              }}>
              selected seat
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          padding: 5,
          left: 0,
          right: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            alignItems: 'center',
          }}>
          <View>
            <Text>Total Seat:{getAllSeat().length}</Text>
            <Text>Total Price: {getAllSeat().length * 230}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                height: 40,
                width: 150,
                backgroundColor: 'green',
                alignItems: 'center',
                borderRadius: 20,
                justifyContent: 'center',
              }}
              onPress={() => {
                let count = getAllSeat().length;
                if (count > 0) {
                  navigaiton.navigate('passangerDetails', {
                    totalSeatCount: getAllSeat().length,
                    data: getAllSeat(),
                  });
                  // console.log(getAllSeat());
                } else {
                  alert('please selecte seat to procced further');
                }
              }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>
                Book now!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  busSeatLayoutContainer: {
    height: '70%',
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
