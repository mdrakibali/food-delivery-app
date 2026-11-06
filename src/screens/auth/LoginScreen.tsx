import React from 'react';
import { View, Text, Button } from 'react-native';
import type { AuthStackScreenProps } from '../../navigation/types';

export default function LoginScreen({ navigation }: AuthStackScreenProps<'Login'>) {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-6">Login Screen</Text>

      <View className="gap-3 w-full max-w-xs">
        <Button
          title="Login (Go to Main App)"
          onPress={() => navigation.navigate('Main' as any)}
        />
        <Button
          title="Go to Register"
          color="#666"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}
