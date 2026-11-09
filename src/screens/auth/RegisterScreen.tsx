import { Check, Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import type { AuthStackScreenProps } from '../../navigation/types';
import AuthLayout from './AuthLayout';

export default function RegisterScreen({
  navigation,
}: AuthStackScreenProps<'Register'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleRegister = () => {
    let hasError = false;

    if (!email.trim()) {
      setEmailError('Please enter your email address');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!agreed) {
      setTermsError('You must agree to the terms & conditions');
      hasError = true;
    } else {
      setTermsError('');
    }

    if (hasError) return;

    // Navigate to OTP verification for new account
    navigation.navigate('VerifyAccount', { email });
  };

  return (
    <AuthLayout>
      <View className="flex-1 justify-between">
        {/* Top Section: Title, Subtitle & Inputs */}
        <View className="flex gap-4">
          <Text className="text-4xl font-extrabold text-[#222222] mb-1 leading-tight">
            Create a new{'\n'}account
          </Text>

          <Text className="text-base text-gray-500 leading-relaxed">
            Please enter your details to create an account
          </Text>

          {/* Email Input */}
          <View>
            <TextInput
              placeholder="email address"
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

          {/* Password Input */}
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
                placeholder="password"
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

          {/* Terms & Conditions Checkbox */}
          <View>
            <Pressable
              onPress={() => {
                setAgreed(!agreed);
                if (termsError) setTermsError('');
              }}
              className="flex-row items-center gap-2.5 pt-1"
            >
              <View
                className={`w-5 h-5 rounded border justify-center items-center ${
                  agreed
                    ? 'bg-[#54A312] border-[#54A312]'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {agreed && <Check size={14} color="#ffffff" strokeWidth={3} />}
              </View>
              <Text className="text-gray-600 text-sm font-medium">
                I agree to terms & conditions
              </Text>
            </Pressable>
            {termsError ? (
              <Text className="text-red-500 text-xs px-1 pt-1 font-medium">
                {termsError}
              </Text>
            ) : null}
          </View>
        </View>

        {/* Bottom Section: Action Button & Login Link */}
        <View className="flex gap-3">
          <Pressable
            onPress={handleRegister}
            className="w-full h-[54px] bg-[#54A312] rounded-xl justify-center items-center active:opacity-85"
          >
            <Text className="text-lg text-white font-bold">
              Create account
            </Text>
          </Pressable>

          {/* Already have an account? Log in */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-500 text-base">
              Already have an account?{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text className="text-gray-900 font-bold text-base underline">
                Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
}
