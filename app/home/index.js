import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Balance from "../../components/balance";
import Services from "../../components/services";
import Transaction from "../../components/transaction";
import { db } from "../../firebase/config";
import { get, ref } from "firebase/database";

export default Home = () => {
  const router = useRouter();

  const getData = async () => {
    const snapshot = await get(ref(db, "names"));
    console.log(snapshot.val());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.container}>
        <Balance />
        <Services />
        <Transaction />
        <TouchableOpacity onPress={() => router.push("/trip")}>
          <Text>sasasa</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 5,
  },
  username: {
    color: "#000000",
    fontSize: 24,
    fontFamily: "ABeeZee-Regular",
  },
  balanceContainer: {
    backgroundColor: "#2C64E3",
    borderRadius: 22,
    padding: 24,
    marginVertical: 30,
  },
  balanceTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "AbhayaLibre-ExtraBold",
  },
  total: {
    color: "#ffffff",
    fontSize: 44,
    fontFamily: "AbhayaLibre-ExtraBold",
  },
});
