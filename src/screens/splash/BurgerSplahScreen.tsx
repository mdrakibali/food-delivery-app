import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function BurgerSplahScreen() {
  return (
    <View className="w-full h-full bg-white flex justify-between items-center px-6 py-20 space-y-20">
      <Image
        source={require('../../assets/images/logo/sub-logo.png')}
        className="w-[70px] h-[24px]"
      />
      <Image
        source={require('../../assets/images/splash/burger.png')}
        className="w-[474px] h-[474px]"
      />
      <Text className="text-5xl font-extrabold text-center text-gray-900  pb-3">
        Join to get the delicious quizines!
      </Text>
      d
      <View>
        <Pressable className="w-full bg-[#5EAD1D] h-[52px] rounded-lg">
          <Text className="text-white text-lg font-bold">
            Continue with Apple
          </Text>
        </Pressable>
        <Text>Or</Text>
        <View className="flex flex-row justify-between items-center gap-x-2">
          <Pressable className="w-full h-[52px] rounded-lg bg-[#ECF1E8] flex justify-center items-center">
            <Text className="font-bold text-[#5EAD1D] text-center py-3 ">
              Skip
            </Text>
          </Pressable>
          <Pressable className="w-full h-[52px] rounded-lg bg-[#ECF1E8] flex justify-center items-center">
            <Text className="font-bold text-[#5EAD1D] text-center py-3 ">
              Skip
            </Text>
          </Pressable>
          <Pressable className="w-full h-[52px] rounded-lg bg-[#ECF1E8] flex justify-center items-center">
            <Text className="font-bold text-[#5EAD1D] text-center py-3 ">
              Skip
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
