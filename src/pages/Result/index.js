/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Profile } from '../../components';

const Drawer = createDrawerNavigator();

const ResultScreen = ({ route, navigation }) => {
  const result = route.params.result;
  console.log(result);

  const pelayanan = [
    ['P001', 'Penanganan Pengaduan'],
    ['P002', 'Rehabilitasi Kesehatan Fisik'],
    ['P003', 'Rehabilitasi Kesehatan Psikis'],
    ['P004', 'Rehabilitasi Kesehatan Reproduksi'],
    ['P005', 'Pelayanan Medik Spesialistik Dasar'],
    ['P006', 'Pelayanan Medik Spesialistik Lanjutan'],
    ['P007', 'Rehabilitasi Sosial'],
    ['P008', 'Penegakan Hukum'],
    ['P009', 'Bantuan Hukum'],
    ['P010', 'Pemulangan'],
    ['P011', 'Reintegrasi Sosial'],
  ];

  const convertedResult = result.map((item) => {
    const foundPelayanan = pelayanan.find((service) => service[0] === item);
    return foundPelayanan ? foundPelayanan : null;
  });

  const renderItem = ({ item }) => {
    return (
      <Card>
        <Text style={styles.cardText}>
          {item ? `${item[0]} - ${item[1]}` : 'Tidak ditemukan'}
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
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="top"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#f0f0f0',
            height: 100,
          },
        }}
      >
        <Drawer.Screen name="Result">
          {() => (
            <View style={styles.container}>
              <Card>
                <Text style={styles.title}>Kode:</Text>
                <Text style={styles.result}>{result.join(', ')}</Text>
                <Text style={styles.title}>Hasil:</Text>
                <FlatList
                  data={convertedResult.filter((item) => item !== null)}
                  renderItem={renderItem}
                  keyExtractor={(item) => item[0]}
                />
              </Card>
              <View style={styles.buttonContainer}>
                <Button title="Next" onPress={() => console.log("Next button pressed")} />
              </View>
            </View>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
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
    color: 'black',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ResultScreen;