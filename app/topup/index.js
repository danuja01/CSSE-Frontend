import { Stack } from "expo-router";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, push, set , get } from "firebase/database";
import { db } from "../../firebase/config";
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { MyTabs } from "../../components/common/bottomNav";
import { auth } from '../../firebase/config';

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
  const [selectedCard, setSelectedCard] = useState(null);
  const [enteredAmount, setEnteredAmount] = useState("");
  const [userData, setUserData] = useState({});

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

    // Assuming you have a user ID
const userId = "u3B0z8mcFUSTTbs3yeoLVqKjjvI2";

// Create a reference to the user's data
const userRef = ref(db, `users/${userId}`);

// Use get to retrieve the data
get(userRef).then((snapshot) => {
  if (snapshot.exists()) {
    const userData = snapshot.val();
    setUserData(userData.acc);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error("Error fetching data:", error);
});

const handleTopUp = () => {
  if (selectedCard && enteredAmount) {
    try {
      const user = auth.currentUser;

      // Assuming you have a user ID
      const userId = user.uid;
      const userRef = ref(db, `users/${userId}`);

      // Fetch user data
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const updatedAcc = parseFloat(userData.acc || 0) + parseFloat(enteredAmount);
          
          // Update user data with the new account balance
          set(userRef, { ...userData, acc: updatedAcc });

          setEnteredAmount("");
          console.log("User's acc updated successfully!");
        } else {
          console.error("No data available for this user");
        }
      }).catch((error) => {
        console.error("Error fetching user data:", error);
      });
    } catch (error) {
      console.error("Error updating user's acc:", error);
    }
  } else {
    console.error("Please select a card and enter the amount.");
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
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.container}>
        <View style={styles.MainHeader}>
          <Text style={styles.MainHeaderTitle}>Trip</Text>
        </View>
        <View style={styles.amountContainer}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.iconImg}
              source={require("../../assets/images/AmmountIcon.png")}
            />
            <Text style={styles.iconCaption}>Deposite Money</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text styles={styles.amountLabel}>Amount</Text>
            <TextInput
              style={styles.amount}
              placeholder="Enter Amount"
              value={enteredAmount}
              onChangeText={(text) => setEnteredAmount(text)}
            />
          </View>
        </View>
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
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Select a Card</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={styles.headerBtn}>{"+ Add New Cards".toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dropdownContainer}>
          <SelectDropdown
            buttonStyle={styles.dropdown}
            defaultButtonText="Select a Card"
            buttonTextStyle={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "left",
            }}
            renderDropdownIcon={() => {
              return (
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/images/dropdown.png")}
                />
              );
            }}
            dropdownIconPosition="right"
            dropdownStyle={styles.dropdownContent}
            data={cards.map(card => card.cardNumber)}
            onSelect={(selectedItem, index) => {
              setSelectedCard(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Amount (RS)</Text>
          <Text style={styles.totalAmount}>{userData}</Text>
        </View>
        <View
          style={{
            marginTop: 40,
            borderTopColor: "#0000001F",
            borderTopWidth: 1,
            paddingTop: 20,
          }}
        >
          <TouchableOpacity style={styles.btn} onPress={handleTopUp}>
            <Text style={styles.btnText}>Top Up Yourself</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    padding: 24,
  },
  MainHeader: {
    alignItems: "center",
    marginBottom: 25,
  },
  MainHeaderTitle: {
    fontSize: 24,
    fontFamily: "ABeeZee-Regular",
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
  amountContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginRight: 20,
    padding: 10,
    paddingVertical: 15,
    width: 80,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    shadowOpacity: 0.05,
    shadowRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  iconImg: {
    width: 25,
    height: 25,
    marginBottom: 10,
  },
  iconCaption: {
    fontSize: 14,
    fontFamily: "ABeeZee-Regular",
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    gap: 8,
  },
  amountLabel: {
    fontSize: 16,
    fontFamily: "ABeeZee-Regular",
    marginBottom: 10,
  },
  amount: {
    fontSize: 24,
    fontFamily: "ABeeZee-Regular",
    backgroundColor: "#DCDCDC",
    width: "100%",
    padding: 10,
    borderRadius: 15,
  },
  dropdownContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    shadowOpacity: 0.05,
    shadowRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  dropdown: {
    backgroundColor: "#135EF2",
    borderRadius: 15,
    padding: 10,
    paddingHorizontal: 20,
    width: "100%",
    color: "#ffffff",
  },
  dropdownContent: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderRadius: 15,
    shadowOpacity: 0.05,
    shadowRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  totalContainer: {
    backgroundColor: "#ffffff",
    marginTop: 20,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.07,
    shadowRadius: 20,
    padding: 20,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: "ABeeZee-Regular",
  },
  totalAmount: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    padding: 50,
    letterSpacing: 2,
  },
  btn: {
    backgroundColor: "#135EF2",
    borderRadius: 15,
    padding: 15,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
});
