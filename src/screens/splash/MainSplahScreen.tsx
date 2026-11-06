import { useEffect } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { SplashScreenProps } from '../../navigation/types';

function MainSplahScreen({ navigation }: SplashScreenProps<'MainSplahScreen'>) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ChefSplahScreen');
    }, 2000);
  });
  return (
    <View className="flex-1 items-center justify-center">
      <ImageBackground
        source={require('../../assets/images/splash/background.png')}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          source={require('../../assets/images/logo/logo.png')}
          className="w-[200px] h-[120px]"
        />
      </ImageBackground>
    </View>
  );
}

export default MainSplahScreen;
