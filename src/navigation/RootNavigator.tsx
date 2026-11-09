import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { RootStackParamList } from './types';

import OnboardingScreen from '../screens/splash/OnboardingScreen';
import SplashScreen from '../screens/splash/SplashScreen';
import WelcomeScreen from '../screens/splash/WelcomeScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      {/* 1. Auto 2-sec Splash with Background & Logo */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* 2. Interactive Swipeable Onboarding Slider (3 slides) */}
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ animation: 'slide_from_right' }}
      />

      {/* 3. Welcome / Join Screen (Apple, Google, Facebook, Email) */}
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ animation: 'slide_from_right' }}
      />

      {/* 4. Auth Flow (Login, Register) */}
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ animation: 'slide_from_right' }}
      />

      {/* 5. Main App (Bottom Tabs: Home, Profile) */}
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
}
