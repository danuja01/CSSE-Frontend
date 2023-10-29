import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { db  ,auth} from "../firebase/config"; // Import the Firebase database instance
import { useRoute } from '@react-navigation/native';
import { Stack , useRouter } from "expo-router";
import { getDatabase, ref, onValue, push, set , remove } from "firebase/database";

const CardModel = ({ key, cardNumber, holdersName, month, year, nickname , card }) => {

  const userId = auth.currentUser.uid;

  const handleDelete = () => {
      try {
        remove(ref(db, `SavedCards/${userId}/${card.id}`));
  
        console.log(`Card with ID ${key} deleted successfully.`);
        console.log("Card ID:", key);
      } catch (error) {
        console.error(`Error deleting review with ID ${key}:`, error);
      }
  };

  const handleUpdate = () => {
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <ImageBackground
          source={require("../assets/images/Card1.png")}
          style={styles.card}
          imageStyle={styles.backgroundImage}
        >
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <Text style={styles.nickName}>{nickname}</Text>
          <Text style={styles.number}>{cardNumber}</Text>
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.nameTag}>Name</Text>
              <Text style={styles.name}>{holdersName}</Text>
            </View>
            <View>
              <Text style={styles.expiryTag}>Expiry</Text>
              <Text style={styles.expiryDate}>{month}/{year}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  backgroundImage: {
    borderRadius: 10,
    overflow: "hidden",
  },
  nickName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  number: {
    fontSize: 25,
    textAlign: "center",
    letterSpacing: 4,
    marginVertical: 40,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameTag: {
    fontSize: 12,
    color: "#999999",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  expiryTag: {
    fontSize: 12,
    color: "#999999",
  },
  expiryDate: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CardModel;
