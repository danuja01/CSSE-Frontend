import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/search.png")}
          style={styles.imagePlaceholder}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A8A8A8"
          onChange={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 55,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
  },
  imagePlaceholder: {
    marginRight: 10,
  },
  searchInput: {
    fontFamily: "ABeeZee-Regular",
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 10,
  },
});

export default SearchBar;
