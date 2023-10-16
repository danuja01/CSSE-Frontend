import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Padding } from "../../styles/Styles";
import { ScrollView } from "react-native-gesture-handler";

const TripHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
      <Text style={styles.heading}>Trip History</Text>
      </View>
      <Text style={styles.subheading}>Last 6 Months</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.historyLayout}>
          <Text style={[styles.april282016, styles.april282016FlexBox]}>
            April 28, 2016
          </Text>
          <View style={[styles.history1, styles.history1FlexBox]}>
            <View style={[styles.mayapower, styles.history1FlexBox]}>
              <View style={styles.mayapower1}>
                <Text style={[styles.pettahMalabe, styles.rs100Typo]}>
                  Pettah - Malabe
                </Text>
                <Text style={[styles.hf4378, styles.hf4378Typo]}>
                  3289HF-4378
                </Text>
              </View>
            </View>
            <Text style={[styles.rs100, styles.rs100Typo]}>RS 100</Text>
          </View>
        </View>
        <View style={styles.contentChild} />
        <View style={[styles.history2, styles.historyLayout]}>
          <Text style={[styles.april282016, styles.april282016FlexBox]}>
            December 2, 2018
          </Text>
          <View style={[styles.history1, styles.history1FlexBox]}>
            <View style={[styles.mayapower, styles.history1FlexBox]}>
              <View style={styles.mayapower1}>
                <Text style={[styles.pettahMalabe, styles.rs100Typo]}>
                  Malabe - Kottawa
                </Text>
                <Text style={[styles.hf4378, styles.hf4378Typo]}>
                  3289HF-4378
                </Text>
              </View>
            </View>
            <Text style={[styles.rs100, styles.rs100Typo]}>RS 30</Text>
          </View>
        </View>
        <View style={styles.contentChild} />
        <View style={[styles.history2, styles.historyLayout]}>
          <Text style={[styles.april282016, styles.april282016FlexBox]}>
            February 29, 2012
          </Text>
          <View style={[styles.history1, styles.history1FlexBox]}>
            <View style={[styles.mayapower, styles.history1FlexBox]}>
              <View style={styles.mayapower1}>
                <Text style={[styles.pettahMalabe, styles.rs100Typo]}>
                  Kottawa - Malabe
                </Text>
                <Text style={[styles.hf4378, styles.hf4378Typo]}>
                  3289HF-4378
                </Text>
              </View>
            </View>
            <Text style={[styles.rs100, styles.rs100Typo]}>RS 30</Text>
          </View>
        </View>
        {/* Add more history items as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subheading : {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.black,
    marginBottom: 15,
    alignSelf: 'flex-start', // Align to the left
    left : 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary3,
  },
  centerContent: {
    width: "100%",
    maxWidth: 400, // Set a max width if needed
  },
  heading: {
    
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.black,
    marginTop: 50,
    marginBottom: 150,
  },
  scrollView: {
    flex: 1,
  },
  april282016FlexBox: {
    textAlign: "left",
    lineHeight: 24,
  },
  april282016FlexBox: {
    textAlign: "left",
    lineHeight: 24,
  },
  history1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rs100Typo: {
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  hf4378Typo: {
    color: Color.neutral3,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_sm,
  },
  historyLayout: {
    height: 104,
    width: 327,
  },
  baseIcon: {
    width: 375,
    height: 924,
  },
  april282016: {
    marginTop: -52,
    top: "50%",
    left: 8,
    color: Color.neutral3,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  pettahMalabe: {
    fontSize: FontSize.size_base,
    color: Color.neutral1,
    textAlign: "left",
    lineHeight: 24,
  },
  hf4378: {
    marginTop: 4,
    textAlign: "right",
    lineHeight: 24,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_sm,
  },
  mayapower1: {
    justifyContent: "center",
  },
  mayapower: {
    justifyContent: "center",
  },
  rs100: {
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    color: Color.primary1,
    textAlign: "right",
  },
  history1: {
    top: 28,
    left: 0,
    justifyContent: "space-between",
    padding: Padding.p_xs,
    width: 327,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  contentChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderTopWidth: 1,
    width: 317,
    height: 1,
    marginTop: 12,
  },
  history2: {
    marginTop: 12,
  },
  content: {
    top: 201,
    left: 24,
    position: "absolute",
  },
  tripHistory: {
    backgroundColor: Color.primary3,
    flex: 1,
    width: "100%",
    height: 775,
    overflow: "hidden",
  },
});

export default TripHistory;
