import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";

export default function Status() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.container}>
        <Text style={styles.requiredText}>
          *You have minimum required amount
        </Text>
        <View style={styles.main}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/green_tick.png")}
          />
          <Text style={styles.subtitle}>YOU ARE GOOD TO TRAVEL!</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button pressed")}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  requiredText: {
    color: "#2C64E3",
    paddingVertical: 10,
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    maxHeight: 460,
    borderRadius: 22,
    marginHorizontal: "auto",
    paddingVertical: 100,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 26,
    paddingHorizontal: 20,
    marginTop: 40,
    color: "#38434D",
    textAlign: "center",
  },
  button: {
    marginTop: 60,
    borderRadius: 22,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "ABeeZee-Regular",
  },
});
