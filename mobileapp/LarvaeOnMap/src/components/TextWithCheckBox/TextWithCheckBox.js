import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './TextWithCheckBoxStyles';
import colors from '../../styles/colors';
import {Checkbox} from 'react-native-paper';

const TextWithCheckBox = ({textLabel, val}) => {
  const [checked, setChecked] = useState(val);

  return (
    <View style={styles.settingContainer}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        color={colors.blue}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={styles.textStyle}>{textLabel}</Text>
    </View>
  );
};

export default TextWithCheckBox;
