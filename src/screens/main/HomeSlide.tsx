import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function HomeSlide() {
  return (
    <View className="w-full mt-4 relative">
      {/* Background Image (Absolute positioned) */}
      <Image
        source={require('../../assets/images/home/slide.png')}
        className="w-full h-[140px]"
      />
      <Text className="text-[#363A33] absolute top-4 left-4 text-3xl font-bold">
        35% OFF on{'\n'}Burgers
      </Text>
      <Pressable className="absolute bottom-4 left-4 bg-[#54A312] px-5 py-3 rounded-lg">
        <Text className="text-white font-bold">Order Now</Text>
      </Pressable>
    </View>
  );
}
