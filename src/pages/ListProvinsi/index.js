/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { IconX } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const pelayanan = [
  ['Aceh', ['6281168628875']],
  ['Sumatera Utara', ['628126900153']],
  ['Sumatera Barat', ['628116612343']],
  ['Riau', ['62811707098']],
  ['Kepulauan Riau', ['628117711881']],
  ['Jambi', ['628117455411']],
  ['Sumatera Selatan', ['6282177111299']],
  ['Bangka Belitung', ['6285314145959', '6281363341655', '6282266838811']],
  ['Lampung', ['628117911120']],
  ['Bengkulu', ['6285294682493']],
  ['Banten', ['6285286090400', '6287774111311']],
  ['DKI Jakarta', ['6281317617622']],
  ['Jawa Barat', ['6285222206777']],
  ['Jawa Tengah', ['6285799664444']],
  ['Jawa Timur', ['628953488771071']],
  ['Bali', ['(0361)4484315']],
  ['NTB', ['6285858449159']],
  ['Kalimantan Barat', ['6285283302827']],
  ['Kalimantan Tengah', ['628115201515']],
  ['Kalimantan Utara', ['6282253995550']],
  ['Kalimantan Selatan', ['6281253098883']],
  ['Kalimantan Timur', ['628115833121']],
  ['Sulawesi Tengah', ['6281145604320', '6281145604321']],
  ['Sulawesi Selatan', ['6282189059050']],
  ['Sulawesi Barat', ['6282345555188']],
  ['Sulawesi Tenggara', ['62853986282141']],
  ['Sulawesi Utara', ['62812806285077']],
  ['Maluku Utara', ['6281343798226']],
  ['Papua', ['6282198416828']],
];

const ListProvinsi = ({ navigation }) => {
  const handleWhatsAppPress = (number) => {
    const url = `https://wa.me/${number.replace(/\D/g, '')}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height: 40, width: 40, borderRadius: 100 }}
          source={IconX}
        />
        <Text style={styles.headerText}>Daftar Kontak Layanan</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.sectionHeader}>Layanan Kontak berdasarkan Provinsi yang tersedia</Text>
          {pelayanan.map((provinsi, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.cardText}>
                  {provinsi[0]}
                </Text>
                <View style={styles.buttonsContainer}>
                  {provinsi[1].map((number, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={styles.whatsappButton}
                      onPress={() => handleWhatsAppPress(number)}
                    >
                      <Text style={styles.whatsappButtonText}>
                        Nomor Hotline {idx+1}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Result', { result: null })}>
        <Text style={styles.logoutButtonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    color: '#BB2380',
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
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  whatsappButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
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

export default ListProvinsi;
