import {
    StyleSheet, Dimensions
  } from "react-native";
  import colors from "../../styles/colors";
  const {
    width, height
  } = Dimensions.get("window");

  export default StyleSheet.create({
    sceneWrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: colors.white
    },
    closeIcon: {
      display: 'flex',
      position: 'absolute',
      top: 10,
      right: 15,
      zIndex: 1,
    },
    iconStyle: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
    },
    bgImageContainer: {
      flex: 0.3,
      backgroundColor: colors.grey01,
      display: "flex",
    },
    imgStyle: {
      width: width - 10,
      resizeMode: 'contain',
      height: 150,
      marginTop: 5
    },
    infoContainer: {
      flex: 0.7,
      backgroundColor: colors.grey01,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      justifyContent: 'center'
    },
    boxContainer: {
      backgroundColor: '#fff',
      borderColor: colors.black01,
      borderWidth: 2,
      height: 350,
      width: width - 40
    },
    titleContainer: {
      flex: 0.1,
      display: "flex",
      backgroundColor: colors.blue,
      borderColor: colors.black01,
      borderWidth: 2,
      alignItems: "center",
      alignSelf: 'center',
      width: 120,
      marginTop: 10,
      justifyContent: 'center'
    },
    titleTextStyle: {
      fontSize: 18,
      color: colors.white,
      fontFamily: "OpenSans-RegularBold",
    },
    imgContainer: {
      flex: 0.2,
      display: "flex",
      backgroundColor: colors.white,
      alignItems: "center"
    },
    fishImgStyle: {
      height: 60,
      width: width,
      resizeMode: 'contain',
    },
    descContainer: {
      flex: 0.7,
      display: "flex",
      backgroundColor: colors.white,
      paddingTop: 15
    },
    textStyle: {
      fontSize: 14,
      color: colors.black01,
      fontFamily: "ComicSans-Bold",
      marginLeft: 30,
      marginVertical: 5,
    }

    
  });

  