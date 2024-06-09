/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import {Fire} from '../../config';
import {showError} from '../../utils';

const Dashboard = ({navigation}) => {
    const signOut = () => {
        Fire.auth()
          .signOut()
          .then(() => {
            navigation.replace('GetStarted');
          })
          .catch(err => {
            showError(err.message);
          });
      };
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>SISTEM PAKAR DIAGNOSA JENIS KEKERASAN</Text>
          </View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Question')}>
              {/* <Image source={require('./assets/diagnose.png')} style={styles.icon} /> */}
              <Text style={styles.buttonText}>Diagnosa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              {/* <Image source={require('./assets/disease.png')} style={styles.icon} /> */}
              <Text style={styles.buttonText}>Gejala dan Layanan Kekerasan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Register')}>
              {/* <Image source={require('./assets/about.png')} style={styles.icon} /> */}
              <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF66C4',
    },
    header: {
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
      backgroundColor: '#FFFFFF',
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
      fontSize: 16,
      fontWeight: 'bold',
      color:'black',
    },
    logoutButton: {
      backgroundColor: '#2196F3',
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
