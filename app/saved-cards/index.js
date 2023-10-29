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
import { auth } from "../../firebase/config";
import NewCard from "../../components/newCard";

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

  const userId = auth.currentUser.uid;

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
      const cardRef = ref(db, `SavedCards/${userId}`);
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
    const cardRef = ref(db, `SavedCards/${userId}`);
  
    onValue(cardRef, (snapshot) => {
      const cardsData = snapshot.val();
      if (cardsData) {
        const reviewsArray = Object.entries(cardsData).map(
          ([key, value]) => ({ ...value, id: key })
        );
        setCards(reviewsArray);
      } else {
        setCards([]); // Set cards to an empty array if there is no data
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
                    card={card}
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
        <NewCard
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          formData={formData}
          handleInputChange={handleInputChange}
          handleAddNewCard={handleAddNewCard}
        />
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
