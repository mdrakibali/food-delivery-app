import { Camera, Image as ImageIcon, Trash2, User } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, TextInput, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import type { AuthStackScreenProps } from '../../navigation/types';
import AuthLayout from './AuthLayout';

export default function CreateProfileScreen({
  navigation,
}: AuthStackScreenProps<'CreateProfile'>) {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const [isPickerModalVisible, setIsPickerModalVisible] =
    useState<boolean>(false);

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

  // Take photo from Camera with circular crop
  const handleCameraCapture = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0.8,
      mediaType: 'photo',
    })
      .then(image => {
        setAvatarUri(image.path);
        setIsPickerModalVisible(false);
      })
      .catch(err => {
        if (err.code !== 'E_PICKER_CANCELLED') {
          console.log('Camera error:', err);
        }
      });
  };

  // Choose photo from Gallery with circular crop
  const handleGalleryPick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0.8,
      mediaType: 'photo',
    })
      .then(image => {
        setAvatarUri(image.path);
        setIsPickerModalVisible(false);
      })
      .catch(err => {
        if (err.code !== 'E_PICKER_CANCELLED') {
          console.log('Gallery picker error:', err);
        }
      });
  };

  // Remove current photo
  const handleRemovePhoto = () => {
    setAvatarUri(null);
    setIsPickerModalVisible(false);
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
                onPress={() => setIsPickerModalVisible(true)}
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
                onPress={() => setIsPickerModalVisible(true)}
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
                placeholder="Enter your phone number"
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
              placeholder="Enter your date of birth"
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
              placeholder="Enter your address"
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

      {/* Profile Photo Bottom Sheet Modal */}
      <Modal
        visible={isPickerModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsPickerModalVisible(false)}
      >
        <Pressable
          className="flex-1 bg-black/50 justify-end"
          onPress={() => setIsPickerModalVisible(false)}
        >
          <Pressable
            className="bg-white rounded-t-3xl px-6 pt-3 pb-8"
            onPress={e => e.stopPropagation()}
          >
            {/* Drag Handle Indicator */}
            <View className="w-12 h-1.5 bg-gray-300 rounded-full self-center mb-4" />

            <Text className="text-xl font-bold text-gray-900">
              Profile Photo
            </Text>
            <Text className="text-sm text-gray-500 mt-0.5 mb-5">
              Choose an option to update your profile photo
            </Text>

            {/* Options */}
            <View className="gap-3">
              {/* Camera Option */}
              <Pressable
                onPress={handleCameraCapture}
                className="flex-row items-center gap-3.5 p-3 rounded-2xl bg-gray-50 active:bg-gray-100"
              >
                <View className="w-11 h-11 rounded-xl bg-[#ECF1E8] justify-center items-center">
                  <Camera size={22} color="#54A312" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-800">
                    Take Photo
                  </Text>
                  <Text className="text-xs text-gray-500">
                    Use camera to take a new picture
                  </Text>
                </View>
              </Pressable>

              {/* Gallery Option */}
              <Pressable
                onPress={handleGalleryPick}
                className="flex-row items-center gap-3.5 p-3 rounded-2xl bg-gray-50 active:bg-gray-100"
              >
                <View className="w-11 h-11 rounded-xl bg-[#ECF1E8] justify-center items-center">
                  <ImageIcon size={22} color="#54A312" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-800">
                    Choose from Gallery
                  </Text>
                  <Text className="text-xs text-gray-500">
                    Select from your photos library
                  </Text>
                </View>
              </Pressable>

              {/* Remove Photo (Only if avatarUri is set) */}
              {avatarUri ? (
                <Pressable
                  onPress={handleRemovePhoto}
                  className="flex-row items-center gap-3.5 p-3 rounded-2xl bg-red-50/50 active:bg-red-50"
                >
                  <View className="w-11 h-11 rounded-xl bg-red-100 justify-center items-center">
                    <Trash2 size={22} color="#EF4444" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-red-500">
                      Remove Photo
                    </Text>
                    <Text className="text-xs text-gray-500">
                      Delete your current profile picture
                    </Text>
                  </View>
                </Pressable>
              ) : null}
            </View>

            {/* Cancel Button */}
            <Pressable
              onPress={() => setIsPickerModalVisible(false)}
              className="w-full h-[50px] bg-gray-100 rounded-xl justify-center items-center mt-4 active:opacity-80"
            >
              <Text className="text-base font-semibold text-gray-700">
                Cancel
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </AuthLayout>
  );
}
