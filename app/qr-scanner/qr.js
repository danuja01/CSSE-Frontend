import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Image,
  Modal,
  TextInput,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { SafeAreaView } from "react-native-safe-area-context";
import { getDatabase, ref, onValue, push, set , get } from "firebase/database";
import { db } from "../../firebase/config"; // Import your Firebase config
import { Stack } from "expo-router";
import { Camera } from "expo-camera";

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [stops, setstops] = useState("");
  const [userData, setUserData] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [userData1, setUserData1] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setstops(data);
    setModalVisible(true);
    setStartPoint(data);

    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`,
      "",
      [{ text: "OK", onPress: () => setScanned(false) }]
    );

    // Create a reference to the user's data
    const userRef = ref(db, `stops/${stops}`);

    // Use get to retrieve the data
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setUserData(userData.count);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
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

  const closeModal = () => {
    setModalVisible(false); // This sets the `modalVisible` state to `false`, hiding the modal.
    setStartPoint('');      // This resets the `startPoint` state to an empty string.
    setEndPoint('');        // This resets the `endPoint` state to an empty string.
  };

  const handleScan = () => {
    setModalVisible(false);
    const userRef1 = ref(db, `stops/${endPoint}`);

    // Use get to retrieve the data
    get(userRef1).then((snapshot) => {
      if (snapshot.exists()) {
        const userData1 = snapshot.val();
        setUserData1(userData1.count);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });

    console.log(userData1);
    console.log(userData);
  };

  const calculateFair = () => {
    const distance = userData1 - userData;
    return distance * 10;
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
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={closeModal}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TextInput
                    style={styles.input}
                    placeholder="Starting Point"
                    value={startPoint}
                    onChangeText={text => setStartPoint(text)}
                    editable={false}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Ending Point"
                    value={endPoint}
                    onChangeText={text => setEndPoint(text)}
                  />
                  <Button
                    title="Submit"
                    onPress={handleScan}
                  />
                </View>
              </View>
            </Modal>
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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
