import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconX} from '../../assets';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';
import AsyncStorage from '@react-native-community/async-storage';
import {decrypt} from 'react-native-simple-encryption';
const SECRET_KEY = 'babaay0000'; // You should use a more secure key in a real app

const Splash = ({navigation}) => {
  useEffect(() => {
    // const unsubscribe = Fire.auth().onAuthStateChanged(user => {
    //   setTimeout(() => {
    //     if (user) {
    //       navigation.replace('MainApp');
    //     } else {
    //       navigation.replace('GetStarted');
    //     }
    //   }, 3000);
    // });

    const checkAuthState = async () => {
      const storedCredentials = await AsyncStorage.getItem('userCredentials');
      if (storedCredentials) {
        const {email, password} = JSON.parse(storedCredentials);
        const decryptedPassword = decrypt(SECRET_KEY, password);
        // Manually verify the token with Firebase
        Fire.auth()
          .signInWithEmailAndPassword(email, decryptedPassword)
          .then(() => {
            navigation.replace('MainApp');
          })
          .catch(() => {
            navigation.replace('GetStarted');
          });
      } else {
        Fire.auth().onAuthStateChanged(user => {
          if (user) {
            user.getIdToken().then(token => {
              AsyncStorage.setItem('userToken', token);
              navigation.replace('MainApp');
            });
          } else {
            navigation.replace('GetStarted');
          }
        });
      }
    };

    checkAuthState();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Image
        style={{height: 100, width: 100, borderRadius: 100}}
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
