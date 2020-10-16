import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BaoHanh_KichHoat from './BaoHanh_KichHoat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BaoHanh_TraCuu from './BaoHanh_TraCuu';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const BaoHanhKH = createStackNavigator();
const BaoHanhTC = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Welcome = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    shifting={false}
    labeled={true}
    sceneAnimationEnabled={false}
    activeColor="red"
    inactiveColor="#95a5a6"
    barStyle={{ backgroundColor: '#ffff' }}
  >
    <Tab.Screen
      name="BaoHanh_KichHoat"
      component={BaoHanh_KichHoat}
      options={{
        tabBarLabel: 'Kích hoạt bảo hành',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="BaoHanh_TraCuu"
      component={BaoHanh_TraCuu}
      options={{
        tabBarLabel: 'Tra cứu bảo hành',
        tabBarIcon: ({ color }) => (
          <Icon name="bell" color={color} size={26} />
        ),
      }}
    />

  </Tab.Navigator>
);

export default Welcome;