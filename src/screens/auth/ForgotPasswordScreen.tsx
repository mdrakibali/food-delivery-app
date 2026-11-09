import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { AuthStackScreenProps } from '../../navigation/types';
import AuthLayout from './AuthLayout';

export default function ForgotPasswordScreen({
  navigation,
}: AuthStackScreenProps<'ForgotPassword'>) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleForgotPassword = () => {
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }
    setEmailError('');
    navigation.navigate('VerifyForgotPassword', { email });
  };
  return (
    <AuthLayout>
      <View className="flex-1 justify-between">
        <View className="flex gap-4">
          <Text className="text-4xl font-extrabold text-[#363A33] mb-3 leading-tight">
            Forgot your{'\n'}password
          </Text>
          {/* Email Input */}
          <View>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={text => {
                setEmail(text);
                if (emailError) setEmailError('');
              }}
              keyboardType="email-address"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              autoCapitalize="none"
              className={`w-full h-[54px] border px-4 rounded-xl text-base text-gray-900 bg-white ${
                emailError
                  ? 'border-red-500'
                  : isEmailFocused
                  ? 'border-[#54A312]'
                  : 'border-gray-200'
              }`}
            />
            {emailError ? (
              <Text className="text-red-500 text-xs px-1 pt-1 font-medium">
                {emailError}
              </Text>
            ) : null}
          </View>
        </View>

        <View className="flex gap-3">
          <Pressable
            onPress={handleForgotPassword}
            className="w-full h-[54px] bg-[#54A312] rounded-xl justify-center items-center active:opacity-85"
          >
            <Text className="text-lg text-white font-bold">Continue</Text>
          </Pressable>
        </View>
      </View>
    </AuthLayout>
  );
}
