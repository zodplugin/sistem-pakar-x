/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { IconX } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const pelayanan = [
  ['Aceh', '08116808875'],
  ['Sumatera Utara', '08126900153'],
  ['Sumatera Barat', '08116612343'],
  ['Riau', '0811707098'],
  ['Kepulauan Riau', '08117711881'],
  ['Jambi', '08117455411'],
  ['Sumatera Selatan', '082177111299'],
  ['Bangka Belitung', '085314145959 - 081363341655 - 082266838811'],
  ['Lampung', '08117911120'],
  ['Bengkulu', '085294682493'],
  ['Banten', '085286090400 - 087774111311'],
  ['DKI Jakarta', '081317617622'],
  ['Jawa Barat', '085222206777'],
  ['Jawa Tengah', '085799664444'],
  ['Jawa Timur', '08953488771071'],
  ['Bali', '(0361)4484315'],
  ['NTB', '085858449159'],
  ['Kalimantan Barat', '085283302827'],
  ['Kalimantan Tengah', '08115201515'],
  ['Kalimantan Utara', '082253995550'],
  ['Kalimantan Selatan', '081253098883'],
  ['Kalimantan Timur', '0811 5833121'],
  ['Sulawesi Tengah', '081145604320 - 081145604321'],
  ['Sulawesi Selatan', '082189059050'],
  ['Sulawesi Barat', '082345555188'],
  ['Sulawesi Tenggara', '085398082141'],
  ['Sulawesi Utara', '081280085077'],
  ['Maluku Utara', '081343798226'],
  ['Papua', '082198416828'],
];


const ListProvinsi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height: 40, width: 40, borderRadius: 100 }}
          source={IconX}
        />
        <Text style={styles.headerText}>List Provinsi</Text>
      </View>
      <ScrollView>
      <View style={styles.content}>
        <Text style={styles.sectionHeader}>List Kontak</Text>
        {pelayanan.map((a, index) => (
          <Text key={index} style={styles.cardText}>
             {a[0]} - {a[1]}
          </Text>
        ))}
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('MainApp')}>
        <Text style={styles.logoutButtonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardText: {
    textAlign: 'left',
    color: 'white',
    backgroundColor: '#BB2380',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5, // Changed to give some space between cards
    borderRadius: 12,
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    gap: 20,
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
    alignItems: 'flex-start',
    padding: 20
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
    color: 'white',
  },
  sectionHeader: {
    fontSize: 18,
    color: "black",
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
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

export default ListProvinsi;
