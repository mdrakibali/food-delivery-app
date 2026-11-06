import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import type { RootStackScreenProps } from '../../navigation/types';

export default function SplashScreen({ navigation }: RootStackScreenProps<'Splash'>) {
  useEffect(() => {
    // 2 second pore auto Auth (Login) e niye jabe (or button press koreo jete parben)
    const timer = setTimeout(() => {
      navigation.replace('Auth', { screen: 'Login' });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Splash Screen</Text>
      <Text className="text-gray-500 mb-6">Loading 2s...</Text>
      <Button
        title="Skip to Login"
        onPress={() => navigation.replace('Auth', { screen: 'Login' })}
      />
    </View>
  );
}

