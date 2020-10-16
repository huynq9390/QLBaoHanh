import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BaoHanh_KichHoat from './Components/BaoHanh_KichHoat';
import Welcome from './Components/Welcome';
import { SideMenu } from './Components/SideMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import BaoHanh_TraCuu from './Components/BaoHanh_TraCuu';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const HomeStack1 = createStackNavigator();
const HomeStack2 = createStackNavigator();

const WelcomeStackScreen = ({ navigation }) => (
  <HomeStack1.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: 'red',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
<HomeStack1.Screen name="Home" component ={Welcome} options={{
  title:'Name of company',
  headerLeft:()=>(
    <Icon.Button color = {'red'} name='menu' size={25} backgroundColor='white'  onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
    </Icon.Button>
  )
}}>
  
</HomeStack1.Screen>
  </HomeStack1.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />} initialRouteName="Home">
        <Drawer.Screen name="Welcome" component={WelcomeStackScreen} />
        {/* <Drawer.Screen name="Tra cứu bảo hành" component={BaoHanh_TraCuu} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

