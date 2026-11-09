import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Apple, Mail } from 'lucide-react-native';
import { FacebookIcon, GoogleIcon } from '../../components/common/SocialIcons';
import type { RootStackScreenProps } from '../../navigation/types';

export default function WelcomeScreen({ navigation }: RootStackScreenProps<'Welcome'>) {
  const handleNavigateToAuth = () => {
    // Login Screen (Auth) e niye jabe
    navigation.replace('Auth', { screen: 'Login' });
  };

  return (
    <View className="w-full h-full bg-white flex justify-between items-center px-6 py-14 space-y-6">
      {/* Top Logo */}
      <Image
        source={require('../../assets/images/logo/sub-logo.png')}
        className="w-[70px] h-[24px]"
        resizeMode="contain"
      />

      {/* Center Burger Image */}
      <Image
        source={require('../../assets/images/splash/burger.png')}
        className="w-[474px] h-[474px] max-w-full max-h-[340px]"
        resizeMode="contain"
      />

      {/* Heading Title */}
      <Text className="text-4xl font-extrabold text-center text-gray-900 leading-tight">
        Join to get the delicious quizines!
      </Text>

      {/* Login & "Or" Section */}
      <View className="w-full">
        {/* Continue with Apple Button */}
        <Pressable
          onPress={handleNavigateToAuth}
          className="w-full bg-[#5EAD1D] h-[52px] rounded-xl flex-row justify-center items-center gap-x-2 active:opacity-80"
        >
          <Apple size={20} color="white" />
          <Text className="text-white text-base font-bold">
            Continue with Apple
          </Text>
        </Pressable>

        {/* Beautiful "─── Or ───" Divider */}
        <View className="flex-row items-center justify-center my-3 w-full">
          <View className="flex-1 h-[1px] bg-gray-200" />
          <Text className="px-4 text-gray-400 font-medium text-sm">Or</Text>
          <View className="flex-1 h-[1px] bg-gray-200" />
        </View>

        {/* Social Buttons Row (Google, Facebook, Email) */}
        <View className="flex flex-row justify-between items-center gap-x-2 w-full">
          <Pressable
            onPress={handleNavigateToAuth}
            className="flex-1 h-[52px] rounded-xl bg-[#ECF1E8] flex-row justify-center items-center gap-x-1.5 active:opacity-80"
          >
            <GoogleIcon size={18} />
            <Text className="font-bold text-[#5EAD1D] text-xs">
              Google
            </Text>
          </Pressable>

          <Pressable
            onPress={handleNavigateToAuth}
            className="flex-1 h-[52px] rounded-xl bg-[#ECF1E8] flex-row justify-center items-center gap-x-1.5 active:opacity-80"
          >
            <FacebookIcon size={18} />
            <Text className="font-bold text-[#5EAD1D] text-xs">
              Facebook
            </Text>
          </Pressable>

          <Pressable
            onPress={handleNavigateToAuth}
            className="flex-1 h-[52px] rounded-xl bg-[#ECF1E8] flex-row justify-center items-center gap-x-1.5 active:opacity-80"
          >
            <Mail size={18} color="#5EAD1D" />
            <Text className="font-bold text-[#5EAD1D] text-xs">
              Email
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

