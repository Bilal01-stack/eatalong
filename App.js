import * as React from "react";
import { View, Text, Button, Image, StyleSheet, logoSize } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/login";
import { Signup } from "./src/screens/signup";
import { Profile } from "./src/screens/profile";

function HomeScreen({ navigation }) {
  const go = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={[
            styles.logo,
            logoSize && { width: logoSize.width, height: logoSize.height },
          ]}
          source={require("./src/accest/images/download.png")}
        />
      </View>
      <View>
        <Button title="press" onPress={go} />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  // logo: {
  //   // width: "100%",
  //   // height: "100%",
  //   aspectRatio: 1,
  //   marginTop: 200,
  // },
});
