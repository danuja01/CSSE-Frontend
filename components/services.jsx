import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

const Services = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.servicesContainer}>
        <TouchableOpacity style={styles.serviceContainer}>
          <Image
            source={require("../assets/images/Icon4.png")}
            resizeMode="contain"
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceContainer}>
          <Image
            source={require("../assets/images/Icon3.png")}
            resizeMode="contain"
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceContainer}>
          <Image
            source={require("../assets/images/Icon2.png")}
            resizeMode="contain"
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceContainer}>
          <Image
            source={require("../assets/images/Icon1.png")}
            resizeMode="contain"
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>Cards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "ABeeZee-Regular",
  },
  headerBtn: {
    fontSize: 14,
    color: "#135EF2",
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  serviceContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 75,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
  },
  serviceImage: {
    width: 25,
    height: 25,
  },
  serviceTitle: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default Services;
