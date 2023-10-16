import { Stack } from "expo-router";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { MyTabs } from "../../components/common/bottomNav";

export default function SavedCards() {
  const cards = ["4441", "2133", "2134", "2313"];

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
            <TextInput style={styles.amount} placeholder="Enter Amount" />
          </View>
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Select a Card</Text>
            <TouchableOpacity>
              <Text style={styles.headerBtn}>
                {"Add New Card".toUpperCase()}
              </Text>
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
            data={cards}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
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
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalAmount}>Rs. 1000.00</Text>
        </View>
        <View
          style={{
            marginTop: 40,
            borderTopColor: "#0000001F",
            borderTopWidth: 1,
            paddingTop: 20,
          }}
        >
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Top Up Yourself</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
