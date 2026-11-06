import React, { useEffect } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import type { SplashScreenProps } from '../../navigation/types';

function MainSplahScreen({ navigation }: SplashScreenProps<'MainSplahScreen'>) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ChefSplahScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center">
      <ImageBackground
        source={require('../../assets/images/splash/background.png')}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          source={require('../../assets/images/logo/logo.png')}
          className="w-[200px] h-[120px]"
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
  );
}

export default MainSplahScreen;
