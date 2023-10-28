import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SearchBar from "../../components/searchbar";
import CardModel from "../../components/card-model";
import { ScrollView } from "react-native-gesture-handler";
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import { db } from "../../firebase/config"; // Import your Firebase config

export default function SavedCards() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    nickname: "",
    cardNumber: "",
    holdersName: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [cards, setCards] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleAddNewCard = () => {
    const cardDetails = {
      nickname: formData.nickname,
      cardNumber: formData.cardNumber,
      holdersName: formData.holdersName,
      month: formData.month,
      year: formData.year,
      cvv: formData.cvv,
    };

    try {
      const cardRef = ref(db, "SavedCards");
      const newCardRef = push(cardRef); 
      set(newCardRef, cardDetails);
      setIsModalVisible(false);
      console.log("Card details saved successfully!");

      setFormData({
        nickname: "",
        cardNumber: "",
        holdersName: "",
        month: "",
        year: "",
        cvv: "",
      });
    } catch (error) {
      console.error("Error saving card details:", error);
    }
  };

  const fetchCards = () => {
    const cardRef = ref(db, "SavedCards");

    onValue(cardRef, (snapshot) => {
      const cardsData = snapshot.val();
      if (cardsData) {
        const cardsArray = Object.entries(cardsData).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setCards(cardsArray);
      } else {
        setCards([]);
      }
    });
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View>
              <SearchBar />
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Cards</Text>
                <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                  <Text style={styles.headerBtn}>
                    {"+ Add New Cards".toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {cards.map((card) => (
                  <CardModel
                    key={card.id}
                    cardNumber={card.cardNumber}
                    holdersName={card.holdersName}
                    month={card.month}
                    year={card.year}
                    nickname={card.nickname}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={isModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
              <View style={styles.overlay} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Card</Text>
              <TextInput
                style={styles.input}
                placeholder="NickName"
                value={formData.nickname}
                onChangeText={(text) => handleInputChange("nickname", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                value={formData.cardNumber}
                onChangeText={(text) => handleInputChange("cardNumber", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Holder's Name"
                value={formData.holdersName}
                onChangeText={(text) => handleInputChange("holdersName", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Month"
                value={formData.month}
                onChangeText={(text) => handleInputChange("month", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Year"
                value={formData.year}
                onChangeText={(text) => handleInputChange("year", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                value={formData.cvv}
                onChangeText={(text) => handleInputChange("cvv", text)}
              />
              <TouchableOpacity onPress={handleAddNewCard}>
                <Text style={styles.modalBtn}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginBottom: 90,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "ABeeZee-Regular",
  },
  headerBtn: {
    fontSize: 14,
    color: "#135EF2",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "ABeeZee-Regular",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalBtn: {
    fontSize: 16,
    color: "#135EF2",
    marginTop: 10,
  },
});
