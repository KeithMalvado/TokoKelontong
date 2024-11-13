import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProductCatalogScreen from '../Screens/ProductCatalogScreen';
import CartScreen from '../Screens/CartScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={ProductCatalogScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
