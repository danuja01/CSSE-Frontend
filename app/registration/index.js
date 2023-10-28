import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config"; // Make sure to import the auth object
import { Stack, router, useNavigation, useRouter } from "expo-router";
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import { COLORS, SIZES } from "../../constants";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    setIsSubmited(true);
    if (!email || !password) {
      Alert.alert("Please fill in all fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered successfully!", user);

        // Save user info to Firebase Realtime Database
        try {
          const userRef = ref(db, `users/${user.uid}`);
          set(userRef, {
            acc: 0,
          }).then(() => {
            Alert.alert("User registered successfully!");
            router.push("/login");
          });
        } catch (error) {
          console.error("Error saving user info to Realtime Database:", error);
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: COLORS.primary,
                fontFamily: "AbhayaLibre-Bold",
              }}
            >
              Transport Link
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                marginTop: SIZES.small,
                position: "absolute",
                top: 40,
              }}
            >
              Register
            </Text>
          </View>
          <KeyboardAvoidingView behavior="padding" style={styles.loginForm}>
            <View style={styles.loginForm}>
              <TextInput
                style={[
                  styles.input,
                  isSubmited && !email ? styles.inputError : null,
                ]}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor={COLORS.mediumGray}
                autoCapitalize="none"
              />
              <TextInput
                style={[
                  styles.input,
                  isSubmited && !password ? styles.inputError : null,
                ]}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor={COLORS.mediumGray}
              />

              <TouchableOpacity
                style={[styles.btn, styles.btnContainer]}
                title="Register"
                onPress={handleRegister}
              >
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  loginForm: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    padding: SIZES.large,
    marginBottom: SIZES.large,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    padding: SIZES.medium * 1.2,
    alignItems: "center",
  },
  btn: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  btnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  signupField: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SIZES.large,
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SIZES.large,
    position: "relative",
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default Registration;
