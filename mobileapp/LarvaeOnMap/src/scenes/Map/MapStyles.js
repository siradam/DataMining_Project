import {
    StyleSheet, Dimensions
  } from "react-native";
  import colors from "../../styles/colors";
  const {
    width, height
  } = Dimensions.get("window");

  export default StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      
    },
    
  });

  