import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";

const NewCard = ({
  isModalVisible,
  setIsModalVisible,
  formData,
  handleInputChange,
  handleAddNewCard,
}) => {
  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.overlay} />
          <KeyboardAvoidingView
            behavior="padding"
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <ScrollView
              style={{ width: "100%" }}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.modalContent}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "red",
                    left: 10,
                    top: 10,
                    position: "absolute",
                  }}
                >
                  * required fields
                </Text>
                <View style={styles.formContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="NickName"
                    value={formData.nickname}
                    onChangeText={(text) => handleInputChange("nickname", text)}
                    placeholderTextColor={COLORS.mediumGray}
                    onSubmitEditing={() => {
                      this.secondTextInput.focus();
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChangeText={(text) =>
                      handleInputChange("cardNumber", text)
                    }
                    placeholderTextColor={COLORS.mediumGray}
                    ref={(input) => {
                      this.secondTextInput = input;
                    }}
                    onSubmitEditing={() => {
                      this.thirdTextInput.focus();
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Holder's Name"
                    value={formData.holdersName}
                    onChangeText={(text) =>
                      handleInputChange("holdersName", text)
                    }
                    placeholderTextColor={COLORS.mediumGray}
                    ref={(input) => {
                      this.thirdTextInput = input;
                    }}
                    onSubmitEditing={() => {
                      this.fourthTextInput.focus();
                    }}
                  />
                  <View style={styles.expireDateContainer}>
                    <TextInput
                      style={[styles.input, styles.halfInput]}
                      placeholder="Month"
                      value={formData.month}
                      onChangeText={(text) => handleInputChange("month", text)}
                      placeholderTextColor={COLORS.mediumGray}
                      ref={(input) => {
                        this.fourthTextInput = input;
                      }}
                      onSubmitEditing={() => {
                        this.fifthTextInput.focus();
                      }}
                    />
                    <TextInput
                      style={[styles.input, styles.halfInput]}
                      placeholder="Year"
                      value={formData.year}
                      onChangeText={(text) => handleInputChange("year", text)}
                      placeholderTextColor={COLORS.mediumGray}
                      ref={(input) => {
                        this.fifthTextInput = input;
                      }}
                      onSubmitEditing={() => {
                        this.sixthTextInput.focus();
                      }}
                    />
                  </View>

                  <TextInput
                    style={styles.input}
                    placeholder="CVV"
                    value={formData.cvv}
                    onChangeText={(text) => handleInputChange("cvv", text)}
                    placeholderTextColor={COLORS.mediumGray}
                    ref={(input) => (this.sixthTextInput = input)}
                  />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={handleAddNewCard}
                  >
                    <Text style={styles.btnText}>SUBMIT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    marginTop: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalContent: {
    width: "88%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 22,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "ABeeZee-Regular",
  },
  input: {
    fontSize: 16,
    backgroundColor: "#DCDCDC3F",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    width: "100%",
  },
  expireDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    gap: 15,
  },
  halfInput: {
    flex: 1,
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
    padding: 15,
    borderRadius: 20,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
});
