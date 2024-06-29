/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import {Fire} from '../../config';
import {showError} from '../../utils';
import {IconX} from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';
const Dashboard = ({navigation}) => {
    const signOut = () => {
        Fire.auth()
          .signOut()
          .then(async () => {
            await AsyncStorage.removeItem('userCredentials');
            navigation.replace('GetStarted');
          })
          .catch(err => {
            showError(err.message);
          });
      };
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Image
              style={{ height:40, width:40, borderRadius:100 }}
              source={IconX}
            />
            <Text style={styles.headerText}>Dashboard</Text>
          </View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Question')}>
              {/* <Image source={require('./assets/diagnose.png')} style={styles.icon} /> */}
              <Text style={styles.buttonText}>Identifikasi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ListProvinsi')}>
              {/* <Image source={require('./assets/diagnose.png')} style={styles.icon} /> */}
              <Text style={styles.buttonText}>Lihat Daftar Kontak Layanan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ListGejala')}>
              {/* <Image source={require('./assets/disease.png')} style={styles.icon} /> */}
              <Text style={styles.buttonText}>Informasi terkait Bentuk Kekerasan dan Jenis Layanan</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header: {
      flexDirection: 'row',
      gap:20,
      backgroundColor: '#BB2380',
      padding: 20,
      alignItems: 'center',
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#FF66C4',
      padding: 20,
      marginVertical: 10,
      alignItems: 'center',
      borderRadius: 10,
      width: '80%',
      elevation: 5,
    },
    icon: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color:'white',
    },
    logoutButton: {
      backgroundColor: '#BB2380',
      padding: 15,
      alignItems: 'center',
      margin: 20,
      borderRadius: 10,
    },
    logoutButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default Dashboard;
