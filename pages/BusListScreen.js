import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface FilterCompoentProps {
  title: String;
}

interface ListOfBusComponentProps {
  busList: Array;
}

export default function BusListScreen() {
  const navigation = useNavigation();

  const data = Array(5).fill(1);
  const data2 = Array(5).fill(1);

  const FilterCompoent = (filterProps: FilterCompoentProps) => {
    const { title } = filterProps;

    const renderFilters = ({ item, index }) => {
      return (
        <TouchableOpacity style={styles.filterContainer}>
          <Text style={{ fontSize: 14, fontWeight: '600' }}>
            {title ? title : 'filter ' + index}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.filterFlatlistHolderContainer}>
        <FlatList
          data={data}
          renderItem={renderFilters}
          horizontal
          ItemSeparatorComponent={() => {
            return <View style={{ width: 10 }} />;
          }}
          contentContainerStyle={{ paddingLeft: 10 }}
          showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
        />
      </View>
    );
  };

  const ListOfBusComponent = (buslistProp: ListOfBusComponentProps) => {
    const renderBusList = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={styles.renderBusItemContainer}
          onPress={() => {
            console.log("jigo")
            navigation.navigate('busLayout');
          }}>
          <View style={{ flexDirection: 'row', flex: 1, padding: 5 }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                borderWidth: 2,
                borderColor: '#00000033',
                borderRadius: 10,
              }}>
              <Ionicons name="md-bus-outline" size={50} color="#00000066" />
            </View>
            <View style={{ padding: 5, paddingLeft: 10, flex: 1 }}>
              <Text style={styles.busName}>Bus name</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Ionicons name="star" size={15} color="#00000099" />
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{ fontSize: 11, marginLeft: 5, fontWeight: '600' }}>
                    5.5
                  </Text>
                  <Text
                    style={{ fontSize: 11, marginLeft: 5, fontWeight: '600' }}>
                    (23)
                  </Text>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 11, fontWeight: '300', marginTop: 5 }}>
                  time: 3h 24m
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}>
                6:00 am
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 5 }}>
                Rs: 230.00
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  marginTop: 5,
                  textDecorationLine: 'line-through',
                  color: 'red',
                }}>
                Rs: 280.00
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data2}
          renderItem={renderBusList}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 5 }} />;
          }}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{ marginTop: 10 }}>
        <FilterCompoent />
      </View>

      <View style={styles.hrLine} />

      <View style={{ flex: 1 }}>
        <ListOfBusComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  busName: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    // marginTop: Constants.statusBarHeight
  },
  hrLine: {
    height: 2,
    backgroundColor: 'gray',
    borderRadius: 2,
    opacity: 0.2,
    marginVertical: 15,
  },
  filterContainer: {
    backgroundColor: '#bebebe',
    padding: 5,
    width: 80,
    alignItems: 'center',
    borderRadius: 20,
  },
  filterFlatlistHolderContainer: {
    padding: 5,
  },
  mainContainer: {
    flex: 1,
    padding: 5,
    // marginTop: Constants.statusBarHeight,
  },
  renderBusItemContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#00000011',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#00000088',
  },
});
