import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './TextWithInputBoxStyles';
import colors from '../../styles/colors';
import {TextInput} from 'react-native-paper';

const TextWithInputBoxStyles = ({textLabel, val}) => {

  const [value, setValue] = useState(val);

  return (
    <View style={styles.settingContainer} >
      <Image
        style={[styles.iconStyle, {height: 25, width: 25}]}
        source={require('../../assets/images/list_icon.png')}
      />
      <Text style={styles.labelStyle}>{textLabel}</Text>
      <View style={styles.textInputStyleContainer}>
        <TextInput
          maxLength={1}
          theme={{colors: {primary: colors.blue}}}
          mode={'outlined'}
          value={value}
          onChangeText={value => setValue(value)}
          selectionColor={colors.black01}
          underlineColor={colors.blue}
          outlineColor={colors.black01}
          style={styles.textInputStyle}
        />
      </View>
    </View>
  );
};

export default TextWithInputBoxStyles;
