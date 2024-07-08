/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { IconX } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const pelayanan = [
  ['P001', 'Pengaduan Masyarakat'],
  ['P002', 'Penjangkauan Korban'],
  ['P003', 'Pengelolaan Kasus'],
  ['P004', 'Pendampingan Korban Layanan Hukum'],
  ['P005', 'Pendampingan Korban Layanan Kesehatan'],
  ['P006', 'Pendampingan Korban Layanan Rehabilitasi Sosial'],
  ['P007', 'Pendampingan Korban Reintegrasi Sosial'],
  ['P008', 'Mediasi'],
  ['P009', 'Penampungan Sementara'],
];

const kekerasan = [
  ['K001', 'Kekerasan fisik'],
  ['K002', 'Kekerasan psikis'],
  ['K003', 'Penelantaran'],
  ['K004', 'Kekerasan seksual'],
  ['K005', 'Trafficking (Perdagangan Orang)'],
  ['K006', 'Eksploitasi'],
  ['K007', 'Lainnya'],
];

const ListGejala = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height: 40, width: 40, borderRadius: 100 }}
          source={IconX}
        />
        <Text style={styles.headerText}>Informasi</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.sectionHeader}>Bentuk Kekerasan</Text>
          {kekerasan.map((a, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Detail', { type: 'kekerasan', id: a[0] })}>
              <Text style={styles.cardText}>{a[1]}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.sectionHeader}>Jenis Layanan</Text>
          {pelayanan.map((a, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Detail', { type: 'pelayanan', id: a[0] })}>
              <Text style={styles.cardText}>{a[1]}</Text>
            </TouchableOpacity>
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
    marginVertical: 5,
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
    padding: 20,
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
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: '#FF66C4',
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
