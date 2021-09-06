import {
    StyleSheet, Dimensions
  } from "react-native";
  import colors from "../../styles/colors";
  const {
    width, height
  } = Dimensions.get("window");

  export default StyleSheet.create({
    homeWrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: colors.white
    },
  
    headlineWrapper: {
      flex: 0.1,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      marginBottom: 15
    },
    titleText: {
      fontSize: 40,
      color: colors.blue,
      fontWeight: "900",
      fontFamily: "OpenSans-SemiBold",
    },
    imageContainer: {
      flex: 0.3,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      marginHorizontal: 15,
    },
    imgStyle: {
      width: width - 30,
      height: 225,
      resizeMode: 'contain',
    },
    textWrapper: {
      display: "flex",
      height: 230,
      margin: 15,
    },
    textStyle: {
      fontSize: 14,
      color: colors.black02,
      fontFamily: "OpenSans-RegularItalic",
      fontWeight: '600'
    },
    buttonStyle: {
      justifyContent: "center",
      height: 40,
      width: 180,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
    }

    
  });

  