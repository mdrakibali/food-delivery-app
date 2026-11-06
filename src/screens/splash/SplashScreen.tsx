import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreenList } from '../../navigation/types';
import BurgerSplahScreen from './BurgerSplahScreen';
import ChefSplahScreen from './ChefSplahScreen';
import DeliverySplahScreen from './DeliverySplahScreen';
import MainSplahScreen from './MainSplahScreen';

const Stack = createNativeStackNavigator<SplashScreenList>();
export default function SplashScreen() {
  return (
    <Stack.Navigator
      initialRouteName="MainSplahScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="MainSplahScreen" component={MainSplahScreen} />
      <Stack.Screen name="ChefSplahScreen" component={ChefSplahScreen} />
      <Stack.Screen
        name="DeliverySplahScreen"
        component={DeliverySplahScreen}
      />
      <Stack.Screen name="BurgerSplahScreen" component={BurgerSplahScreen} />
    </Stack.Navigator>
  );
}
