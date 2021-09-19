import {
    StyleSheet, Dimensions
  } from "react-native";

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject, 
    marginBottom: 25
  },
  switchStyle: {
    position: "absolute",
    top: 10,
    left: 10,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
  }
});

  