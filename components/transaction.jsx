import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const Transaction = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Details</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.tContainer}>
        <View style={styles.tCard}>
          <View>
            <Text style={styles.tTitle}>Recharge</Text>
            <Text style={styles.tDate}>01/07/2023 10.30am</Text>
          </View>
          <View>
            <Text style={styles.tAmmount}>+100</Text>
          </View>
        </View>
        <View style={styles.tCard}>
          <View>
            <Text style={styles.tTitle}>Recharge</Text>
            <Text style={styles.tDate}>01/07/2023 10.30am</Text>
          </View>
          <View>
            <Text style={styles.tAmmount}>+100</Text>
          </View>
        </View>
        <View style={styles.tCard}>
          <View>
            <Text style={styles.tTitle}>Recharge</Text>
            <Text style={styles.tDate}>01/07/2023 10.30am</Text>
          </View>
          <View>
            <Text style={styles.tAmmount}>+100</Text>
          </View>
        </View>
        <View style={styles.tCard}>
          <View>
            <Text style={styles.tTitle}>Recharge</Text>
            <Text style={styles.tDate}>01/07/2023 10.30am</Text>
          </View>
          <View>
            <Text style={styles.tAmmount}>+100</Text>
          </View>
        </View>
        <View style={styles.tCard}>
          <View>
            <Text style={styles.tTitle}>Recharge</Text>
            <Text style={styles.tDate}>01/07/2023 10.30am</Text>
          </View>
          <View>
            <Text style={styles.tAmmount}>+100</Text>
          </View>
        </View>
        <View style={styles.tCard}>
          <View>
            <Text style={styles.tTitle}>Recharge</Text>
            <Text style={styles.tDate}>01/07/2023 10.30am</Text>
          </View>
          <View>
            <Text style={styles.tAmmount}>+100</Text>
          </View>
        </View>
        <View style={styles.tCard}>
          <View>
            <Text style={styles.tTitle}>Recharge</Text>
            <Text style={styles.tDate}>01/07/2023 10.30am</Text>
          </View>
          <View>
            <Text style={styles.tAmmount}>+100</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// calc height based on display height for tContainer
const height = Dimensions.get("window").height;

const tContainerHeight = height - 570;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "ABeeZee-Regular",
  },
  headerBtn: {
    fontSize: 14,
    color: "#135EF2",
  },
  tContainer: {
    backgroundColor: "#D2E9F080",
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    height: tContainerHeight,
  },
  tCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#00000020",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  tTitle: {
    fontSize: 16,
    color: "#53668E",
    fontFamily: "ABeeZee-Regular",
  },
  tDate: {
    fontSize: 10,
    color: "#00000080",
    marginTop: 5,
    fontFamily: "ABeeZee-Regular",
  },
  tAmmount: {
    fontSize: 16,
    fontFamily: "ABeeZee-Regular",
    color: "#27AE60",
  },
});

export default Transaction;
