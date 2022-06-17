import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Screen, Text, TextField } from "../../components"
import {  spacing } from "../../theme"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, units } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
  justifyContent: "space-around",
  marginHorizontal: units.spacing(5),
}

const HeaderContainerStyle: ViewStyle = {
  // backgroundColor: "red",
}
const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  paddingHorizontal: spacing[4],
  justifyContent: "center",
}
const IdentityDescriptionTextStyle: ViewStyle = {
  marginTop: units.spacing(1.25),
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `identityVerification: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="identityVerification" component={IdentityVerificationScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const IdentityVerificationScreen: FC<
  StackScreenProps<NavigatorParamList, "identityVerification">
> = observer(function IdentityVerificationScreen({navigation}) {
    const nextScreen = () => navigation.navigate("KycFailuer")

  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={{ flex: 0.5, justifyContent: "space-between" }}>
        <View style={HeaderContainerStyle}>
          <Text preset="header" text="Verify your identity" />
          <Text
            text="It helps us to fetch your accurate details and verify your identity."
            style={IdentityDescriptionTextStyle}
          />
        </View>
        <TextField label="Name as per PAN card" />
        <TextField label="PAN Number" />
        <TextField label="Date of Birth" />
      </View>
<View style={CONTAINER}>

      <Button text="Identity Verification Screen" onPress={nextScreen} />
</View>
    </Screen>
  )
})
