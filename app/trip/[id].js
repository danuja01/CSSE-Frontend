import { Stack } from "expo-router";
import {React,useEffect ,useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import { db } from "../../firebase/config"; // Import your Firebase config
import { auth } from '../../firebase/config';
import { useRoute } from '@react-navigation/native';

export default function SavedCards() {
  const route = useRoute();
  const { id } = route.params;

  const userId = auth.currentUser.uid;
  const [history , sethistory] = useState([]);

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

  console.log(history);
  
  useEffect(() => {
    fetchhistory();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ header: () => null }} />
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>End Trip</Text>
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
