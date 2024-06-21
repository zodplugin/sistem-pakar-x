/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { IconX } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const pelayanan = [
  ['P001', 'Pengaduan Masyarakat'],
  ['P002', 'Penjangkauan Korban'],
  ['P003', 'Pengelolaan Kasus'],
  ['P004', 'Pendampingan Korban'],
  ['P005', 'Pendampingan Layanan Hukum'],
  ['P006', 'Pendampingan Layanan Kesehatan'],
  ['P007', 'Pendampingan Layanan Rehabilitasi Sosial'],
  ['P008', 'Pendampingan Reintegrasi Sosial'],
  ['P009', 'Mediasi'],
  ['P010', 'Penampungan Sementara'],
];

const kekerasan = [
  ['K001', 'Kekerasan fisik'],
  ['K002', 'Kekerasan psikis'],
  ['K004', 'Penelantaran '],
  ['K005', 'Kekerasan seksual'],
  ['K006', 'Trafficking (Perdagangan Orang)'],
  ['K007', 'Eksploitasi'],
  ['K008','Lainnya'],
]

const ListGejala = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height: 40, width: 40, borderRadius: 100 }}
          source={IconX}
        />
        <Text style={styles.headerText}>List Layanan Kekerasan</Text>
      </View>
      <ScrollView>
      <View style={styles.content}>
        <Text style={styles.sectionHeader}>List Pelayanan</Text>
        {pelayanan.map((a, index) => (
          <Text key={index} style={styles.cardText}>
            {a[1]}
          </Text>
        ))}
        <Text style={styles.sectionHeader}>List Kekerasan</Text>
        {kekerasan.map((a, index) => (
          <Text key={index} style={styles.cardText}>
            {a[1]}
          </Text>
        ))}
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Dashboard')}>
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

export default ListGejala;
