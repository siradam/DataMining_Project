import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  clusterBox: {
    backgroundColor: colors.blue,
    width: 32,
    height: 32,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterBox: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 40 * 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countStyle: {
    fontSize: 12,
    position: 'absolute',
    color: colors.grey02,
    fontWeight: "600",
    fontFamily: "ComicSans-Regular"
  }
});
