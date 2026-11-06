import { useNavigation, useRoutePath } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const screen = [
  {
    name: 'ChefSplahScreen',
  },
  {
    name: 'DeliverySplahScreen',
  },
  {
    name: 'BirthdayGirlSplahScreen',
  },
];
export default function SplashCommonScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigation();
  const path = useRoutePath();
  const isActive = screen.findIndex(item => item.name === path);

  const handleSkip = () => {
    navigate.navigate('BurgerSplahScreen');
  };

  const handleNavigate = () => {
    const nextScreen = screen[isActive + 1];
    if (nextScreen) {
      navigate.navigate(nextScreen.name);
    }
  };

  return (
    <View className="w-full h-full bg-white flex justify-between items-center px-6 py-20 space-y-20">
      <Image
        source={require('../../assets/images/logo/sub-logo.png')}
        className="w-[70px] h-[24px]"
      />
      {children}
      {/* Indector dots */}
      <View className="flex-row justify-center items-center gap-2 py-3">
        {screen.map((item, index) => (
          <View
            key={index}
            className={`size-4 rounded-full ${
              index === isActive ? 'bg-[#5EAD1D]' : 'bg-[#ECF1E8]'
            }`}
          />
        ))}
      </View>
      {/* Buttons */}
      <View className="w-full flex-row gap-2 justify-between items-center">
        <Pressable
          onPress={() => handleSkip()}
          className="w-[98px] h-[52px] rounded-lg bg-[#ECF1E8] flex justify-center items-center"
        >
          <Text className="font-bold text-[#5EAD1D] text-center py-3 ">
            Skip
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handleNavigate()}
          className="flex-1 h-[52px] rounded-lg bg-[#5EAD1D] flex justify-center items-center"
        >
          <Text className="font-bold text-white text-center py-3 ">Next</Text>
        </Pressable>
      </View>
    </View>
  );
}
