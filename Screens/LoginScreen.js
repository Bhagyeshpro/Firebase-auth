import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Regiesterd With : ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogIn = () => {
    auth.signInWithEmailAndPassword(email, password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Loged In With : ", user.email);
    });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#fff"
          // value={}
          onChangeText={(text) => setEmail(text)}
          style={[styles.input, styles.textInputStyles]}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#fff"
          // value={}
          onChangeText={(text) => setPassword(text)}
          style={[styles.input, styles.textInputStyles]}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogIn} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f8ff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 5,
  },
  textInputStyles: {
    color: "#fff",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
  buttonOutline: {
    backgroundColor: "white",
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontSize: 15,
    fontWeight: "700",
  },
});
