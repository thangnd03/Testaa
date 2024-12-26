// This file is App.tsx
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { WebView, navigationRef } from "./src/bridge";
import { RootStackParamList } from "./src/navigation";

function WebViewHomeScreen() {
  return (
    <View style={{ height: "100%" }}>
      <WebView
        source={{
          uri: "https://3679-2405-4802-1d1e-1010-24d9-11ef-b5d4-7d6b.ngrok-free.app",
        }}
        style={{ height: "100%", flex: 1, width: "100%" }}
      />
    </View>
  );
}

function UserInfoScreen({
  navigation,
  route,
}) {
  const { userId } = route.params;

  return (
    <View style={{ height: "100%" }}>
      <Text>UserId: {userId}</Text>

      <Button
        title="New WebView"
        onPress={() => navigation.push("WebViewHome")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="WebViewHome">
        <Stack.Screen name="WebViewHome" component={WebViewHomeScreen} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;