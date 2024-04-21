/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ResultScreen = ({ route }) => {
  const { result } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hasil Kuis:</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={() => console.log("Next button pressed")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  result: {
    color: 'black',
    fontSize: 18,
    marginBottom: 20, // Margin bawah 20
  },
  buttonContainer: {
    marginTop: 20, // Margin atas 20
  },
});

export default ResultScreen;
