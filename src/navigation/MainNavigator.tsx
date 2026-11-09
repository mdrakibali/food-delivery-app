import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomBottomTabBar from '../components/navigation/CustomBottomTabBar';
import CartScreen from '../screens/main/CartScreen';
import ExploreScreen from '../screens/main/ExploreScreen';
import FavoriteScreen from '../screens/main/FavoriteScreen';
import HomeScreen from '../screens/main/HomeScreen';
import NotificationScreen from '../screens/main/NotificationScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => (
  <CustomBottomTabBar {...props} />
);

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
