/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, SectionList,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from '../../components';
import {IconX} from '../../assets';
const ResultScreen = ({ route, navigation }) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const { result: routeResult } = route.params;
    if (!routeResult) {
      AsyncStorage.getItem('myResult')
        .then((value) => {
          if (value !== null) {
            const retrievedArray = JSON.parse(value);
            console.log('Retrieved myArray from AsyncStorage:', retrievedArray);
            setResult(retrievedArray);
          } else {
            console.log('No myArray found in AsyncStorage');
          }
        })
        .catch((error) => {
          console.error('Error retrieving myArray from AsyncStorage:', error);
        });
    } else {
      setResult(routeResult);
    }
  }, [route.params]);
  const pelayanan = [
    ['K001', 'Kekerasan fisik'],
    ['K002', 'Kekerasan psikis'],
    ['K003', 'Penelantaran '],
    ['K004', 'Kekerasan seksual'],
    ['K005', 'Trafficking (Perdagangan Orang)'],
    ['K006', 'Eksploitasi'],
    ['K007', 'Lainnya'],
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
  const resultWithK = [];
  const resultWithP = [];

  result.forEach((item) => {
    if (item.startsWith('K')) {
      resultWithK.push(item);
    } else if (item.startsWith('P')) {
      resultWithP.push(item);
    }
  });
  
  const convertedResultWithK = resultWithK.map((item) => {
    const foundPelayanan = pelayanan.find((service) => service[0] === item);
    return foundPelayanan ? foundPelayanan : null;
  });
  
  const convertedResultWithP = resultWithP.map((item) => {
    const foundPelayanan = pelayanan.find((service) => service[0] === item);
    return foundPelayanan ? foundPelayanan : null;
  });

  const renderItem = ({ item }) => {
    return (
      <Card style={styles.cardItem}>
        <Text style={styles.cardText}>
          {item ? `${item[1]}` : 'Tidak ditemukan'}
        </Text>
      </Card>
    );
  };

  const Card = ({ children }) => (
    <View style={styles.card}>
      {children}
    </View>
  );
  const sections = [
    { title: 'Kekerasan yang dialami Korban', data: convertedResultWithK  },
    { title: 'Layanan yang tepat untuk Korban', data: convertedResultWithP }
  ];
  const sectionsNull = [
    { title: 'Kekerasan yang dialami Korban', data: [["","Tidak Ditemukan"]]  },
    { title: 'Layanan yang tepat untuk Korban', data: [["","Tidak Ditemukan"]] }
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height:40, width:40, borderRadius:100 }}
          source={IconX}
        />
        <Text style={styles.headerText}>Result</Text>
      </View>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Card>
              <SectionList
              sections={resultWithK.length != 0 && resultWithP.length != 0 ? sections : sectionsNull}
              renderItem={({ item }) => renderItem({item})}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>{title}</Text>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </Card>
          <View style={styles.buttonContainer}>
            <Button  title="  Jawab Ulang  " onPress={() => navigation.replace('Question')} />
          </View>
          <View style={styles.buttonContainer}>
            <Button  title="  Lihat Daftar Kontak Layanan  " onPress={() => navigation.replace('ListProvinsi')} />
          </View>
        </View>
      </View>
    </ScrollView>
    <View style={styles.footer}>
      <Button
        title="Kembali Ke Dashboard"
        onPress={() => navigation.replace('MainApp')}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer :{
    padding:20,
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
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex:1,
    margin: 20,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  result: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    color: "black",
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  cardText: {
    color: 'white',
    backgroundColor: '#BB2380',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical:-15,
    borderRadius: 12,
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
    gap:10,
  },
});

export default ResultScreen;