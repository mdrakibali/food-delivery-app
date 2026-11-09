import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import type { AuthStackScreenProps } from '../../navigation/types';
import AuthLayout from './AuthLayout';

export default function LoginScreen({
  navigation,
}: AuthStackScreenProps<'Login'>) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const handleSubmit = () => {
    setError('');
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!password) {
      setError('Please enter your password');
      return;
    }

    // Login successful -> Navigate to Main App (Bottom Tabs)
    navigation.getParent()?.navigate('Main');
  };

  return (
    <AuthLayout>
      <View className="flex-1 justify-between">
        {/* Top Section: Title & Inputs */}
        <View className="flex gap-4">
          <Text className="text-4xl font-extrabold text-[#222222] mb-3 leading-tight">
            Log in to your{'\n'}account
          </Text>

          {/* Email Input */}
          <View>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={text => {
                setEmail(text);
                if (error) setError('');
              }}
              keyboardType="email-address"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              autoCapitalize="none"
              className={`w-full h-[54px] border px-4 rounded-xl text-base text-gray-900 bg-white ${
                error && !email
                  ? 'border-red-500'
                  : isEmailFocused
                  ? 'border-[#54A312]'
                  : 'border-gray-200'
              }`}
            />
          </View>

          {/* Password Input */}
          <View className="relative justify-center">
            <TextInput
              value={password}
              onChangeText={text => {
                setPassword(text);
                if (error) setError('');
              }}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              secureTextEntry={!showPassword}
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              className={`w-full h-[54px] border px-4 pr-12 rounded-xl text-base text-gray-900 bg-white ${
                error && !password
                  ? 'border-red-500'
                  : isPasswordFocused
                  ? 'border-[#54A312]'
                  : 'border-gray-200'
              }`}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-4 h-full justify-center"
              hitSlop={12}
            >
              {showPassword ? (
                <EyeOff size={22} color="#9CA3AF" />
              ) : (
                <Eye size={22} color="#9CA3AF" />
              )}
            </Pressable>
          </View>

          {/* Error Message */}
          {error ? (
            <Text className="text-red-500 text-xs px-1">{error}</Text>
          ) : null}

          {/* Forgot Password Link */}
          <Pressable
            onPress={() => {
              /* Forgot password flow */
            }}
            className="pt-2 items-center"
          >
            <Text className="text-[#54A312] font-bold text-sm">
              forgot password
            </Text>
          </Pressable>
        </View>

        {/* Bottom Section: Action Button & Sign up Link */}
        <View className="flex gap-3">
          <Pressable
            onPress={handleSubmit}
            className="w-full h-[54px] bg-[#54A312] rounded-xl justify-center items-center active:opacity-85"
          >
            <Text className="text-lg text-white font-bold">Log in</Text>
          </Pressable>

          {/* Don't have an account? Sign up */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-500 text-base">
              Don't have an account?{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text className="text-gray-900 font-bold text-base underline">
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
}
