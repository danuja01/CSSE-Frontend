import { Stack } from "expo-router";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function QrPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/Qr.png")}
            resizeMode="contain"
            style={styles.headerIcon}
          />
          <Text style={styles.title}>Use Token QR</Text>
        </View>
        <View style={styles.qrContainer}>
          <Text style={styles.qrCaption}>Show this QR code to conductor</Text>
          <Image
            source={require("../../assets/images/QRcode.png")}
            resizeMode="contain"
            style={styles.qrCode}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Image
              source={require("../../assets/images/SaveIcon.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 20,
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "ABeeZee-Regular",
  },
  qrContainer: {
    marginVertical: 60,
    alignItems: "center",
  },
  qrCaption: {
    color: "#53668E",
    fontSize: 16,
    marginVertical: 10,
    marginBottom: 30,
    fontFamily: "ABeeZee-Regular",
  },
  qrCode: {
    width: 300,
    height: 300,
  },
  btnContainer: {
    alignItems: "center",
  },
  btn: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: "#ffffff",
    shadowOpacity: 0.07,
    elevation: 5,
  },
});
