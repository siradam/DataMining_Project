import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SettingsStyles';
import {Checkbox, Switch} from 'react-native-paper';

import colors from '../../styles/colors';
import TextWithInputBoxStyles from '../../components/TextWithInputBox/TextWithInputBox';
const Settings = () => {
  const [checked, setChecked] = useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = useState(true);
  const [isSwitchOn2, setIsSwitchOn2] = useState(false);
  const [isSwitchOn3, setIsSwitchOn3] = useState(true);
  const [isSwitchOn4, setIsSwitchOn4] = useState(true);

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

        <View style={styles.settingContainer}>
          <Image
            style={[styles.iconStyle, {height: 25, width: 25}]}
            source={require('../../assets/images/list_icon.png')}
          />
          <Text style={styles.labelStyle}>{'Land'}</Text>
          <View style={styles.switchStyle}>
            <Switch
              value={isSwitchOn1}
              onValueChange={() => {
                setIsSwitchOn1(!isSwitchOn1);
              }}
              color={colors.blue}
            />
          </View>
        </View>

        <View style={styles.separatorStyle} />

        <View style={styles.settingContainer}>
          <Image
            style={[styles.iconStyle, {height: 25, width: 25}]}
            source={require('../../assets/images/list_icon.png')}
          />
          <Text style={styles.labelStyle}>{'Temperature'}</Text>
          <View style={styles.switchStyle}>
            <Switch
              value={isSwitchOn2}
              onValueChange={() => {
                setIsSwitchOn2(!isSwitchOn2);
              }}
              color={colors.blue}
            />
          </View>
        </View>

        <View style={styles.settingContainer}>
          <Image
            style={[styles.iconStyle, {height: 25, width: 25}]}
            source={require('../../assets/images/list_icon.png')}
          />
          <Text style={styles.labelStyle}>{'Timestamp'}</Text>
          <View style={styles.switchStyle}>
            <Switch
              value={isSwitchOn3}
              onValueChange={() => {
                setIsSwitchOn3(!isSwitchOn3);
              }}
              color={colors.blue}
            />
          </View>
        </View>

        <View style={styles.settingContainer}>
          <Image
            style={[styles.iconStyle, {height: 25, width: 25}]}
            source={require('../../assets/images/list_icon.png')}
          />
          <Text style={styles.labelStyle}>{'Z - Value'}</Text>
          <View style={styles.switchStyle}>
            <Switch
              value={isSwitchOn4}
              onValueChange={() => {
                setIsSwitchOn4(!isSwitchOn4);
              }}
              color={colors.blue}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
