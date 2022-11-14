import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import SplashScreen from './pages/SplashScreen';
import BusListScreen from './pages/BusListScreen';
import BusLayout from './pages/BusLayout';
import SelectPointScreen from './pages/SelectPointScreen';
import PassangerDetails from './pages/PassangerDetails';
import ConformBookingScreen from './pages/ConformBookingScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen
          component={SplashScreen}
          name="splashScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Home}
          name="home"
          options={{
            headerStyle: { backgroundColor: '#187bcd' },
            headerTintColor: 'white',
            headerTitle: 'TravelBK',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          component={BusListScreen}
          name="busListScreen"
          options={{
            headerStyle: { backgroundColor: '#187bcd' },
            headerTintColor: 'white',
            headerTitle: 'Bus List',
          }}
        />

        <Stack.Screen
          component={SelectPointScreen}
          name="selectPointScreen"
          options={{
            headerStyle: { backgroundColor: '#187bcd' },
            headerTintColor: 'white',
            headerTitle: 'Select Points',
          }}
        />
        <Stack.Screen
          component={BusLayout}
          name="busLayout"
          options={{
            headerStyle: { backgroundColor: '#187bcd' },
            headerTintColor: 'white',
            headerTitle: 'Select seat',
          }}
        />
        <Stack.Screen
          component={PassangerDetails}
          name="passangerDetails"
          options={{
            headerStyle: { backgroundColor: '#187bcd' },
            headerTintColor: 'white',
            headerTitle: 'Details of Passanger',
          }}
        />
        <Stack.Screen
          component={ConformBookingScreen}
          name="conformBookingScreen"
          options={{
            headerStyle: { backgroundColor: '#187bcd' },
            headerTintColor: 'white',
            headerTitle: 'Conform Bokking',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
