import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { router, useNavigation, useRouter } from "expo-router";
import { COLORS, SIZES } from "../../constants";
import Spinner from "react-native-loading-spinner-overlay";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setIsSubmited(true);

    if (!email || !password) {
      Alert.alert("Please fill in all fields");
      return;
    }
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        router.push("/user");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        Alert.alert("Error", error.message.replace(RegExp("Firebase: "), ""));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Spinner visible={loading} textStyle={{ color: "#fff" }} />
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
          </View>
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View style={styles.loginForm}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    isSubmited && !email ? styles.inputError : null,
                  ]}
                  placeholder="Email"
                  placeholderTextColor={COLORS.mediumGray}
                  value={email}
                  onChangeText={setEmail}
                  onSubmitEditing={() => {
                    this.secondTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    isSubmited && !password ? styles.inputError : null,
                  ]}
                  placeholder="Password"
                  placeholderTextColor={COLORS.mediumGray}
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  ref={(input) => {
                    this.secondTextInput = input;
                  }}
                />
              </View>
              <TouchableOpacity
                style={[styles.btn, styles.btnContainer]}
                onPress={handleLogin}
              >
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
              <View style={styles.signupField}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity>
                  <Text
                    style={styles.signupBtn}
                    onPress={() => router.push("/registration")}
                  >
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

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
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
});
