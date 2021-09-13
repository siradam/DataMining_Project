import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SettingsStyles';
import {Checkbox} from 'react-native-paper';

import colors from '../../styles/colors';
import TextWithInputBoxStyles from '../../components/TextWithInputBox/TextWithInputBox';
import TextWithSwitch from '../../components/TextWithSwitch/TextWithSwitch';
const Settings = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.sceneWrapper}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingStyle}>{'App Settings'}</Text>
      </View>

      <View style={styles.prefContainer}>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/images/settings_icon.png')}
        />
        <Text style={styles.titleStyle}>{'Preferences'}</Text>
      </View>

      <View style={styles.bodyContainer}>
        <View style={[styles.settingContainer, {marginLeft: 25}]}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={colors.blue}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.textStyle}>{'Stokes data'}</Text>
        </View>

        <View style={styles.separatorStyle} />

        {/* Text with input boxes for obs and traj ids */}
        <TextWithInputBoxStyles textLabel={'Observation ID'} val={'0'} />
        <TextWithInputBoxStyles textLabel={'Trajectory ID'} val={'4'} />

        <TextWithSwitch textLabel={'Land'} val={true} />
          
        <View style={styles.separatorStyle} />
        {/* Text with Switches for obs and traj ids */}
        <TextWithSwitch textLabel={'Temperature'} val={true} />
        <TextWithSwitch textLabel={'Timestamp'} val={true} />
        <TextWithSwitch textLabel={'Z - Value'} val={false} />

      </View>
    </View>
  );
};

export default Settings;
