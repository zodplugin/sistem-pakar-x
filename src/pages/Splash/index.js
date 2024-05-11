import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconX} from '../../assets';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Image
          style={{ height:100, width:100, borderRadius:100 }}
          source={IconX}
        />
      <Text style={styles.title}>X</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
