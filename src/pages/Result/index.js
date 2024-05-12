/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from '../../components';
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
    ['P001', 'Pengaduan Masyarakat'],
    ['P002', 'Penjangkauan Korban'],
    ['P003', 'Pengelolaan Kasus'],
    ['P004', 'Pendampingan Korban'],
    ['P005', 'Mediasi'],
    ['P006', 'Penampungan Sementara'],
    ['K001', 'Kekerasan fisik'],
    ['K002', 'Kekerasan psikologis'],
    ['K003', 'Kekerasan ekonomi'],
    ['K004', 'Kekerasan seksual'],
    ['K005', 'Perdagangan Orang'],
    ['K006', 'Eksploitasi'],
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
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>Result</Text>
      </View>
      <View style={styles.content}>
        <Card>
          <Text style={styles.title}>Kekerasan yang di alami Korban :</Text>
          <FlatList
            data={convertedResultWithK.filter((item) => item !== null)}
            renderItem={renderItem}
            keyExtractor={(item) => item[0]}
          />
          <Text style={styles.title}>Pelayanan yang Tepat untuk Korban :</Text>
          <FlatList
            data={convertedResultWithP.filter((item) => item !== null)}
            renderItem={renderItem}
            keyExtractor={(item) => item[0]}
          />
        </Card>
        <View style={styles.buttonContainer}>
          <Button style={{ paddingVertical: 20, }} title="  Jawab Ulang  " onPress={() => navigation.replace('Question')} />
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 20,
  },
  header: {
    backgroundColor: '#BB2380',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ResultScreen;