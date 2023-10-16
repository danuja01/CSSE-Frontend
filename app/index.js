import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text } from "react-native";

import Home from "./home";
import SavedCards from "./saved-cards";
import Scan from "./qr-scanner/qr";
import QrPage from "./qr";

const Tab = createBottomTabNavigator();

const Payment = () => {
  return (
    <View>
      <Text>Payment</Text>
    </View>
  );
};

const History = () => {
  return (
    <View>
      <Text>History</Text>
    </View>
  );
};

export default function Page() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Scan}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SavedCards"
        component={SavedCards}
        options={{
          tabBarLabel: "Saved Cards",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
