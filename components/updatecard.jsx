import React from "react";
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
import { COLORS } from "../constants";

const Updatecard = ({
  isModalVisible,
  setIsModalVisible,
  formData,
  handleInputChange,
  handleUpdate,
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
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChangeText={(text) =>
                      handleInputChange("cardNumber", text)
                    }
                    placeholderTextColor={COLORS.mediumGray}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Holder's Name"
                    value={formData.holdersName}
                    onChangeText={(text) =>
                      handleInputChange("holdersName", text)
                    }
                    placeholderTextColor={COLORS.mediumGray}
                  />
                  <View style={styles.expireDateContainer}>
                    <TextInput
                      style={[styles.input, styles.halfInput]}
                      placeholder="Month"
                      value={formData.month}
                      onChangeText={(text) => handleInputChange("month", text)}
                      placeholderTextColor={COLORS.mediumGray}
                    />
                    <TextInput
                      style={[styles.input, styles.halfInput]}
                      placeholder="Year"
                      value={formData.year}
                      onChangeText={(text) => handleInputChange("year", text)}
                      placeholderTextColor={COLORS.mediumGray}
                    />
                  </View>

                  <TextInput
                    style={styles.input}
                    placeholder="CVV"
                    value={formData.cvv}
                    onChangeText={(text) => handleInputChange("cvv", text)}
                    placeholderTextColor={COLORS.mediumGray}
                  />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={handleUpdate}
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

export default Updatecard;
