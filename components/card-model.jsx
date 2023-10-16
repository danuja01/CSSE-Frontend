import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardModel = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <ImageBackground
          source={require("../assets/images/Card1.png")}
          style={styles.card}
          imageStyle={styles.backgroundImage}
        >
          <Text style={styles.nickName}>My-Commercial</Text>
          <Text style={styles.number}>3453 **** **** ****</Text>
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.nameTag}>Name</Text>
              <Text style={styles.name}>Danuja Jayasuriya</Text>
            </View>
            <View>
              <Text style={styles.expiryTag}>Expiry</Text>
              <Text style={styles.expiryDate}>03/24</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  backgroundImage: {
    borderRadius: 10, // to match the card's border radius
    overflow: "hidden", // to ensure the image is clipped to the border radius
  },
  nickName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  number: {
    fontSize: 25,
    textAlign: "center",
    letterSpacing: 4,
    marginVertical: 40,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameTag: {
    fontSize: 12,
    color: "#999999",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  expiryTag: {
    fontSize: 12,
    color: "#999999",
  },
  expiryDate: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CardModel;
