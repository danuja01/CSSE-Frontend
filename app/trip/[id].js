import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  getDatabase,
  ref,
  onValue,
  push,
  set
} from "firebase/database";
import { db } from "../../firebase/config";
import { auth } from '../../firebase/config';
import { useRoute } from '@react-navigation/native';
import { Stack , useRouter } from "expo-router";

export default function SavedCards() {
  const route = useRoute();
  const router = useRouter();
  const { id } = route.params;

  const userId = auth.currentUser.uid;
  const [history, sethistory] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const fetchhistory = () => {
    const cardRef = ref(db, `triphistory/${userId}/${id}`);
    onValue(cardRef, (snapshot) => {
      const cardsData = snapshot.val();
      if (cardsData) {
        const cardsArray = Object.entries(cardsData).map(([key, value]) => ({
          ...value,
        }));
        sethistory(cardsData);
      } else {
        sethistory([]);
      }
    });
  };

  useEffect(() => {
    fetchhistory();
  }, []);

  const handleEndTrip = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    setShowPopup(false);
    router.push(`/ticketprice/${id}`);
    // Implement your logic here when Confirm is clicked
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Trip</Text>
        </View>
        <View style={styles.departContainer}>
        <View style={styles.departLocation}>
            <View style={styles.departlabelCover}>
              <Text style={styles.departLabel}>Depart</Text>
            </View>
            <Text style={styles.departValue}>{history.endPoint}</Text>
          </View>
          <View style={styles.departTime}>
            <View style={styles.timeLabelCover}>
              <Text style={styles.timeLabel}>Time</Text>
            </View>
            <Text style={styles.departValue}>{history.time}</Text>
          </View>
        </View>
        <View style={[styles.departContainer, { marginTop: 20 }]}>
          <Text style={styles.bTitle}>Bus Details</Text>
          <Image
            style={styles.busImg}
            source={require("../../assets/images/bus.png")}
          />
          <Text style={styles.busModel}>Lanka Laylend</Text>
          <View style={styles.busDetailContainer}>
            <View style={styles.busRoute}>
              <Image
                source={require("../../assets/images/location.png")}
                style={styles.busRouteIcon}
              />
              <Text style={styles.route}>{history.startPoint}-{history.endPoint}</Text>
            </View>
            <Text style={styles.busNumber}>NA-1345</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleEndTrip}>
            <Text style={styles.btnText}>End Trip</Text>
          </TouchableOpacity>
          {/* Popup */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showPopup}
            onRequestClose={() => {
              setShowPopup(false);
            }}
          >
            <View style={styles.popupContainer}>
              <View style={styles.popupContent}>
                <Text style={styles.popupTitle}>Trip Details</Text>
                  <View style={styles.historyItem}>
                    <Text style={styles.historyLabel}>Started Point</Text>
                    <Text style={styles.historyValue}>{history.startPoint}</Text>
                  </View>
                  <View style={styles.historyItem}>
                    <Text style={styles.historyLabel}>Ended Point</Text>
                    <Text style={styles.historyValue}>{history.endPoint}</Text>
                  </View>
                  <View style={styles.historyItem}>
                    <Text style={styles.historyLabel}>Time</Text>
                    <Text style={styles.historyValue}>{history.time}</Text>
                  </View>
                  <View style={styles.historyItem}>
                    <Text style={styles.historyLabel}>Amount</Text>
                    <Text style={styles.historyLabel}>RS.{history.fair}</Text>
                  </View>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleConfirm}
                >
                  <Text style={styles.confirmButtonText}>Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  popupTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
  historyLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  historyValue: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#135EF2",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "ABeeZee-Regular",
  },
  departContainer: {
    backgroundColor: "#135EF22F",
    borderRadius: 22,
    padding: 24,
  },
  departLocation: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  departlabelCover: {
    backgroundColor: "#135EF2",
    borderRadius: 10,
    padding: 10,
  },
  departLabel: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  departTime: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  timeLabelCover: {
    backgroundColor: "#C54CD9",
    borderRadius: 10,
    padding: 10,
    width: 74,
  },
  timeLabel: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  departValue: {
    fontSize: 16,
    color: "#000000",
  },
  bTitle: {
    fontSize: 14,
    color: "#00000080",
  },
  busImg: {
    width: "100%",
    height: 190,
  },
  busModel: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "bold",
    marginTop: 20,
  },
  busDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  busRoute: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  busRouteIcon: {
    width: 10,
    height: 10,
  },
  route: {
    fontSize: 16,
    color: "#00000080",
  },
  busNumber: {
    fontSize: 16,
    color: "#000000",
  },
  button: {
    backgroundColor: "#135EF2",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  btnText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
