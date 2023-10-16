import { Stack } from "expo-router";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../../components/searchbar";
import CardModel from "../../components/card-model";
import { ScrollView } from "react-native-gesture-handler";

export default function SavedCards() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.container}>
        <View>
          <SearchBar />
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Cards</Text>
            <TouchableOpacity>
              <Text style={styles.headerBtn}>
                {"+ Add New Cards".toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CardModel />
            <CardModel />
            <CardModel />
            <CardModel />
            <CardModel />
            <CardModel />
          </ScrollView>
        </View>
      </View>
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
});
