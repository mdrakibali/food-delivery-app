import React from 'react';
import { View, Text, Button } from 'react-native';
import type { AuthStackScreenProps } from '../../navigation/types';

export default function RegisterScreen({ navigation }: AuthStackScreenProps<'Register'>) {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-6">Register Screen</Text>

      <View className="gap-3 w-full max-w-xs">
        <Button
          title="Already have account? Back to Login"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

