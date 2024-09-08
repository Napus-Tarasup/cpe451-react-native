import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../Footer';

export default function B1Screen({ navigation, route }) {

  const { selectedProgram } = route.params;
  const [value, setValue] = useState(null);

  return (
    <View style={{ flex: 7, backgroundColor: '#fff' }}>
      <View style={styles.B1Box}>
        <Text style={styles.B1Text}>Health Examination Service</Text>
        <Text style={styles.B1Text}>• Physical examination by a doctor.</Text>
        <Text style={styles.B1Text}>
          • Health assessment from patient history.
        </Text>
        <Text style={styles.B1Text}>• Visual acuity test.</Text>
        <Text style={styles.B1Text}>• Central laboratory analysis.</Text>
        <Text style={styles.B1Text}>• Radiological examination.</Text>
        <Text style={styles.B1Text}>
          • Health examination to assess gynecological cancer risk.
        </Text>
        <Text style={styles.B1Text}>• Bone density test.</Text>
        <Text style={styles.B1Text}>• Vaccination.</Text>
      </View>

      <View style={{ flex: 2, marginTop: 30 }}>
        <TouchableOpacity
          style={styles.B1Button}
          onPress={() => navigation.navigate('B2', { selectedProgram, value })}>
          <Text style={styles.B1ButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  B1Box: {
    flex: 4,
    marginTop: 55,
    width: '80%',
    height: 'auto',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  B1Text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 20,
  },
  B1Button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 180,
    height: 50,
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  B1ButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});

// <View style={styles.B1Box} >
//         <Text style={styles.B1Text}>การบริการการตรวจสุขภาพ</Text>
//         <Text style={styles.B1Text}>• การตรวจร่างกายโดยแพทย์</Text>
//         <Text style={styles.B1Text}>• การประเมินสุขภาพจากประวัติผู้ป่วย</Text>
//         <Text style={styles.B1Text}>• การตรวจสมรรถภาพการมองเห็น</Text>
//         <Text style={styles.B1Text}>• การตรวจวิเคราะห์ทางห้องปฏิบัติการกลาง</Text>
//         <Text style={styles.B1Text}>• การตรวจทางรังสีวิทยา</Text>
//         <Text style={styles.B1Text}>• การตรวจสุขภาพประเมินความเสี่ยงมะเร็งนรีเวช</Text>
//         <Text style={styles.B1Text}>• การตรวจความหนาแน่นของกระดูก</Text>
//         <Text style={styles.B1Text}>• การฉีดวัคซีน</Text>
//       </View>
