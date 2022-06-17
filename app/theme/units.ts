import { Dimensions } from "react-native"

const containerWidth = Dimensions.get("window").width
const containerHeight = Dimensions.get("window").height
const initialScale = Math.min(containerWidth, containerHeight) / 375

export const units = {
  scale: (multi) => (multi ? initialScale * multi : initialScale),
  spacing: (multi) => (multi ? initialScale * 8 * multi : initialScale * 8),
  fontSize: (multi) => (multi ? initialScale * 16 * multi : initialScale * 16),
  windowHeight: (multi) => (multi ? containerHeight + multi : containerHeight),
  windowWidth: (multi) => (multi ? containerWidth + multi : containerWidth),
  screenHeader: () => initialScale * 48,
}
