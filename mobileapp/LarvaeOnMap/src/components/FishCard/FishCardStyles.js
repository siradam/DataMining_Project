import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  textContainer: {
    display: 'flex',
    flex: 0.7,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: colors.grey01,
    borderWidth: 1,
    padding: 5,
    width: 120,
  },

  // TextStyles
  obsStyle: {
    fontSize: 12,
    color: colors.black02,
    fontFamily: "OpenSans-RegularBold",
  },
  descStyle: {
    fontSize: 10,
    color: colors.black02,
    fontFamily: "OpenSans-Regular",
  },
  timeStyle: {
    fontSize: 10,
    color: colors.grey01,
    fontFamily: "OpenSans-RegularItalic",
  }
});
