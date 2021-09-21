import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SettingsStyles';
import TextWithInputBoxStyles from '../../components/TextWithInputBox/TextWithInputBox';
import TextWithSwitch from '../../components/TextWithSwitch/TextWithSwitch';
import TextWithCheckBox from '../../components/TextWithCheckBox/TextWithCheckBox';
const Settings = () => {
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
        {/* Text with checkBox*/}
        <TextWithCheckBox textLabel={'Stokes data'} val={false} />

        <View style={styles.separatorStyle} />

        {/* Text with input boxes */}
        <TextWithInputBoxStyles textLabel={'Observation ID'} val={'0'} />
        <TextWithInputBoxStyles textLabel={'Trajectory ID'} val={'4'} />

        <TextWithSwitch textLabel={'Land'} val={true} />

        <View style={styles.separatorStyle} />
        {/* Text with Switches */}
        <TextWithSwitch textLabel={'Temperature'} val={true} />
        <TextWithSwitch textLabel={'Timestamp'} val={true} />
        <TextWithSwitch textLabel={'Z - Value'} val={false} />
      </View>
    </View>
  );
};

export default Settings;
