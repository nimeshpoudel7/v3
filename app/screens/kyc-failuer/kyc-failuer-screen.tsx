import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, ImageStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text, AutoImage as Image, Button } from "../../components"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { ErrorContainer } from "../../components/error-container/error-container"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
  // justifyContent: "space-around",
  // marginHorizontal: units.spacing(5),
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `kycFailuer: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="kycFailuer" component={KycFailuerScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const KycFailuerScreen: FC<StackScreenProps<NavigatorParamList, "kycFailuer">> = observer(
  function KycFailuerScreen({ navigation }) {
    // const nextScreen = () =>
    const nextScreen = () => {
      navigation.navigate("BankAccountFailuer")
    }
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="scroll">
        <ErrorContainer screenName="kycErrorScreen" onPresss={nextScreen} />
      </Screen>
    )
  },
)
