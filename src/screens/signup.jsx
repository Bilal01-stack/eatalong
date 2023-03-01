import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

function Signup({ route }) {
  const { data } = route.params;
  console.log("Name:", data.name);
  return (
    <View>
      <Text>Name: {data.name}</Text>
      <Text>Age: {data.age}</Text>
      <Text>City: {data.city}</Text>
      <Text>Country: {data.country}</Text>
      <Text>Password: {data.password}</Text>
    </View>
  );
}

export { Signup };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#344e41",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// function Signupp({ route }) {
//   const { data } = route.params;
//   alert(data);
//   // render the data as needed
// }
// const onGoPress = () => {
//   navigation.navigate("Profile");
// };
// return (
//   // <View style={styles.container}>
//   //   <Button title="Singup Page" onPress={onGoPress} />
//   // </View>
// );
//}
