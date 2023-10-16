import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Image,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Camera } from "expo-camera";

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`,
      "",
      [{ text: "OK", onPress: () => setScanned(false) }]
    );
  };

  //handle flashlight
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <Camera
          flashMode={flash}
          style={styles.camera}
          type={Camera.Constants.Type.back}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

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
          <Text style={styles.title}>Scan QR</Text>
        </View>
        <View style={styles.qrContainer}>
          <Text style={styles.qrText}>
            Place an QR at the center of your camera and the QR will be
            automatically scanned
          </Text>
          {renderCamera()}
          <TouchableOpacity
            onPress={() =>
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off
              )
            }
            style={styles.qrTouchBtn}
          >
            <Image source={require("../../assets/images/flashlight.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#000000",
    padding: 10,
    paddingHorizontal: 50,
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
  cameraContainer: {
    width: "80%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  qrContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "#53668E",
    padding: 24,
    borderRadius: 22,
    opacity: 0.9,
  },
  qrText: {
    fontFamily: "ABeeZee-Regular",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#ffffff",
  },
  qrTouchBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
