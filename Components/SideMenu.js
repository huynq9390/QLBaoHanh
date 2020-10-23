import React from 'react';
import styles from './Styles';
import {
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

export function SideMenu (props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState (false);
  const toggleTheme = () => {
    setIsDarkTheme (!isDarkTheme);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* User info */}
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image size={50} />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Nguyen Van A</Title>
                <Caption style={styles.caption}>Nhan vien</Caption>
              </View>
            </View>

            {/* <View style={styles.row}>
              <Paragraph>80</Paragraph>
              <Caption></Caption>
            </View> */}
          </View>
          {/* Menu */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="toolbox-outline" color={color} size={size} />
              )}
              label="Kích hoạt bảo hành"
              onPress={() => {
                props.navigation.navigate ('BaoHanh_KichHoat');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-search-outline" color={color} size={size} />
              )}
              label="Tra cứu bảo hành"
              onPress={() => {
                props.navigation.navigate ('BaoHanh_TraCuu');
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preference">
            <TouchableRipple
              onPress={() => {
                toggleTheme ();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}
