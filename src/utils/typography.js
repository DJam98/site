import Typography from "typography"
import gray from "gray-percentage"

import colors from "./colors"

const typography = new Typography({
  googleFonts: [
    {
      name: "DM Sans",
      styles: ["400", "400i", "500", "500i", "700", "700i"],
    },
  ],
  headerFontFamily: ["DM Sans", "Noto Sans", "sans-serif"],
  bodyFontFamily: ["DM Sans", "Noto Sans", "sans-serif"],
  headerWeight: "500",
  bodyWeight: 400,
  boldWeight: 500,
  overrideStyles: ({ rhythm }) => {
    const styles = {
      li: {
        margin: rhythm(1 / 6),
      },
      code: {
        padding: rhythm(0.1),
        borderRadius: rhythm(0.2),
        background: gray(98),
      },
      a: {
        color: colors.primary,
        textDecoration: "none",
      },
      "a:hover": {
        textDecoration: "underline",
        opacity: "75%",
      },
      blockquote: {
        color: gray(40),
        marginLeft: rhythm(1 / 6),
        paddingLeft: rhythm(6 / 9),
        borderLeft: `${rhythm(1 / 9)} solid ${colors.primary}`,
      },
    }
    return styles
  },
})
export var rhythm = typography.rhythm
export { gray }
export default typography
