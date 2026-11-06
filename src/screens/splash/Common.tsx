import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
export default function SplashCommonScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="w-full h-full bg-white flex justify-between items-center px-6 py-20 space-y-20">
      <Image
        source={require('../../assets/images/logo/sub-logo.png')}
        className="w-[70px] h-[24px]"
      />
      {children}
      {/* Indector dots */}
      <View className="flex-row justify-center items-center gap-2 py-3">
        <View className="size-4 rounded-full bg-[#5EAD1D]" />
        <View className="size-4 rounded-full bg-[#ECF1E8]" />
        <View className="size-4 rounded-full bg-[#ECF1E8]" />
      </View>
      {/* Buttons */}
      <View className="w-full flex-row gap-2 justify-between items-center">
        <Pressable className="w-[98px] h-[52px] rounded-lg bg-[#ECF1E8] flex justify-center items-center">
          <Text className="font-bold text-[#5EAD1D] text-center py-3 ">
            Skip
          </Text>
        </Pressable>
        <Pressable className="flex-1 h-[52px] rounded-lg bg-[#5EAD1D] flex justify-center items-center">
          <Text className="font-bold text-white text-center py-3 ">Next</Text>
        </Pressable>
      </View>
    </View>
  );
}
