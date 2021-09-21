import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  settingContainer: {
    flex: 0.2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginVertical: 10,
  },
  iconStyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  labelStyle: {
    fontSize: 16,
    color: colors.black01,
    fontFamily: 'ComicSans-Bold',
    marginLeft: 10,
  },
  textInputStyleContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 35,
  },
  textInputStyle: {
    height: 30,
    width: 38,
  },
});
