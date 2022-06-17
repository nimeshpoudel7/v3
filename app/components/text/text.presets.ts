import { TextStyle } from "react-native"
import { color, units, Font } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: Font.primary,
  color: color.text,
  fontSize: units.fontSize(0.93),
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontFamily: Font.primaryBold } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: units.fontSize(1.06), fontFamily: Font.primaryBold } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: units.fontSize(0.81), color: color.dim } as TextStyle,
  
  contentSecondary: { ...BASE, fontSize: units.fontSize(0.93), color: color.dim } as TextStyle,


  /**
   * A smaller piece of secondary information.
   */
  secondary: { ...BASE, fontSize: units.fontSize(0.56), color: color.dim } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
