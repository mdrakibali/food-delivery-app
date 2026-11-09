import { Camera, User } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import type { AuthStackScreenProps } from '../../navigation/types';
import AuthLayout from './AuthLayout';

export default function CreateProfileScreen({
  navigation,
}: AuthStackScreenProps<'CreateProfile'>) {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+880');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const [fullNameError, setFullNameError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
  const [isCodeFocused, setIsCodeFocused] = useState<boolean>(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState<boolean>(false);
  const [isDobFocused, setIsDobFocused] = useState<boolean>(false);
  const [isAddressFocused, setIsAddressFocused] = useState<boolean>(false);

  const handlePickImage = () => {
    // Demo image toggle (connect with image library in production)
    setAvatarUri(prev =>
      prev
        ? null
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    );
  };

  const handleContinue = () => {
    let hasError = false;

    if (!fullName.trim()) {
      setFullNameError('Please enter your full name');
      hasError = true;
    } else {
      setFullNameError('');
    }

    if (!phoneNumber.trim()) {
      setPhoneError('Please enter your phone number');
      hasError = true;
    } else {
      setPhoneError('');
    }

    if (hasError) return;

    // Profile created successfully -> Navigate to Main App (Bottom Tabs)
    navigation.getParent()?.navigate('Main');
  };

  return (
    <AuthLayout>
      <View className="flex-1 justify-between">
        {/* Top Section: Title, Avatar & Input Fields */}
        <View className="flex gap-4">
          <Text className="text-4xl font-extrabold text-[#222222] mb-1 leading-tight">
            Create your new{'\n'}profile
          </Text>

          {/* Profile Avatar with Camera Badge */}
          <View className="items-center my-3">
            <View className="relative">
              <Pressable
                onPress={handlePickImage}
                className="w-[124px] h-[124px] rounded-full bg-[#8E958A] justify-center items-center overflow-hidden active:opacity-90"
              >
                {avatarUri ? (
                  <Image
                    source={{ uri: avatarUri }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                ) : (
                  <User size={64} color="#ffffff" strokeWidth={1.5} />
                )}
              </Pressable>

              {/* Camera Icon Badge */}
              <Pressable
                onPress={handlePickImage}
                className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-[#EAEAEA] border-2 border-white justify-center items-center shadow-sm active:opacity-80"
                hitSlop={8}
              >
                <Camera size={16} color="#363A33" />
              </Pressable>
            </View>
          </View>

          {/* Full Name Input */}
          <View>
            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor="#9CA3AF"
              value={fullName}
              onChangeText={text => {
                setFullName(text);
                if (fullNameError) setFullNameError('');
              }}
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
              className={`w-full h-[54px] border px-4 rounded-xl text-base text-gray-900 bg-white ${
                fullNameError
                  ? 'border-red-500'
                  : isNameFocused
                  ? 'border-[#54A312]'
                  : 'border-gray-200'
              }`}
            />
            {fullNameError ? (
              <Text className="text-red-500 text-xs px-1 pt-1 font-medium">
                {fullNameError}
              </Text>
            ) : null}
          </View>

          {/* Phone Number Row: Country Code + Phone Input */}
          <View>
            <View className="flex-row items-center gap-3">
              {/* Country Code Input */}
              <TextInput
                placeholder="+880"
                placeholderTextColor="#9CA3AF"
                value={countryCode}
                onChangeText={setCountryCode}
                keyboardType="phone-pad"
                onFocus={() => setIsCodeFocused(true)}
                onBlur={() => setIsCodeFocused(false)}
                className={`w-[75px] h-[54px] border px-2 text-center rounded-xl text-base text-gray-900 bg-white ${
                  isCodeFocused ? 'border-[#54A312]' : 'border-gray-200'
                }`}
              />

              {/* Phone Number Input */}
              <TextInput
                placeholder="phone number"
                placeholderTextColor="#9CA3AF"
                value={phoneNumber}
                onChangeText={text => {
                  setPhoneNumber(text);
                  if (phoneError) setPhoneError('');
                }}
                keyboardType="phone-pad"
                onFocus={() => setIsPhoneFocused(true)}
                onBlur={() => setIsPhoneFocused(false)}
                className={`flex-1 h-[54px] border px-4 rounded-xl text-base text-gray-900 bg-white ${
                  phoneError
                    ? 'border-red-500'
                    : isPhoneFocused
                    ? 'border-[#54A312]'
                    : 'border-gray-200'
                }`}
              />
            </View>
            {phoneError ? (
              <Text className="text-red-500 text-xs px-1 pt-1 font-medium">
                {phoneError}
              </Text>
            ) : null}
          </View>

          {/* Date of Birth Input */}
          <View>
            <TextInput
              placeholder="date of birth"
              placeholderTextColor="#9CA3AF"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              onFocus={() => setIsDobFocused(true)}
              onBlur={() => setIsDobFocused(false)}
              className={`w-full h-[54px] border px-4 rounded-xl text-base text-gray-900 bg-white ${
                isDobFocused ? 'border-[#54A312]' : 'border-gray-200'
              }`}
            />
          </View>

          {/* Address Input with Chevron */}
          <View className="relative justify-center">
            <TextInput
              placeholder="Address"
              placeholderTextColor="#9CA3AF"
              value={address}
              onChangeText={setAddress}
              onFocus={() => setIsAddressFocused(true)}
              onBlur={() => setIsAddressFocused(false)}
              className={`w-full h-[54px] border px-4 pr-11 rounded-xl text-base text-gray-900 bg-white ${
                isAddressFocused ? 'border-[#54A312]' : 'border-gray-200'
              }`}
            />
          </View>
        </View>

        {/* Bottom Section: Continue Button */}
        <View className="flex gap-3 mt-4">
          <Pressable
            onPress={handleContinue}
            className="w-full h-[54px] bg-[#54A312] rounded-xl justify-center items-center active:opacity-85"
          >
            <Text className="text-lg text-white font-bold">Continue</Text>
          </Pressable>
        </View>
      </View>
    </AuthLayout>
  );
}
