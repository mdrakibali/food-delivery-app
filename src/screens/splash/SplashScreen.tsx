import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import type { RootStackScreenProps } from '../../navigation/types';

export default function SplashScreen({ navigation }: RootStackScreenProps<'Splash'>) {
  useEffect(() => {
    // 2 second pore auto Onboarding screen e niye jabe
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center">
      {/* Background Image (Absolute positioned) */}
      <Image
        source={require('../../assets/images/splash/background.png')}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      {/* Center Logo */}
      <Image
        source={require('../../assets/images/logo/logo.png')}
        className="w-[200px] h-[120px]"
        resizeMode="contain"
      />
    </View>
  );
}
