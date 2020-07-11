import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, StyleSheet, Image } from "react-native"
import Hostlist from "./view/hotlist/View"
import Wiki from "./view/wiki/View"
import Ionicons from "react-native-vector-icons/Ionicons"
import Dtail from "./view/dtaile/View"
import { Provider } from "react-redux";
import store from "./store/index"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
function Homeinfo() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wiki" component={Wiki} />
      <Stack.Screen name="Dtail" component={Dtail} />
    </Stack.Navigator>
  )
}
function MyStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Hostlist') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Homeinfo} />
        <Tab.Screen name="Hostlist" component={Hostlist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const App=()=>{
  return(
    <Provider store={store}>
      <MyStack></MyStack>
    </Provider>
  )
}
export default App;