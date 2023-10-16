import React from "react";
import {Stack,useRouter} from "expo-router";
import { TouchableOpacity , SafeAreaView , View , Text} from "react-native";

export default function PAge() {
    const router = useRouter();
    return (
      <SafeAreaView>
        <Stack.Screen/>
        <View>
          <TouchableOpacity onPress={() => router.push("/savedcard")}>
            <Text>Saved Card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/mobiletopup")}>
            <Text>Mobile Topup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/paymentsuccess")}>
            <Text>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/ticketdetails")}>
            <Text>ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/ticketprice")}>
            <Text>ticket price</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/triphistory")}>
            <Text>trip</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}