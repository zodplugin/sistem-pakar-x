/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const detailData = {
  kekerasan: {
    K001: 'Kekerasan fisik adalah perbuatan yang mengakibatkan rasa sakit, jatuh sakit, atau luka berat (Pasal 6 UU PKDRT Jo. Pasal 89 KUHP, Pasal 80 ayat (1) huruf d UU PA).',
    K002: 'Kekerasan psikis adalah perbuatan yang mengakibatkan ketakutan, hilangnya rasa percaya diri, hilangnya kemampuan untuk bertindak, rasa tidak berdaya, dan/atau penderitaan psikis berat pada seseorang (Pasal 7 UU PKDRT).',
    K003: 'Penelantaran yaitu tindakan yang menelantarkan orang dalam lingkup rumah tangganya, padahal menurut hukum yang berlaku baginya atau karena persetujuan atau perjanjian ia wajib memberikan kehidupan, perawatan, atau pemeliharaan kepada orang tersebut (Pasal 9 ayat (1) UU PKDRT) tindakan yang mengakibatkan ketergantungan ekonomi dengan cara membatasi dan/atau melarang untuk bekerja yang layak di dalam atau diluar rumah, sehingga korban berada dibawah kendali orang tersebut (Pasal 9 ayat (2) UU PKDRT).',
    K004: 'Kekerasan seksual adalah pemaksaan hubungan seksual yang dilakukan terhadap orang yang menetap dalam lingkup rumah tangga tersebut dan/atau pemaksaan hubungan seksual terhadap salah seorang dalam lingkup rumah tangganya dengan orang lain, untuk tujuan komersial dan/atau tujuan tertentu (Pasal 8, UU KDRT) dengan kekerasan atau ancaman memaksa perempuan bukan istrinya bersetubuh dengan dia (KUHP Pasal 285) dengan kekerasan atau ancaman kekerasan memaksa seseorang untuk melakukan atau membiarkan melakukan perbuatan cabul (KUHP Pasal 289) dengan sengaja melakukan kekerasan atau ancaman kekerasan, memaksa tipu muslihat, serangkaian kebohongan, atau membujuk untuk melakukan atau membiarkan dilakukan perbuatan cabul (Pasal 81 UU PA).',
    K005: 'Trafficking (Perdagangan Orang) adalah tindakan perekrutan, penampungan, pengiriman, pemindahan atau penerimaan dengan seseorang dengan ancaman kekerasan, penggunaan kekerasan, penculikan, penyekapan, pemalsuan, penipuan, penyalahgunaan kekuasaan/posisi rentan, penjeratan hutang/memberi bayaran/manfaat sehingga memperoleh persetujuan dari orang yang memegang kendali atas orang lain tersebut baik yang dilakukan di dalam negara maupun antar negara, untuk tujuan eksploitasi/mengakibatkan orang tereksploitasi.',
    K006: 'Eksploitasi adalah tindakan dengan atau tanpa persetujuan korban yang meliputi tetapi tidak terbatas pada pelacuran, kerja atau pelayanan paksa, perbudakan atau praktik serupa perbudakan, penindasan, pemerasan, pemanfaatan fisik, seksual, organ reproduksi, atau secara melawan hukum memindahkan atau mentransplantasi organ dan/atau jaringan tubuh atau memanfaatkan tenaga dan kemampuan seseorang oleh pihak lain untuk mendapatkan keuntungan baik materiil maupun immaterial serta tindakan yang mengeksploitasi ekonomi atau seksual dengan maksud menguntungkan diri sendiri atau orang lain.',
    K007: 'Lainnya adalah tindakan kekerasan selain fisik, psikis, seksual, penelantaran, perdagangan orang dan eksploitasi yang berupa ancaman kekerasan adalah setiap perbuatan secara melawan hukum berupa ucapan, tulisan, gambar, simbol, atau gerakan tubuh, baik dengan atau tanpa menggunakan sarana yang menimbulkan rasa takut atau mengekang kebebasan hakiki seseorang (Pasal 1 butir 12 UU PTPPO). pemaksaan adalah suatu keadaan di mana seseorang/korban disuruh melakukan sesuatu sedemikian rupa sehingga orang itu melakukan sesuatu berlawanan dengan kehendak sendiri (Penjelasan Pasal 18 UU PTPPO).',
  },
  pelayanan: {
    P001: 'Pengaduan Masyarakat adalah fungsi layanan untuk menerima laporan masyarakat atas kasus perempuan dan Anak yang diterima oleh UPTD PPA.',
    P002: 'Penjangkauan Korban adalah fungsi pelayanan untuk mencapai Penerima Manfaat yang tidak atau belum mendapatkan akses layanan atau dilaporkan oleh pihak lain.',
    P003: 'Pengelolaan Kasus adalah fungsi layanan untuk memenuhi hak dan kebutuhan seluruh Penerima Manfaat yang sedang dilayani oleh UPTD PPA dengan cara menyediakan, merujuk, atau melimpahkan.',
    P004: 'Pendampingan Korban adalah fungsi layanan yang diberikan oleh pendamping PPA kepada setiap Penerima Manfaat secara langsung untuk memastikan terpenuhinya kebutuhan layanan korban. Pendampingan Layanan Hukum adalah upaya memfasilitasi Penerima Manfaat mengakses layanan hukum dan mendampingi Penerima Manfaat saat menjalaninya serta memastikan layanan diberikan dengan ramah perempuan dan Anak.',
    P005: 'Pendampingan Layanan Kesehatan adalah upaya memfasilitasi Penerima Manfaat mengakses layanan kesehatan dan mendampingi Penerima Manfaat saat menjalani prosesnya serta memastikan layanan diberikan dengan ramah perempuan dan Anak.',
    P006: 'Pendampingan Layanan Rehabilitasi Sosial merupakan upaya memfasilitasi Penerima Manfaat mengakses layanan rehabilitasi sosial dan mendampingi Penerima Manfaat saat menjalani prosesnya serta memastikan layanan diberikan dengan ramah perempuan dan Anak.',
    P007: 'Pendampingan Reintegrasi Sosial merupakan upaya memfasilitasi Penerima Manfaat untuk mengakses layanan reintegrasi sosial dan mendampingi Penerima Manfaat saat menjalani prosesnya serta memastikan layanan diberikan dengan ramah perempuan dan Anak.',
    P008: 'Mediasi adalah fungsi layanan dengan cara penyelesaian sengketa melalui proses perundingan untuk memperoleh kesepakatan para pihak dengan dibantu oleh mediator.',
    P009: 'Penampungan Sementara adalah fungsi layanan untuk menyediakan atau memberikan akses tempat perlindungan sementara yang mengutamakan keamanan dan keselamatan, serta fasilitas sandang, pangan, dan pendukung kebutuhan Penerima Manfaat.',
  },
};

const Detail = ({route, navigation}) => {
  const {type, id} = route.params;
  const detailText = detailData[type][id];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Detail Informasi</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.detailText}>{detailText}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
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
  detailText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
  },
  backButton: {
    backgroundColor: '#FF66C4',
    padding: 15,
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Detail;
