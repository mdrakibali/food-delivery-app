import React from 'react';
import { View, Text, Button } from 'react-native';
import type { MainTabScreenProps } from '../../navigation/types';

export default function HomeScreen({ navigation }: MainTabScreenProps<'Home'>) {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-6">Home Screen (Main App)</Text>

      <View className="gap-3 w-full max-w-xs">
        <Button
          title="Go to Profile Tab"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Logout (Back to Auth)"
          color="#EF4444"
          onPress={() => navigation.navigate('Auth' as any, { screen: 'Login' })}
        />
      </View>
    </View>
  );
}
