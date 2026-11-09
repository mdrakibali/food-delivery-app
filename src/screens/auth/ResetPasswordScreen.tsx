import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import type { AuthStackScreenProps } from '../../navigation/types';
import AuthLayout from './AuthLayout';

export default function ResetPasswordScreen({
  navigation,
}: AuthStackScreenProps<'ResetPassword'>) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const handleResetPassword = () => {
    let hasError = false;

    if (!password) {
      setPasswordError('Please enter a new password');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your new password');
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      hasError = true;
    } else {
      setConfirmPasswordError('');
    }

    if (hasError) return;

    // Reset password successful -> Navigate to Login
    navigation.navigate('Login');
  };

  return (
    <AuthLayout>
      <View className="flex-1 justify-between">
        {/* Top Section: Title, Subtitle & Inputs */}
        <View className="flex gap-4">
          <Text className="text-4xl font-extrabold text-[#222222] mb-1 leading-tight">
            Create a new{'\n'}password
          </Text>

          <Text className="text-base text-gray-500 leading-relaxed">
            Enter a new password and try not to forget it.
          </Text>

          {/* New Password Input */}
          <View>
            <View className="relative justify-center">
              <TextInput
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  if (passwordError) setPasswordError('');
                }}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                secureTextEntry={!showPassword}
                placeholder="new password"
                placeholderTextColor="#9CA3AF"
                className={`w-full h-[54px] border px-4 pr-12 rounded-xl text-base text-gray-900 bg-white ${
                  passwordError
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
            {passwordError ? (
              <Text className="text-red-500 text-xs px-1 pt-1 font-medium">
                {passwordError}
              </Text>
            ) : null}
          </View>

          {/* Re-enter New Password Input */}
          <View>
            <View className="relative justify-center">
              <TextInput
                value={confirmPassword}
                onChangeText={text => {
                  setConfirmPassword(text);
                  if (confirmPasswordError) setConfirmPasswordError('');
                }}
                onFocus={() => setIsConfirmPasswordFocused(true)}
                onBlur={() => setIsConfirmPasswordFocused(false)}
                secureTextEntry={!showConfirmPassword}
                placeholder="re-enter the new password"
                placeholderTextColor="#9CA3AF"
                className={`w-full h-[54px] border px-4 pr-12 rounded-xl text-base text-gray-900 bg-white ${
                  confirmPasswordError
                    ? 'border-red-500'
                    : isConfirmPasswordFocused
                    ? 'border-[#54A312]'
                    : 'border-gray-200'
                }`}
              />
              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 h-full justify-center"
                hitSlop={12}
              >
                {showConfirmPassword ? (
                  <EyeOff size={22} color="#9CA3AF" />
                ) : (
                  <Eye size={22} color="#9CA3AF" />
                )}
              </Pressable>
            </View>
            {confirmPasswordError ? (
              <Text className="text-red-500 text-xs px-1 pt-1 font-medium">
                {confirmPasswordError}
              </Text>
            ) : null}
          </View>
        </View>

        {/* Bottom Section: Continue Button */}
        <View className="flex gap-3">
          <Pressable
            onPress={handleResetPassword}
            className="w-full h-[54px] bg-[#54A312] rounded-xl justify-center items-center active:opacity-85"
          >
            <Text className="text-lg text-white font-bold">Continue</Text>
          </Pressable>
        </View>
      </View>
    </AuthLayout>
  );
}

