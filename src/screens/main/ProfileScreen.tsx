import React from 'react';
import { View, Text, Button } from 'react-native';
import type { MainTabScreenProps } from '../../navigation/types';

export default function ProfileScreen({ navigation }: MainTabScreenProps<'Profile'>) {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-6">Profile Screen</Text>

      <View className="gap-3 w-full max-w-xs">
        <Button
          title="Back to Home Tab"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Logout"
          color="#EF4444"
          onPress={() => navigation.navigate('Auth' as any, { screen: 'Login' })}
        />
      </View>
    </View>
  );
}

