import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardModel = ({ cardNumber, holdersName, month, year , nickname }) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <ImageBackground
          source={require("../assets/images/Card1.png")}
          style={styles.card}
          imageStyle={styles.backgroundImage}
        >
          {/* The nickname is currently hardcoded, you can add it dynamically */}
          <Text style={styles.nickName}>{nickname}</Text>
          <Text style={styles.number}>{cardNumber}</Text>
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.nameTag}>Name</Text>
              <Text style={styles.name}>{holdersName}</Text>
            </View>
            <View>
              <Text style={styles.expiryTag}>Expiry</Text>
              <Text style={styles.expiryDate}>{month}/{year}</Text>
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
