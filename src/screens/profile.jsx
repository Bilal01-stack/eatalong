import * as React from "react";
import { Button, View, StyleSheet } from "react-native";

function Profile({ navigation }) {
  const onGoPress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Button title="Back To Home Form Profile Page" onPress={onGoPress} />
    </View>
  );
}

export { Profile };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06d6a0",
  },
});
