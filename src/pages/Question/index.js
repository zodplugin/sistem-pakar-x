/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Button} from '../../components';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ILNullPhoto} from '../../assets';
import {getData, storeData} from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';
const QuestionsScreen = () => {
  const navigation = useNavigation();
  const [answers, setAnswers] = useState({});
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });
  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);
  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
      setProfile(res);
    });
  };
  const questions = [
    {
      question: 'Apakah Anda pernah mengalami  ciri - ciri seperti Memukul,menampar, mencekik, menendang, penjambakan, mendorong secara kasar, penginjakan, gigitan, cubitan, melempar barang ke tubuh korban, melukai dengan tangan kosong atau alat/senjata seperti rotan, ikat pinggang, kayu, besi, sundutan rokok, penyiksaan menggunakan benda tajam, seperti : pisau, gunting, setrika serta pembakaran, membunuh ?',
      code: 'C001',
    },
    {
      question: 'Apakah Anda pernah mengalami ciri - ciri seperti Perbuatan dan ucapan yang mengakibatkan ketakutan, hilangnya rasa percaya diri, hilangnya kemampuan untuk bertindak, dan rasa tidak berdaya, seperti berteriak - teriak, mengancam, merendahkan, membentak, ucapan kata-kata kotor, menyalahkan, melabeli, atau juga mengkambinghitamkan, menyumpah serapah, melecehkan, menguntit, dan memata -matai serta tindak-tindakan lain yang menimbulkan rasa takut yang ditujukan kepada korban, merendahkan keyakinan dan kepercayaan korban, memaksa korban mempraktekan ritual dan keyakinan tertentu dan lain-lain ?',
      code: 'C002',
    },
    {
      question: 'Apakah Anda pernah mengalami ciri - ciri seperti Kelalaian memberikan kebutuhan hidup seperti makan, pakaian, perumahan, kesehatan, dan sebagainya. membatasi dan/ atau melarang untuk bekerja yang layak di dalam atau di luar rumah, sehingga korban di bawah kendati orang tersebut. mengambil barang korban, menahan atau tidak memberikan pemenuhan kebutuhan finansial dan sebagainya?',
      code: 'C003',
    },
    {
      question: 'Apakah Anda pernah mengalami ciri - ciri seperti Perkosaan, intimidasi seksual termasuk ancaman atau percobaan perkosaan, pelecehan seksual, prostitusi paksa, perbudakan seksual, pemaksaan perkawinan, termasuk cerai gantung, pemaksaan kehamilan, pemaksaan aborsi, pemaksaan kontrasepsi dan sterilisasi, penyiksaan seksual, penghukuman tidak manusiawi dan bernuansa seksual, praktik tradisi bernuansa seksual yang membahayakan atau mendiskriminasi perempuan, Kontrol seksual, termasuk lewat aturan diskriminatif beralasan moralitas dan agama, menyentuh, meraba, mencium, memaksa korban melihat pornografi, ucapan yang merendahkan, melecehkan atau menyakiti korban. Seseorang laki-laki menaruh penis, jari atau benda apapun kedalam vagina, anus, atau mulut atau tubuh perempuan tanpa sekendak perempuan itu?',
      code: 'C004',
    },
    {
      question:
        'Apakah Anda pernah mengalami ciri - ciri seperti Perekrutan, penampungan, pengiriman, pemindahan atau penerimaan seseorang dengan ancaman kekerasan, penggunaan kekerasan, penculikan, penyekapan, pemalsuan, penipuan, penyalahgunaan kekuasaan/ posisi rentan, penjeratan hutang/ member bayaran/ manfaat yang mengakibatkan orang tereksploitasi?',
      code: 'C005',
    },
    {
      question: 'Apakah Anda pernah mengalami ciri - ciri seperti Pelacuran, kerja atau pelayanan paksa, perbudakan, atau praktek serupa perbudakan, penindasan, pemerasan, pemanfaatan fisik, seksual, organ produksi, atau secara melawan hukum, memindahkan atau mentransplantasi organ dan/atau jaringan tubuh atau memanfaatkan tenaga atau kemampuan seseorang oleh pihak lain untuk mendapatkan keuntungan baik materil maupun immateril ?',
      code: 'C006',
    },
  ];

  const handleOptionSelect = (code, value) => {
    setAnswers({...answers, [code]: value});
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
      console.log('tipe data : '+ typeof(result))
      const myArray = lastElement.split(",");
      console.log('split : ' + myArray)
      AsyncStorage.setItem('myResult', JSON.stringify(myArray))
      .then(() => {
        console.log('myArray is saved to AsyncStorage');
      })
      .catch((error) => {
        console.error('Error saving myArray to AsyncStorage:', error);
      });
      navigation.replace('MainApp', { result: myArray });
    } else {
      alert('Silakan lengkapi semua pertanyaan sebelum menyelesaikan.');
    }
  };

  function forwardChaining(facts) {
    let inferredFacts = {};
    const defaultRules = [
      { conditions: ['K001'], result: ['K001', 'P001', 'P002', 'P003', 'P004', 'P005'] },
      { conditions: ['K002'], result: ['K002', 'P001', 'P002', 'P004', 'P005'] },
      { conditions: ['K003'], result: ['K003', 'P001', 'P002', 'P003', 'P004', 'P006'] },
      { conditions: ['K004'], result: ['K004', 'P001', 'P002', 'P003', 'P004', 'P005'] },
      { conditions: ['K005'], result: ['K005', 'P001', 'P002', 'P003', 'P004', 'P006'] },
      { conditions: ['K006'], result: ['K006', 'P001', 'P002', 'P003', 'P004', 'P006'] },
    ];
    
    function generateCombinations(rules) {
      const combinations = [];
      const allConditions = ['K001', 'K002', 'K003', 'K004', 'K005', 'K006'];
    
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
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map(({question, code}) => (
        <View key={code} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question}</Text>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect(code, true)}>
            <RadioButton.Android
              value="true"
              status={answers[code] === true ? 'checked' : 'unchecked'}
              onPress={() => handleOptionSelect(code, true)}
            />
            <Text style={styles.optionText}>Ya</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect(code, false)}>
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
    textAlign:'justify',
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
