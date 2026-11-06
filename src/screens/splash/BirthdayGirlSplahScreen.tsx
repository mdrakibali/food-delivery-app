import React from 'react';
import { Image, Text, View } from 'react-native';
import SplashCommonScreen from './Common';

export default function BirthdayGirlSplahScreen() {
  return (
    <SplashCommonScreen>
      <Image
        source={require('../../assets/images/splash/birthday-girl.png')}
        className="w-[474px] h-[474px]"
      />
      <View>
        <Text className="text-5xl font-extrabold text-center text-gray-900 pb-3">
          We’re the besties of birthday peoples
        </Text>
        <Text className="text-base text-gray-500 text-center">
          We send cakes to our plus members, (only one cake per person)
        </Text>
      </View>
    </SplashCommonScreen>
  );
}
