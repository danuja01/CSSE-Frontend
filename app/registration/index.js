import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db } from "../../firebase/config"; // Make sure to import the auth object
import { router, useNavigation , useRouter} from 'expo-router';
import { getDatabase, ref, onValue, push, set } from "firebase/database";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const router = useRouter();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered successfully!", user);

        // Save user info to Firebase Realtime Database
        try {
          const userRef = ref(db, `users/${user.uid}`);
          set(userRef, {
            userId: user.uid,
            acc: 0,
          });
          console.log("User info saved to Realtime Database");
          router.push('/login');
        } catch (error) {
          console.error("Error saving user info to Realtime Database:", error);
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Registration;
