import React, { useState } from "react"
import { View, ScrollView, TouchableOpacity } from "react-native"
import { color, units } from "../../theme"
import { Text } from "../text/text"

const RadioButton = () => {
  const [gender, setGender] = useState(["Male", "Female", "Others"])
  const [selectedOption, setSelectedOption] = useState(false)
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: units.spacing(2),
      }}
    >
      {gender.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#90caf9",
              borderWidth: units.scale(1),
              borderRadius: units.scale(5),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: selectedOption ? "#90caf9" : color.palette.white,
              marginRight: units.spacing(1),
            }}
          >
            <Text
              style={{
                color: selectedOption ? "#FFF" : color.primaryBackground,
                paddingHorizontal: units.spacing(3),
                paddingVertical: units.spacing(0.7),
                fontFamily: "AvenirLTStd-Medium",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

export default RadioButton
