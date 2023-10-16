import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Balance = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.username}>Hi, Danuja</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.total}>RS 1000.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Balance;
