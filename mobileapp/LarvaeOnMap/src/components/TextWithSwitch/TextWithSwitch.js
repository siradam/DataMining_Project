import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './TextWithSwitchStyles';
import colors from '../../styles/colors';
import {Switch} from 'react-native-paper';

const TextWithSwitch = ({textLabel, val}) => {
  const [value, setValue] = useState(val);

  return (
    <View style={styles.settingContainer}>
      <Image
        style={[styles.iconStyle, {height: 25, width: 25}]}
        source={require('../../assets/images/list_icon.png')}
      />
      <Text style={styles.labelStyle}>{textLabel}</Text>
      <View style={styles.switchStyle}>
        <Switch
          value={value}
          onValueChange={() => {
            setValue(!value);
          }}
          color={colors.blue}
        />
      </View>
    </View>
  );
};

export default TextWithSwitch;
