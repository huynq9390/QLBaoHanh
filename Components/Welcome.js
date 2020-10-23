import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BaoHanh_KichHoat from './BaoHanh_KichHoat';
import BaoHanh_TraCuu from './BaoHanh_TraCuu';
import ScannerScreen from './ScannerScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';

const BaoHanhKH = createStackNavigator ();
const BaoHanhTC = createStackNavigator ();
const Tab = createMaterialBottomTabNavigator ();

const Welcome = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    shifting={false}
    labeled={true}
    sceneAnimationEnabled={false}
    activeColor="red"
    inactiveColor="#95a5a6"
    barStyle={{backgroundColor: '#ffff', display:"none"}}
    
  >
    <Tab.Screen
      name="BaoHanh_KichHoat"
      component={BaoHanh_KichHoat}
      options={{
        tabBarLabel: 'Kích hoạt bảo hành',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="BaoHanh_TraCuu"
      component={BaoHanh_TraCuu}
      options={{
        tabBarLabel: 'Tra cứu bảo hành',
        tabBarIcon: ({color}) => <Icon name="bell" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="ScannerScreen"
      component={ScannerScreen}
      options={{
        tabBarLabel: 'Scanner Screen',
        tabBarIcon: ({color}) => <Icon name="barcode-scan" color={color} size={26} />,
      }}
    />

  </Tab.Navigator>
  // <BaoHanh_KichHoat/>
);

export default Welcome;
