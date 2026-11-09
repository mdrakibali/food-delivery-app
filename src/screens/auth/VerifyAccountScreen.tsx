import { useRoute, type RouteProp } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import type {
  AuthStackParamList,
  AuthStackScreenProps,
} from '../../navigation/types';
import AuthLayout from './AuthLayout';

export default function VerifyAccountScreen({
  navigation,
}: AuthStackScreenProps<'VerifyAccount'>) {
  const route = useRoute<RouteProp<AuthStackParamList, 'VerifyAccount'>>();
  const email = route.params?.email || 'sample@example.com';
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [timer, setTimer] = useState<number>(20);
  const [error, setError] = useState<string>('');

  const inputRefs = [
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
  ];

  // Resend Countdown Timer
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    setError('');
    // Handle paste of 4 digits
    if (text.length > 1) {
      const digits = text.replace(/[^0-9]/g, '').slice(0, 4).split('');
      const newOtp = [...otp];
      digits.forEach((d, i) => {
        newOtp[i] = d;
      });
      setOtp(newOtp);
      const nextIndex = Math.min(digits.length, 3);
      inputRefs[nextIndex].current?.focus();
      return;
    }

    const digit = text.replace(/[^0-9]/g, '');
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Auto-advance to next box if digit entered
    if (digit && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<any>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleResend = () => {
    if (timer > 0) return;
    setTimer(20);
    setOtp(['', '', '', '']);
    setError('');
    inputRefs[0].current?.focus();
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  const handleVerify = () => {
    if (!isOtpComplete) {
      setError('Please enter the 4-digit verification code');
      return;
    }
    setError('');
    // Account verified successfully -> Navigate to Main App
    navigation.getParent()?.navigate('Main');
  };

  return (
    <AuthLayout>
      <View className="flex-1 justify-between">
        {/* Top Section: Title, Subtitle & OTP Inputs */}
        <View className="flex gap-4">
          <Text className="text-4xl font-extrabold text-[#222222] mb-1 leading-tight">
            Verify your new{'\n'}account
          </Text>

          <Text className="text-base text-gray-500 leading-relaxed">
            Enter the verification code sent to your email{'\n'}
            <Text className="text-gray-800 font-semibold">{email}</Text>
          </Text>

          {/* 4-digit OTP Input Boxes */}
          <View className="flex-row justify-between gap-3 mt-4">
            {otp.map((digit, index) => {
              const isFilled = Boolean(digit);
              return (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  value={digit}
                  onChangeText={text => handleChange(text, index)}
                  onKeyPress={e => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={index === 0 ? 4 : 1}
                  selectTextOnFocus
                  className={`flex-1 h-[64px] max-w-[76px] border rounded-2xl text-2xl font-bold text-center text-gray-900 bg-white ${
                    error
                      ? 'border-red-500'
                      : isFilled
                      ? 'border-[#54A312]'
                      : 'border-gray-200'
                  }`}
                />
              );
            })}
          </View>

          {error ? (
            <Text className="text-red-500 text-xs px-1 font-medium">{error}</Text>
          ) : null}

          {/* Resend Timer Row */}
          <View className="flex-row items-center gap-1.5 pt-2">
            <Text className="text-gray-500 text-sm">
              Didn't received the code?{' '}
              {timer > 0 ? (
                <Text className="text-gray-700 font-semibold">
                  00:{timer < 10 ? `0${timer}` : timer}
                </Text>
              ) : null}
            </Text>

            {timer > 0 ? (
              <Text className="text-gray-400 text-sm font-semibold">Resend</Text>
            ) : (
              <Pressable onPress={handleResend} hitSlop={8}>
                <Text className="text-[#54A312] text-sm font-bold underline">
                  Resend
                </Text>
              </Pressable>
            )}
          </View>
        </View>

        {/* Bottom Section: Continue Button */}
        <View className="flex gap-3">
          <Pressable
            onPress={handleVerify}
            className="w-full h-[54px] bg-[#54A312] rounded-xl justify-center items-center active:opacity-85"
          >
            <Text className="text-lg text-white font-bold">Continue</Text>
          </Pressable>
        </View>
      </View>
    </AuthLayout>
  );
}
