import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { AutoImage as Image, Button } from "../../components"
export const FailuerImage = require("../../theme/Image/FailuerImage.png")

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

const CONTAINERSTYLE: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
}

const CONTAINERBODY: ViewStyle = {
  //  backgroundColor: color.primary,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
}
const TEXTTITLE: ViewStyle = {
  marginBottom: 9,
}
const TEXTCONTAINER: ViewStyle = {
  marginBottom: 34,
}

const IMAGE: ImageStyle = {
  marginBottom: 23,
}
const BTNSIZE: ViewStyle = {
  width: 260,
}

export interface ErrorContainerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  onPresss?: () => void
  style?: StyleProp<ViewStyle>
  screenName: string
}

/**
 * Describe your component here
 */
export const ErrorContainer = observer(function ErrorContainer(props: ErrorContainerProps) {
  const { style, screenName, onPresss } = props
  const styles = Object.assign({}, CONTAINER, style)
  // const nextScreen = () => navigation.navigate("BankAccountFailuer")
  return (
    <View style={CONTAINERSTYLE}>
      <View style={CONTAINERBODY}>
        <View>
          <Image source={FailuerImage} style={IMAGE} />
        </View>
        {screenName === "kycErrorScreen" ? (
          <>
            <View style={TEXTTITLE}>
              <Text preset="header">KYC failed</Text>
            </View>
            <View style={TEXTCONTAINER}>
              <Text preset="contentSecondary" style={{ textAlign: "center" }}>
                Your KYC Verification failed,{"\n"}please try again.
              </Text>
            </View>
          </>
        ) : screenName === "bankAccountError" ? (
          <>
            <View style={TEXTTITLE}>
              <Text preset="header" style={{ textAlign: "center" }}>
                We can't connect to your{"\n"} bank right now
              </Text>
            </View>
            <View style={TEXTCONTAINER}>
              <Text preset="contentSecondary" style={{ textAlign: "center" }}>
                Check with your bank and try again.
              </Text>
            </View>
          </>
        ) : (
          <>
            <View style={TEXTTITLE}>
              <Text preset="header">KYCliled</Text>
            </View>
            <View style={TEXTCONTAINER}>
              <Text preset="contentSecondary" style={{ textAlign: "center" }}>
                Check with your bank and try again.
              </Text>
            </View>
          </>
        )}

        {/* <View style={TEXTCONTAINER}>
          <Text preset="contentSecondary" style={{ textAlign: "center" }}>
            Your KYC Verification failed,{"\n"}please try again.
          </Text>
        </View> */}
        <View>
          <Button style={BTNSIZE} text="Retry Now" onPress={onPresss} />
        </View>
      </View>
    </View>
  )
})
