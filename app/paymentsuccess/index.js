import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Color, Border } from "../../styles/paymentsuccess";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentSuccess = () => {
  return (
    <View style={styles.paymentSuccess}>
      <View style={[styles.section, styles.sectionFlexBox]}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={[styles.topBar, styles.topBarLayout]}>
              <Text style={[styles.title, styles.titleTypo]}>
                Payment Status
              </Text>
            </View>
            <View style={[styles.paymentStatus, styles.dividerBorder]}>
              <View style={styles.success}>
                <Image
                  style={styles.icSuccessIcon}
                  contentFit="cover"
                  source={require("../../assets/paymentsuccess/icsuccess.png")}
                />
                <Text style={[styles.title1, styles.titleTypo]}>
                  Your payment was successful!
                </Text>
              </View>
              <View style={[styles.divider, styles.dividerBorder]} />
              <View style={[styles.paymentDetails, styles.sectionFlexBox]}>
                <View style={styles.detailGroup}>
                  <View style={styles.invoice}>
                    <Text style={[styles.text, styles.textFlexBox]}>
                      Invoice Number
                    </Text>
                    <Text style={[styles.invNumber, styles.invNumberTypo]}>
                      INV567489240UI
                    </Text>
                  </View>
                  <View style={styles.dateSpaceBlock}>
                    <Text style={[styles.text, styles.textFlexBox]}>Date</Text>
                    <Text style={[styles.invNumber, styles.invNumberTypo]}>
                      24 February 2023
                    </Text>
                  </View>
                  <View style={styles.dateSpaceBlock}>
                    <Text style={[styles.text, styles.textFlexBox]}>
                      Amount Paid
                    </Text>
                    <Text style={[styles.invNumber, styles.invNumberTypo]}>
                      RS 150.00
                    </Text>
                  </View>
                </View>
                <View style={styles.timeFlexBox}>
                  <View style={[styles.paymentMethod, styles.timeFlexBox]}>
                    <Text style={[styles.text3, styles.text3FlexBox]}>
                      Payment Method
                    </Text>
                    <Text style={[styles.paymentMethod1, styles.text3FlexBox]}>
                      e-Money
                    </Text>
                  </View>
                  <View style={[styles.time, styles.timeFlexBox]}>
                    <Text style={[styles.text3, styles.text3FlexBox]}>
                      Time
                    </Text>
                    <Text style={[styles.paymentMethod1, styles.text3FlexBox]}>
                      01:16 PM
                    </Text>
                  </View>
                  <View style={[styles.time, styles.timeFlexBox]}>
                    <Text style={[styles.text3, styles.text3FlexBox]}>
                      Status
                    </Text>
                    <Text style={[styles.paymentMethod1, styles.text3FlexBox]}>
                      Successful
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.divider, styles.dividerBorder]} />
              <TouchableOpacity style={[styles.ctaDownload, styles.ctaDownloadFlexBox]}>
                <Image
                  style={styles.icDownloadIcon}
                  contentFit="cover"
                  source={require("../../assets/paymentsuccess/icdownload.png")}
                />
                <Text
                  style={[styles.downloadInvoice, styles.downloadInvoiceTypo]}
                >
                  Download Invoice
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.ctaDownload1, styles.ctaDownloadFlexBox]}>
                <Text
                  style={[styles.downloadInvoice1, styles.downloadInvoiceTypo]}
                >
                  Return To Homepage
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctaSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    height: 48,
    flexDirection: "row",
  },
  downloadInvoiceTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  sectionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  topBarLayout: {
    width: 327,
    alignItems: "center",
  },
  titleTypo: {
    color: Color.textPrimary,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  dividerBorder: {
    borderColor: Color.colorWhitesmoke,
    marginTop: 24,
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  invNumberTypo: {
    marginTop: 4,
    color: Color.textPrimary,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  timeFlexBox: {
    alignItems: "flex-end",
    flex: 1,
  },
  text3FlexBox: {
    textAlign: "right",
    alignSelf: "stretch",
  },
  ctaDownloadFlexBox: {
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    alignItems: "center",
  },
  returnToHomepage: {
    color: Color.paper,
    flex: 1,
  },
  ctaBack: {
    top: 690,
    left: 44,
    borderRadius: 20,
    backgroundColor: Color.main,
    alignItems: "center",
    width: 327,
    position: "absolute",
  },
  title: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.textPrimary,
    flex: 1,
  },
  topBar: {
    alignItems: "center",
    flexDirection: "row",
  },
  icSuccessIcon: {
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  title1: {
    fontSize: 20,
    lineHeight: 28,
    marginTop: 16,
    alignSelf: "stretch",
  },
  success: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  divider: {
    borderStyle: "dashed",
    borderRadius: 0.001,
    borderTopWidth: 1,
    height: 1,
    marginTop: 24,
  },
  text: {
    color: Color.textSecondary,
    fontFamily: FontFamily.aBeeZeeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  invNumber: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  invoice: {
    alignSelf: "stretch",
  },
  dateSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  detailGroup: {
    flex: 1,
  },
  text3: {
    color: Color.textSecondary,
    fontFamily: FontFamily.aBeeZeeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  paymentMethod1: {
    marginTop: 4,
    color: Color.textPrimary,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  paymentMethod: {
    alignSelf: "stretch",
  },
  time: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  paymentDetails: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  icDownloadIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  downloadInvoice: {
    color: Color.main,
    marginLeft: 16,
  },
  downloadInvoice1: {
    color: Color.paper,
    marginLeft: 16,
  },
  ctaDownload: {
    backgroundColor: Color.backgroundSecondary,
    width: 295,
    marginTop: 24,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    height: 48,
    flexDirection: "row",
  },
  ctaDownload1: {
    backgroundColor: Color.main,
    width: 295,
    marginTop: 24,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    height: 48,
    flexDirection: "row",
  },
  paymentStatus: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: Padding.p_base,
    marginTop: 24,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.paper,
  },
  content: {
    alignItems: "center",
    overflow: "hidden",
  },
  container: {
    flexDirection: "row",
    overflow: "hidden",
  },
  section: {
    top: 44,
    left: 20,
    width: 375,
    paddingHorizontal: 0,
    paddingVertical: 24,
    position: "absolute",
    overflow: "hidden",
  },
  paymentSuccess: {
    width: "100%",
    height: 775,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.paper,
  },
});

export default PaymentSuccess;
