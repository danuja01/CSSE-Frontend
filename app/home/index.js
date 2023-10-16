import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import Balance from "../../components/balance";
import Services from "../../components/services";
import Transaction from "../../components/transaction";

export default Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.container}>
        <Balance />
        <Services />
        <Transaction />
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
