import {
    StyleSheet, Dimensions
  } from "react-native";
  import colors from "../../styles/colors";
  const {
    width
  } = Dimensions.get("window");

  export default StyleSheet.create({
    sceneWrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: colors.white
    },
    headingContainer: {
      flex: 0.075,
      display: "flex",
      backgroundColor: colors.blue,
      borderColor: colors.black01,
      borderWidth: 2,
      alignItems: "center",
      alignSelf: 'center',
      width: 200,
      marginVertical: 12,
      justifyContent: 'center'
    },
    headingStyle: {
      fontSize: 20,
      color: colors.white,
      fontFamily: "ComicSans-Regular",
    },
    prefContainer: {
      flex: 0.1,
      display: "flex",
      flexDirection: 'row',
      alignItems: "center",
      marginLeft: 30,
      marginVertical: 20,
    },
    iconStyle: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
    },
    titleStyle: {
      fontSize: 16,
      color: colors.black01,
      fontFamily: "ComicSans-Bold",
      marginLeft: 60
    },
    bodyContainer: {
      flex: 0.8,
      display: "flex",
    },
    settingContainer: {
      flex: 0.2,
      display: "flex",
      flexDirection: 'row',
      alignItems: "center",
      marginLeft: 30,
      marginVertical: 10,
    },
    textStyle: {
      fontSize: 14,
      color: colors.black01,
      fontFamily: "ComicSans-Regular",
    },
    separatorStyle: {
      backgroundColor: colors.black01,
      width: width - 60,
      marginHorizontal: 30,
      marginVertical: 5,
      height: 2,
    },
    labelStyle: {
      fontSize: 16,
      color: colors.black01,
      fontFamily: "ComicSans-Bold",
      marginLeft: 10
    },
    switchStyle: {
      display: 'flex',
      flex: 1,
      marginRight: 30,
      alignItems: 'flex-end'
    },
    textInputStyleContainer: {
      display: 'flex',
      flex: 1,
      alignItems: 'flex-end',
      marginRight: 35
    },
    textInputStyle: {
        height: 30,
        width: 38
    }
  });

  