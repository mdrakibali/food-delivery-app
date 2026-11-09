import React from 'react';
import { Text, View } from 'react-native';
import AuthLayout from './AuthLayout';

export default function ForgotPasswordScreen() {
  return (
    <AuthLayout>
      <View className="flex-1 justify-between">
        <Text className="text-4xl font-extrabold text-[#222222] mb-3 leading-tight">
          Log in to your{'\n'}account
        </Text>
      </View>
    </AuthLayout>
  );
}
