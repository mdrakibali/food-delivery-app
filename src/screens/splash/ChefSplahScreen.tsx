import React from 'react';
import { Image, Text, View } from 'react-native';
import SplashCommonScreen from './Common';

export default function ChefSplahScreen() {
  return (
    <SplashCommonScreen>
      <Image
        source={require('../../assets/images/splash/chef.png')}
        className="w-[374px] h-[374px]"
      />
      <View>
        <Text className="text-4xl font-extrabold text-center text-gray-900 pb-3">
          Welcome to the most tastiest app
        </Text>
        <Text className="text-base text-gray-500 text-center">
          You know, this app is edible meaning you can eat it!
        </Text>
      </View>
    </SplashCommonScreen>
  );
}
