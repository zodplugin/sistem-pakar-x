import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    console.log(title)
    if (title === 'Profile') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Result') {
      return active ? <IconMessagesActive/> : <IconMessages  />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      {/* <Icon /> */}
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 14,
    fontWeight:'bold',
    color: active ? colors.text.primary: 'white' ,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
