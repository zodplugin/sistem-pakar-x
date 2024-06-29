/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { Button } from '../../components';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { IconX } from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';

const QuestionsScreen = () => {
  const navigation = useNavigation();
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'apakah anda mengalami tindak kekerasan seperti Memukul,menampar, mencekik, menendang, penjambakan, mendorong secara kasar, penginjakan, gigitan, cubitan, melempar barang ke tubuh korban, melukai dengan tangan kosong atau alat/senjata seperti rotan, ikat pinggang, kayu, besi, sundutan rokok, penyiksaan menggunakan benda tajam, seperti : pisau, gunting, setrika serta pembakaran, membunuh?',
      code: 'C001',
    },
    {
      question: 'apakah anda mengalami tindak kekerasan seperti Perbuatan dan ucapan yang mengakibatkan ketakutan, hilangnya rasa percaya diri, hilangnya kemampuan untuk bertindak, dan rasa tidak berdaya, seperti berteriak - teriak, mengancam, merendahkan, membentak, ucapan kata-kata kotor, menyalahkan, melabeli, atau juga mengkambinghitamkan, menyumpah serapah, melecehkan, menguntit, dan memata -matai serta tindak-tindakan lain yang menimbulkan rasa takut yang ditujukan kepada korban, merendahkan keyakinan dan kepercayaan korban, memaksa korban mempraktekan ritual dan keyakinan tertentu dan lain-lain?',
      code: 'C002',
    },
    {
      question: 'apakah anda mengalami tindak kekerasan seperti Kelalaian memberikan kebutuhan hidup seperti makan, pakaian, perumahan, kesehatan, dan sebagainya. membatasi dan/ atau melarang untuk bekerja yang layak di dalam atau di luar rumah, sehingga korban di bawah kendati orang tersebut. mengambil barang korban, menahan atau tidak memberikan pemenuhan kebutuhan finansial dan sebagainya?',
      code: 'C003',
    },
    {
      question: 'apakah anda mengalami tindak kekerasan seperti Perkosaan, intimidasi seksual termasuk ancaman atau percobaan perkosaan, pelecehan seksual, prostitusi paksa, perbudakan seksual, pemaksaan perkawinan, termasuk cerai gantung, pemaksaan kehamilan, pemaksaan aborsi, pemaksaan kontrasepsi dan sterilisasi, penyiksaan seksual, penghukuman tidak manusiawi dan bernuansa seksual, praktik tradisi bernuansa seksual yang membahayakan atau mendiskriminasi perempuan, Kontrol seksual, termasuk lewat aturan diskriminatif beralasan moralitas dan agama, menyentuh, meraba, mencium, memaksa korban melihat pornografi, ucapan yang merendahkan, melecehkan atau menyakiti korban. Seseorang laki-laki menaruh penis, jari atau benda apapun kedalam vagina, anus, atau mulut atau tubuh perempuan tanpa sekendak perempuan itu?',
      code: 'C004',
    },
    {
      question: 'apakah anda mengalami tindak kekerasan seperti Perekrutan, penampungan, pengiriman, pemindahan atau penerimaan seseorang dengan ancaman kekerasan, penggunaan kekerasan, penculikan, penyekapan, pemalsuan, penipuan, penyalahgunaan kekuasaan/ posisi rentan, penjeratan hutang/ member bayaran/ manfaat yang mengakibatkan orang tereksploitasi?',
      code: 'C005',
    },
    {
      question: 'apakah anda mengalami tindak kekerasan seperti Pelacuran, kerja atau pelayanan paksa, perbudakan, atau praktek serupa perbudakan, penindasan, pemerasan, pemanfaatan fisik, seksual, organ produksi, atau secara melawan hukum, memindahkan atau mentransplantasi organ dan/atau jaringan tubuh atau memanfaatkan tenaga atau kemampuan seseorang oleh pihak lain untuk mendapatkan keuntungan baik materil maupun immateril?',
      code: 'C006',
    },{
      question: 'apakah anda mengalami tindak kekerasan seperti Perbuatan melawan hukum bebrupa ucapan, tulisan, gambar, simbol atau gerakan tubuh, baik dengan atau tanpa menggunakan saran yang menimbulkan rasa takut atau mengekang kebebasan hakiki seseorang,. pemaksaan disuruh melakukan sesuatu sedemikian rupa berlawanan dengan kehendak sendiri',
      code: 'C007',
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
      const trueKeys = Object.keys(answers).filter(key => answers[key]);
      const result = forwardChaining(answers);
      const resultArray = Object.keys(result).filter(key => result[key]);
      const lastElement = resultArray[resultArray.length - 1];
      console.log('test : ' + trueKeys);
      console.log('result :' + resultArray)
      console.log('tipe data : ' + typeof (result))
      const myArray = lastElement.split(",");
      console.log('split : ' + myArray)
      AsyncStorage.setItem('myResult', JSON.stringify(myArray))
        .then(() => {
          console.log('myArray is saved to AsyncStorage');
        })
        .catch((error) => {
          console.error('Error saving myArray to AsyncStorage:', error);
        });
      navigation.replace('Result', { result: myArray });
    } else {
      alert('Silakan lengkapi semua pertanyaan sebelum menyelesaikan.');
    }
  };

  const handleNext = () => {
    if (answers[currentQuestion.code] === undefined) {
      Alert.alert('Peringatan', 'Silakan pilih jawaban sebelum melanjutkan.');
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  function forwardChaining(facts) {
    let inferredFacts = {};
    const defaultRules = [
      { conditions: ['K001'], result: ['K001', 'P001', 'P002', 'P003', 'P004', 'P005', 'P006','P008'] },
      { conditions: ['K002'], result: ['K002', 'P003', 'P004', 'P006', 'P008'] },
      { conditions: ['K003'], result: ['K003', 'P001', 'P002', 'P003', 'P004', 'P007','P008'] },
      { conditions: ['K004'], result: ['K004', 'P001', 'P003', 'P004', 'P005', 'P008'] },
      { conditions: ['K005'], result: ['K005', 'P001', 'P002', 'P003', 'P004', 'P005','P007','P009'] },
      { conditions: ['K006'], result: ['K006', 'P001', 'P003', 'P004', 'P005', 'P006','P007'] },
      { conditions: ['K007'], result: ['K007', 'P001', 'P003', 'P004'] },
    ];

    function generateCombinations(rules) {
      const combinations = [];
      const allConditions = ['K001', 'K002', 'K003', 'K004', 'K005', 'K006', 'K007'];

      function generateCombinationsRecursive(currentConditions, currentResult) {
        const combination = {
          conditions: [...currentConditions],
          result: [...currentResult],
        };
        combinations.push(combination);

        for (const condition of allConditions) {
          if (!currentConditions.includes(condition)) {
            const newConditions = [...currentConditions, condition];
            const newResult = [...new Set([...currentResult, ...rules.find(rule => rule.conditions.includes(condition)).result])];
            generateCombinationsRecursive(newConditions, newResult);
          }
        }
      }

      generateCombinationsRecursive([], []);
      return combinations;
    }

    const kombinasi = generateCombinations(defaultRules);

    const rules = [
      { conditions: ['C001'], result: ['K001'] },
      { conditions: ['C002'], result: ['K002'] },
      { conditions: ['C003'], result: ['K003'] },
      { conditions: ['C004'], result: ['K004'] },
      { conditions: ['C005'], result: ['K005'] },
      { conditions: ['C006'], result: ['K006'] },
      { conditions: ['C007'], result: ['K007'] },
    ];

    rules.push(...kombinasi);

    while (true) {
      let newInferences = false;

      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const conditions = rule.conditions;
        const result = rule.result;

        const allConditionsInferred = conditions.every(condition => inferredFacts[condition] || facts[condition]);

        const resultNotInferred = !inferredFacts[result];

        if (allConditionsInferred && resultNotInferred) {
          inferredFacts[result] = true;
          newInferences = true;
        }
      }

      if (!newInferences) {
        break;
      }
    }

    return inferredFacts;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height: 40, width: 40, borderRadius: 100 }}
          source={IconX}
        />
        <Text style={styles.headerText}>Question</Text>
      </View>
      <ScrollView style={styles.container1}>
        <View key={currentQuestion.code} style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect(currentQuestion.code, true)}>
            <RadioButton.Android
              value="true"
              status={answers[currentQuestion.code] === true ? 'checked' : 'unchecked'}
              onPress={() => handleOptionSelect(currentQuestion.code, true)}
            />
            <Text style={styles.optionText}>Ya</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect(currentQuestion.code, false)}>
            <RadioButton.Android
              value="false"
              status={answers[currentQuestion.code] === false ? 'checked' : 'unchecked'}
              onPress={() => handleOptionSelect(currentQuestion.code, false)}
            />
            <Text style={styles.optionText}>Tidak</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.navigationButtons}>
          {currentQuestionIndex > 0 && (
            <Button
              title="   Prev   "
              onPress={handlePrev}
              style={styles.navigationButton}
            />
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <Button
              title="   Next   "
              onPress={handleNext}
              style={styles.navigationButton}
              disabled={answers[currentQuestion.code] === undefined}
            />
          ) : (
            <Button
              title="   Selesai Menjawab   "
              onPress={handleSubmitAnswers}
              disabled={!isAllQuestionsAnswered()}
              style={styles.navigationButton}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 20,
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
  container1: {
    flexGrow: 1,
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
    textAlign: 'justify',
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
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigationButton: {
    padding: 10,
  },
});

export default QuestionsScreen;
