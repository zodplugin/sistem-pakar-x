import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {IconX} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';
import {encrypt} from 'react-native-simple-encryption';

const SECRET_KEY = 'babaay0000'; // You should use a more secure key in a real app


const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(async res => {
        dispatch({type: 'SET_LOADING', value: false});
        const encryptedPassword = encrypt(SECRET_KEY, form.password);
        const email = form.email;
        await AsyncStorage.setItem(
          'userCredentials',
          JSON.stringify({email, password: encryptedPassword}),
        );
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showError("Email/Password Salah");
      });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <Image
          style={{ height:100, width:100, borderRadius:100 }}
          source={IconX}
        />
        <Text style={styles.title}></Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {paddingHorizontal: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});