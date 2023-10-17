import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View , TouchableOpacity , TextInput , ScrollView} from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../../styles/mobiletop";

const MobileTopUp = () => {
  const [amount, setamount] = React.useState('');
  const [cardno, setcardno] = React.useState('');
  const [name, setname] = React.useState('');
  const [expiredate, setexpiredate] = React.useState('');
  const [cvv, setcvv] = React.useState('');
  return (
    <View style={styles.mobileTopUp2}>
      <Image
        style={styles.baseIcon}
        contentFit="cover"
        source={require("../../assets/mobiletopup/base.png")}
      />
      <View style={[styles.topBar, styles.topBarFlexBox]}>
        <Image
          style={styles.icon3}
          contentFit="cover"
          source={require("../../assets/mobiletopup/icon.png")}
        />
        <Text style={[styles.mobileTopUp3, styles.button1Typo]}>
          Mobile Top Up
        </Text>
        <Image
          style={styles.topBarChild}
          contentFit="cover"
          source={require("../../assets/mobiletopup/frame-23.png")}
        />
      </View>
      <Text style={[styles.amount, styles.rs150Typo]}>Amount</Text>
      <TouchableOpacity
        style={[styles.requestAction, styles.priceFlexBox]}
        onPress={() => {
          // Handle button press here
        }}
      >
        <Image
          style={styles.icon10}
          contentFit="cover"
          source={require("../../assets/mobiletopup/icon1.png")}
        />
        <Text style={styles.depositMoney}>Deposit money</Text>
      </TouchableOpacity>
      <View style={styles.formFilled}>
      <View style={styles.cardSelection}>
        <Text style={[styles.cardNumber, styles.text10Typo]}>Select a Card:</Text>
        <Text style={[styles.cardNumber, styles.text10Typo]}>Add New Card</Text>
        <TouchableOpacity style={[styles.button03, styles.buttonSpaceBlock]}>
        <Text style={[styles.button1, styles.amountLayout]}>
          SELECT A CARD
        </Text>
        <Image
          style={styles.icon6}
          contentFit="cover"
          source={require("../../assets/down.png")}
        />
      </TouchableOpacity>
      </View>
      <ScrollView>
  <View style={styles.totalAmountContainer}>
    <View style={styles.totalAmountRectangle}>
      <Text style={[styles.cardNumber, styles.text10Typo, styles.texttot]}>Total Amount</Text>
      <Text style={styles.rsAmount}>RS 1000.00</Text>
    </View>
  </View>

  <View style={styles.totalAmountContainer}>
    <View style={styles.totalAmountRectangle}>
      <Text style={[styles.cardNumber, styles.text10Typo, styles.texttot]}>Total Amount</Text>
      <Text style={styles.rsAmount}>RS 1000.00</Text>
    </View>
  </View>
</ScrollView>
      </View>
      <View style={[styles.mobileTopUpChild, styles.pricePosition]} />
      <TextInput
        style={[styles.price, styles.pricePosition , styles.ainput]}
        value={amount}  // Bind the value to the state variable
        onChangeText={(text) => setamount(text)}  // Update the state on input change
      />
      <TouchableOpacity style={[styles.button, styles.buttonSpaceBlock]}>
        <Image
          style={styles.icon8}
          contentFit="cover"
          source={require("../../assets/mobiletopup/icon2.png")}
        />
        <Text style={[styles.button1, styles.amountLayout]}>
          Top up for yourself
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  texttot: {
    left: 10,
    top: 10,
  },
  totalAmountContainer: {
    marginTop:15,
    alignItems: 'center',
  },
  cardNumber: {
    color: 'black', // Assuming your text color is black
  },
  totalAmountRectangle: {
    width: 320,
    height: 140,
    borderColor: 'rgba(0, 0, 0, 0.2)', // Slightly transparent black
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 5,
  },
  rsAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center text horizontally
    textAlignVertical: 'center', // Center text vertically
    flex: 1, // This allows the text to take up all available space
    marginTop: 40,
  },
  
  cardSelection: {
  marginBottom: 85,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 340,
},
  ainput: {
    height: 40,
    width: 300,
    fontSize: 30, // Adjust the fontSize as needed
  },
  cinput: {
    height: 40,
    width: 300,
    fontSize: 18, // Adjust the fontSize as needed
    color: 'gray'
  },
  topBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  button1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    left: 32,
    bottom: 35,
  },
  rs150Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  priceFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  totalAmountTypo: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  rs100000Position: {
    top: 638,
    position: "absolute",
  },
  text10Typo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
  },
  fieldBorder: {
    height: 56,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 8,
    overflow: "hidden",
  },
  hintChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  text5Position: {
    color: Color.colorGray_100,
    left: 16,
    top: "50%",
    marginTop: -9,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.buttonBold_size,
    textAlign: "left",
    position: "absolute",
  },
  filledPosition: {
    backgroundColor: Color.colorMediumslateblue_100,
    height: 2,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  hintLayout: {
    height: 18,
    width: 18,
  },
  pricePosition: {
    top: 154,
    position: "absolute",
  },
  buttonBg: {
    backgroundColor: Color.primary1,
    borderRadius: Border.br_xl,
  },
  amountLayout: {
    lineHeight: 24,
    fontSize: FontSize.buttonBold_size,
  },
  baseIcon: {
    width: 420,
    height: 1100,
  },
  icon3: {
    overflow: "hidden",
    height: 24,
    width: 24,
    bottom: 34,
  },
  icon6: {
    overflow: "hidden",
    height: 24,
    width: 24,
    bottom: 1,
    left: 20,
  },
  icon8: {
    overflow: "hidden",
    height: 24,
    width: 24,
    bottom: 1,
  },
  icon10: {
    overflow: "hidden",
    height: 24,
    width: 24,
    bottom: 1,
  },
  mobileTopUp3: {
    lineHeight: 28,
    color: Color.neutral1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    marginTop: 4,
  },
  topBarChild: {
    opacity: 0,
    height: 24,
    width: 24,
  },
  topBar: {
    top: 60,
    left: 24,
    justifyContent: "space-between",
    width: 327,
  },
  amount: {
    top: 131,
    left: 170,
    lineHeight: 24,
    fontSize: FontSize.buttonBold_size,
    position: "absolute",
  },
  depositMoney: {
    color: Color.neutral2,
    marginTop: 8,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeRegular,
    lineHeight: 24,
    fontSize: FontSize.buttonBold_size,
  },
  requestAction: {
    top: 104,
    left: 57,
    backgroundColor: Color.neutral6,
    shadowColor: "rgba(145, 150, 171, 0.12)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 96,
    padding: 12,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    position: "absolute",
  },
  totalAmount: {
    left: 50,
    top: 638,
    position: "absolute",
  },
  rs100000: {
    left: 269,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    top: 638,
    textAlign: "left",
  },
  cardNumber1: {
    color: Color.colorDarkslategray,
  },
  text4: {
    color: Color.colorRed,
  },
  cardNumber: {
    letterSpacing: 0.3,
    fontSize: FontSize.buttonBold_size,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  roundedRectangle4: {
    backgroundColor: Color.colorWhitesmoke,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    borderRadius: Border.br_base,
  },
  filledMarker4: {
    height: 2,
    backgroundColor: Color.primary1,
    right: -1,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  masterCardLogo1: {
    top: 20,
    left: 244,
    width: 27,
    height: 16,
    position: "absolute",
  },
  cardIcon1: {
    width: 28,
    height: 23,
  },
  cardIconWrapper: {
    top: 7,
    left: 274,
  },
  text5: {
    letterSpacing: 0.8,
  },
  fieldPlaceholder: {
    width: 327,
  },
  filledMarker5: {
    right: -1,
    backgroundColor: Color.colorMediumslateblue_100,
  },
  tharinduGunasekara: {
    letterSpacing: 0.3,
  },
  cardholderName: {
    marginTop: 24,
  },
  filledMarker6: {
    backgroundColor: Color.colorMediumslateblue_100,
    right: 0,
  },
  fieldPlaceholder2: {
    width: 152,
  },
  hintChild: {
    opacity: 0.2,
    left: 0,
    top: 0,
    position: "absolute",
    height: 18,
    width: 18,
  },
  text10: {
    top: 3,
    left: 6,
    fontSize: 12,
    letterSpacing: 0.2,
    color: "#25d482",
    position: "absolute",
  },
  hint: {
    marginLeft: 24,
  },
  cvvCvcHint: {
    flexDirection: "row",
  },
  fieldPlaceholder3: {
    width: 151,
  },
  cvvCvc: {
    marginLeft: 24,
  },
  expiryDateCvvCvc: {
    marginTop: 24,
    flexDirection: "row",
  },
  formFilled: {
    top: 245,
    left: 49,
    position: "absolute",
  },
  mobileTopUpChild: {
    left: 164,
    backgroundColor: "#dcdcdc",
    width: 210,
    height: 54,
    borderRadius: Border.br_2xs,
  },
  rs150: {
    fontSize: 32,
    lineHeight: 52,
  },
  priceChild: {
    width: 2,
    height: 40,
  },
  price: {
    left: 173,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    borderColor: Color.colorBlack,
    width: 30,
    height: 30,
    borderRadius: Border.br_2xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  saveCardDetails1: {
    marginLeft: 16,
  },
  rectangleParent: {
    top: 566,
    left: 53,
  },
  button1: {
    color: Color.neutral6,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  button: {
    marginLeft: -158.5,
    bottom: 36,
    left: "50%",
    height: 52,
    backgroundColor: Color.primary1,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 327,
  },
  button03: {
    marginLeft: -158.5,
    top: 40,
    left: "50%",
    height: 52,
    backgroundColor: Color.primary1,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 327,
  },
  mobileTopUp2: {
    backgroundColor: Color.primary3,
    flex: 1,
    width: "100%",
    height: 765,
  },
});

export default MobileTopUp;
