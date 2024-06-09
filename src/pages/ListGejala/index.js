/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar,Card } from 'react-native';
import {Fire} from '../../config';
import {showError} from '../../utils';
import {IconX} from '../../assets';
const ListGejala = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Image
              style={{ height:40, width:40, borderRadius:100 }}
              source={IconX}
            />
            <Text style={styles.headerText}>List Layanan Kekerasan</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.cardText}>
                Test
            </Text>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.logoutButtonText}>Kembali</Text>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
  cardText: {
    color: 'white',
    backgroundColor: '#BB2380',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical:-15,
    borderRadius: 12,
    fontSize: 16,
  },
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
export default ListGejala;
