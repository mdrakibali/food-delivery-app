import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

function App(): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        {/* State Provider / Redux wrapper ekhane hobe */}
        {/* <Provider store={store}> */}

        {/* App er Root Navigation Container */}
        {/* <RootNavigator /> */}

        {/* Temporary Placeholder joto khon navigation na boshan */}
        <AppContentPlaceholder />

        {/* </Provider> */}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

// Temporary development placeholder (eta pore Navigation diye replace hobe)
import { Text, View } from 'react-native';
function AppContentPlaceholder() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-50">
      <Text className="text-2xl font-bold text-orange-600">
        Food Delivery App
      </Text>
      <Text className="text-sm text-zinc-500 mt-1">
        Architecture Ready for Production 🚀
      </Text>
    </View>
  );
}

export default App;
