import React from 'react';
import { Image, Text, View } from 'react-native';
import SplashCommonScreen from './Common';

export default function DeliverySplahScreen() {
  return (
    <SplashCommonScreen>
      <Image
        source={require('../../assets/images/splash/delivery-man.png')}
        className="w-[474px] h-[474px]"
      />
      <View>
        <Text className="text-5xl font-extrabold text-center text-gray-900  pb-3">
          We use nitro on bicycles for delivery!
        </Text>
        <Text className="text-base text-gray-500 text-center">
          For very fast delivery we use nitro on bicycles, kidding, but we’re
          very fast.
        </Text>
      </View>
    </SplashCommonScreen>
  );
}
