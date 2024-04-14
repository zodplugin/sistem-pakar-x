import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import { RadioButton } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native';

const QuestionsScreen = () => {
  const navigation = useNavigation();
  const [answers, setAnswers] = useState({});
  const questions = [
    {
      question: "Apakah Anda pernah mengalami kekerasan fisik?",
      code: "K001"
    },
    {
      question: "Apakah Anda pernah mengalami kekerasan psikologis?",
      code: "K002"
    },
    {
      question: "Apakah Anda pernah mengalami kekerasan ekonomi?",
      code: "K003"
    },
    {
      question: "Apakah Anda pernah mengalami kekerasan seksual?",
      code: "K004"
    },
    {
      question: "Apakah Anda pernah menjadi korban perdagangan orang (trafficking)?",
      code: "K005"
    },
    {
      question: "Apakah Anda pernah dieksploitasi?",
      code: "K006"
    },
  ];

  const handleOptionSelect = (code, value) => {
    setAnswers({ ...answers, [code]: value });
  };

  const isAllQuestionsAnswered = () => {
    return Object.keys(answers).length === questions.length;
  };

  const handleSubmitAnswers = () => {
    if (isAllQuestionsAnswered()) {
      const result = forwardChaining(answers);
      navigation.navigate('Result', { result });
    } else {
      alert("Silakan lengkapi semua pertanyaan sebelum menyelesaikan.");
    }
  };

  const forwardChaining = (answeredValues) => {
    let result = "Belum Diketahui"; // Hasil awal
    console.log(answeredValues);
    const rules = [
      {
        condition: () => answeredValues["K001"], // K001: Kekerasan fisik
        result: "Kekerasan fisik"
      },
      {
        condition: () => answeredValues["K002"], // K002: Kekerasan psikologis
        result: "Kekerasan psikologis"
      },
      {
        condition: () => answeredValues["K003"], // K003: Kekerasan ekonomi
        result: "Kekerasan ekonomi"
      },
      {
        condition: () => answeredValues["K004"], // K004: Kekerasan seksual
        result: "Kekerasan seksual"
      },
      {
        condition: () => answeredValues["K005"], // K005: Perdagangan Orang (trafficking)
        result: "Perdagangan Orang (trafficking)"
      },
      {
        condition: () => answeredValues["K006"], // K006: Eksploitasi
        result: "Eksploitasi"
      },
    ];

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      if (rule.condition()) {
        result = rule.result;
        break; 
      }
    }

    return result;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map(({question, code}) => (
        <View key={code} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question}</Text>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect(code, true)}
          >
            <RadioButton.Android
              value="true"
              status={answers[code] === true ? 'checked' : 'unchecked'}
              onPress={() => handleOptionSelect(code, true)}
            />
            <Text style={styles.optionText}>Ya</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect(code, false)}
          >
            <RadioButton.Android
              value="false"
              status={answers[code] === false ? 'checked' : 'unchecked'}
              onPress={() => handleOptionSelect(code, false)}
            />
            <Text style={styles.optionText}>Tidak</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Button
        title="Selesai Menjawab"
        onPress={handleSubmitAnswers}
        disabled={!isAllQuestionsAnswered()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'blue',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default QuestionsScreen;
