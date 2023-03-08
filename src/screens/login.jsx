import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Button,
} from "react-native";

function Login({ navigation }) {
  const nameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const passwordRef = useRef();

  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

  // requestPermission();
  const [imageUri, setImageUri] = useState();
  const [videoUri, setVideoUri] = useState();
  const openGallery = () => {
    ImagePicker.getMediaLibraryPermissionsAsync().then((response) => {
      console.log("permission granted");
    });

    ImagePicker.launchImageLibraryAsync({
      quality: 0.5,
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    })
      .then((response) => {
        if (response.uri !== undefined) {
          setVideoUri(response.uri);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  function handleSubmit() {
    const data = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
      password: passwordRef.current.value,
    };
    console.log("Name:", nameRef.current.value);
    console.log("Age:", ageRef.current.value);
    console.log("City:", cityRef.current.value);
    console.log("Country:", countryRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Data:", data);
    navigation.navigate("Signup", { data });
  }

  useEffect(() => {
    checkValidForm();
  }, [name, age, city, country, password, confirmPassword]);

  const checkValidForm = () => {
    if (name === "") {
      setIsValid(false);
      return;
    }
    if (age === "") {
      setIsValid(false);
      return;
    }
    if (city === "") {
      setIsValid(false);
      return;
    }
    if (country === "") {
      setIsValid(false);
      return;
    }
    if (password === "") {
      setIsValid(false);
      return;
    }
    if (confirmPassword === "") {
      setIsValid(false);
      return;
    }
    if (password !== confirmPassword) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={styles.text}>Enter Your Name</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your Name"
            ref={nameRef}
            onChangeText={setName}
          />
          <Text style={styles.text}>Enter Your Age</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your Age"
            ref={ageRef}
            onChangeText={setAge}
          />
          <Text style={styles.text}>Enter Your City Name</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your City Name"
            ref={cityRef}
            onChangeText={setCity}
          />
          <Text style={styles.text}>Enter Your Country Name</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your Country Name"
            ref={countryRef}
            onChangeText={setCountry}
          />
          <Text style={styles.text}>Enter Your Password</Text>
          <TextInput
            style={styles.field}
            placeholder="Enter Your Password"
            secureTextEntry={true}
            ref={passwordRef}
            onChangeText={setPassword}
          />
          <Text style={styles.text}>Confirm Password</Text>
          <TextInput
            style={styles.field}
            placeholder="Confirm Password"
            secureTextEntry={true}
            ref={passwordRef}
            onChangeText={setConfirmPassword}
          />
        </View>
        {videoUri !== undefined ? (
          <Video
            style={{ width: 300, height: 300 }}
            source={{ uri: videoUri }}
            useNativeControls={true}
          />
        ) : (
          <View />
        )}
        <View style={styles.bb}>
          <TouchableOpacity onPress={handleSubmit} disabled={isValid === false}>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title={"Open Gallery"} onPress={openGallery} />
    </ScrollView>
  );
}
export { Login };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bde0fe",
    paddingTop: 50,

    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    flex: 0.8,
    marginTop: 50,
    marginHorizontal: 20,
  },
  field: {
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    marginVertical: 20,
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  submit: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    backgroundColor: "green",
    paddingVertical: 8,
    marginTop: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  bb: {
    flex: 0.2,

    alignItems: "center",
  },
  camera: {
    widt: 200,
    height: 400,
  },
  tex: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 30,
    textAlign: "center",
    color: "green",
  },
  video: {
    width: 400,
    height: 400,
  },
});
