import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import type { SplashScreenProps } from '../../navigation/types';

function MainSplahScreen({ navigation }: SplashScreenProps<'MainSplahScreen'>) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ChefSplahScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center">
      {/* Background Image (Modern Replacement for deprecated ImageBackground) */}
      <Image
        source={require('../../assets/images/splash/background.png')}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      {/* Foreground Logo */}
      <Image
        source={require('../../assets/images/logo/logo.png')}
        className="w-[200px] h-[120px]"
        resizeMode="contain"
      />
    </View>
  );
}

export default MainSplahScreen;
