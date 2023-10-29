import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { db } from "../firebase/config";
import { get, ref , onValue} from "firebase/database";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

const Balance = () => {
  const [user , setUser] = useState(0);


  const userId = auth.currentUser.uid;

  const fetchuser = () => {
    const cardRef = ref(db, `users/${userId}`);
    onValue(cardRef, (snapshot) => {
      const cardsData = snapshot.val();
      if (cardsData) {
        const cardsArray = Object.entries(cardsData).map(([key, value]) => ({
          ...value,
        }));
        setUser(cardsData.acc);
      } else {
        setUser([]);
      }
    });
  };

  useEffect(() => {
    fetchuser();
  }, []);

  console.log(user);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.username}>Hi, Danuja</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.total}>RS {user}</Text>
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
