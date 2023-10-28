import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View , TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../../styles/GlobalStyles";
import { db } from "../../firebase/config";
import { auth } from '../../firebase/config';
import { useRoute } from '@react-navigation/native';
import { Stack , useRouter } from "expo-router";
import { getDatabase, ref, onValue, push, set } from "firebase/database";

const TicketPrice = () => {
  const route = useRoute();
  const router = useRouter();
  const { id } = route.params;

  const [history, sethistory] = useState([]);
  const [user , setUser] = useState(null);


  const userId = auth.currentUser.uid;

  const fetchuser = () => {
    const cardRef = ref(db, `users/${userId}`);
    onValue(cardRef, (snapshot) => {
      const cardsData = snapshot.val();
      if (cardsData) {
        const cardsArray = Object.entries(cardsData).map(([key, value]) => ({
          ...value,
        }));
        setUser(cardsData);
      } else {
        setUser([]);
      }
    });
  };

  useEffect(() => {
    fetchuser();
  }, []);

  const fetchhistory = () => {
    const cardRef = ref(db, `triphistory/${userId}/${id}`);
    onValue(cardRef, (snapshot) => {
      const cardsData = snapshot.val();
      if (cardsData) {
        const cardsArray = Object.entries(cardsData).map(([key, value]) => ({
          ...value,
        }));
        sethistory(cardsData);
      } else {
        sethistory([]);
      }
    });
  };

  useEffect(() => {
    fetchhistory();
  }, []);

  const handlePayment = () => {
    if (history.fair >= user.acc) {
      router.push(`/topup`);// Replace 'ScreenFor80' with the actual screen name
    } else {
      const paymentDetails = {
        tripid : id,
        amount : history.fair,
        date : history.date,
        time : history.time,
      };
  
      try {
        const cardRef = ref(db, `PaymentDetails/${userId}`);
        const newCardRef = push(cardRef);
        set(newCardRef, paymentDetails);
        console.log("Payment details saved successfully!");

        const userRef = ref(db, `users/${userId}`);

        // Use set to update the acc property
        set(userRef, {
          acc: user.acc - history.fair,
        })
        .then(() => {
          console.log(`acc updated successfully!`);
        })
        .catch((error) => {
          console.error(`Error updating acc: `, error);
        });



      } catch (error) {
        console.error("Error saving card details:", error);
      }
      router.push(`/paymentsuccess/${id}`); // Replace 'ScreenForOtherAmount' with the actual screen name
    }
  };

  return (
    <View style={[styles.ticketPrice, styles.tabBarBg]}>
      <View style={[styles.ticketDetail, styles.tabFlexBox]}>
        <View style={[styles.logoAirline, styles.detailsFlexBox]}>
          <View style={styles.airline}>
            <Text style={[styles.airlineName, styles.nameFlexBox]}>
              SLTB Sri Lanka
            </Text>
            <Text style={[styles.class, styles.cityTypo]}>Economy</Text>
          </View>
        </View>
        <View style={[styles.divider, styles.detailsSpaceBlock]} />
        <View style={[styles.flightDetails, styles.detailsSpaceBlock]}>
          <View style={styles.departure}>
            <Text style={[styles.cityName, styles.cityTypo]}>{history.startPoint}</Text>
            <Text style={[styles.time, styles.timeTypo]}>{history.time}</Text>
            <Text style={[styles.date, styles.dateTypo]}>{history.date}</Text>
          </View>
          <View style={[styles.arrival, styles.arrivalPosition]}>
            <Text style={[styles.cityName1, styles.time1FlexBox]}>
            {history.endPoint}
            </Text>
            <Text style={[styles.time1, styles.time1FlexBox]}>{history.time}</Text>
            <Text style={[styles.date1, styles.time1FlexBox]}>{history.date}</Text>
          </View>
          <View style={[styles.duration, styles.tabFlexBox]}>
            <View style={[styles.pointGroup, styles.detailsFlexBox]}>
              <Image
                style={[styles.pointIcon, styles.pointIconLayout]}
                contentFit="cover"
                source={require("../../assets/point.png")}
              />
              <View style={[styles.divider1, styles.arrivalPosition]} />
              <Image
                style={[styles.pointIcon1, styles.pointIconLayout]}
                contentFit="cover"
                source={require("../../assets/point1.png")}
              />
              <View style={[styles.icPlane, styles.time2Position]} />
            </View>
          </View>
        </View>
        <View style={[styles.divider, styles.detailsSpaceBlock]} />
        <View style={[styles.orderDetails, styles.detailsSpaceBlock]}>
          <View style={styles.airline}>
            <View style={styles.name}>
              <Text style={[styles.cityName, styles.cityTypo]}>Name</Text>
              <Text style={[styles.name1, styles.name1Typo]}>Oshada</Text>
            </View>
            <View style={styles.class1}>
              <Text style={[styles.cityName, styles.cityTypo]}>Type</Text>
              <Text style={[styles.name1, styles.name1Typo]}>STANDARD</Text>
            </View>
            <View style={styles.class1}>
              <Text style={[styles.cityName, styles.cityTypo]}>ID number</Text>
              <Text style={[styles.name1, styles.name1Typo]}>1289754724</Text>
            </View>
          </View>
          <View style={styles.detailGroup1}>
            <View style={styles.bookingCodeFlexBox}>
              <Text style={[styles.cityName1, styles.time1FlexBox]}>
                Total Price
              </Text>
              <Text style={[styles.bookingCode1, styles.name1Typo]}>
                RS.{history.fair}
              </Text>
            </View>
            <View style={[styles.airlineName1, styles.bookingCodeFlexBox]}>
              <Text style={[styles.cityName1, styles.time1FlexBox]}>
                Bus Service
              </Text>
              <Text style={[styles.bookingCode1, styles.name1Typo]}>SLTB</Text>
            </View>
          </View>
        </View>
        <View style={[styles.divider, styles.detailsSpaceBlock]} />
      </View>
      <TouchableOpacity onPress={handlePayment} style={[styles.ctaDownload, styles.detailsFlexBox]}>
        <Text style={[styles.makeThePayment, styles.name1Typo]}>
          Make the Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarBg: {
    backgroundColor: Color.paper,
    overflow: "hidden",
  },
  tabFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  detailsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  cityTypo: {
    color: Color.textSecondary,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  detailsSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  timeTypo: {
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  dateTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.textSecondary,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  arrivalPosition: {
    zIndex: 1,
    flex: 1,
  },
  time1FlexBox: {
    textAlign: "right",
    alignSelf: "stretch",
  },
  pointIconLayout: {
    height: 6,
    width: 6,
  },
  time2Position: {
    top: "50%",
    position: "absolute",
  },
  name1Typo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  bookingCodeFlexBox: {
    height: 50,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  iconLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  tabPosition: {
    top: 12,
    height: 44,
    alignItems: "center",
    position: "absolute",
  },
  icon1Layout: {
    height: 24,
    width: 24,
  },
  iphonePosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  airlineName: {
    color: Color.textPrimary,
    lineHeight: 24,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  class: {
    marginTop: 4,
    textAlign: "left",
    alignSelf: "stretch",
  },
  airline: {
    flex: 1,
  },
  logoAirline: {
    alignSelf: "stretch",
  },
  divider: {
    borderStyle: "dashed",
    borderRadius: 0.001,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke,
  },
  cityName: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  time: {
    marginTop: 4,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.textPrimary,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  date: {
    marginTop: 4,
    textAlign: "left",
    alignSelf: "stretch",
  },
  departure: {
    zIndex: 0,
    flex: 1,
  },
  cityName1: {
    color: Color.textSecondary,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  time1: {
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    marginTop: 4,
    color: Color.textPrimary,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  date1: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.textSecondary,
    fontFamily: FontFamily.aBeeZeeRegular,
    marginTop: 4,
  },
  arrival: {
    alignItems: "flex-end",
  },
  pointIcon: {
    zIndex: 0,
  },
  divider1: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    zIndex: 1,
  },
  pointIcon1: {
    zIndex: 2,
  },
  icPlane: {
    marginTop: -10,
    marginLeft: -10.5,
    width: 20,
    height: 20,
    zIndex: 3,
    left: "50%",
    overflow: "hidden",
  },
  pointGroup: {
    alignSelf: "stretch",
  },
  durationTime: {
    marginTop: 16,
    textAlign: "center",
    alignSelf: "stretch",
  },
  duration: {
    marginLeft: -60.5,
    bottom: -6,
    width: 121,
    zIndex: 2,
    left: "50%",
  },
  flightDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  name1: {
    marginTop: 4,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.textPrimary,
    lineHeight: 24,
  },
  name: {
    alignSelf: "stretch",
  },
  class1: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  bookingCode1: {
    textAlign: "right",
    alignSelf: "stretch",
    marginTop: 4,
    color: Color.textPrimary,
    lineHeight: 24,
  },
  airlineName1: {
    marginTop: 12,
  },
  detailGroup1: {
    height: 174,
    alignItems: "flex-end",
    flex: 1,
  },
  orderDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ticketDetail: {
    top: 70,
    left: 40,
    borderRadius: 2,
    borderWidth: 1,
    padding: Padding.p_base,
    justifyContent: "center",
    width: 327,
    borderColor: Color.colorWhitesmoke,
    alignItems: "center",
    borderStyle: "solid",
    backgroundColor: Color.paper,
  },
  makeThePayment: {
    color: Color.paper,
    textAlign: "center",
    lineHeight: 22,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    flex: 1,
  },
  ctaDownload: {
    top: 569,
    left: 40,
    borderRadius: 20,
    backgroundColor: Color.main,
    height: 48,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 12,
    width: 327,
    position: "absolute",
  },
  icon: {
    height: "68.57%",
    width: "66.67%",
    top: "14.28%",
    right: "16.67%",
    bottom: "17.14%",
    left: "16.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 0,
    overflow: "hidden",
  },
  tab: {
    top: 4,
    left: 32,
    paddingHorizontal: 0,
    paddingVertical: 5,
    height: 44,
  },
  tabBarChild: {
    top: 9,
    left: 91,
    width: 30,
    height: 29,
  },
  icon1: {
    overflow: "hidden",
  },
  tab1: {
    left: 94,
  },
  tab2: {
    left: 149,
  },
  tab3: {
    left: 205,
  },
  tab4: {
    left: 260,
  },
  tabBar: {
    marginLeft: -160.5,
    bottom: 0,
    borderRadius: 29,
    shadowColor: "rgba(231, 242, 243, 0.07)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 316,
    height: 56,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  time2: {
    marginTop: -9,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    color: Color.colorBlack,
    width: 54,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  action: {
    height: "40.91%",
    width: "14.32%",
    top: "31.82%",
    right: "80.37%",
    bottom: "27.27%",
    left: "5.31%",
    position: "absolute",
    overflow: "hidden",
  },
  containerIcon: {
    marginTop: -6,
    right: 14,
    width: 68,
    height: 14,
    overflow: "hidden",
  },
  iphoneXBarsStatusDef: {
    top: 0,
    height: 44,
  },
  line: {
    right: 120,
    bottom: 8,
    left: 120,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutral1,
    height: 5,
    position: "absolute",
  },
  iphoneXHomeIndicator: {
    bottom: 4,
    height: 34,
  },
  ticketPrice: {
    width: "100%",
    height: 775,
    overflow: "hidden",
    flex: 1,
  },
});

export default TicketPrice;
