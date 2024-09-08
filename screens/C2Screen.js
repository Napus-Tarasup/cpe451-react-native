import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Footer from '../Footer';

export default function C2Screen({ navigation }) {
  const [otp, setOTP] = useState();

  const onChangeOTP = (newOTP) => {
    setOTP(newOTP);
  };

  return (
    <View style={{ flex: 6, backgroundColor: '#fff' }}>
      <View style={{ flex: 5, marginTop: 150 }}>
        <View>
          <Text style={styles.C2Text01}>Forgot Password</Text>
        </View>

        <View style={styles.C2Line}></View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.C2Text02}>Channel For Sending OTP</Text>
          <Text style={styles.C2Text02}>123-456-7890</Text>
        </View>

        <View>
          <TextInput
            style={styles.C2TextInput}
            onChangeText={onChangeOTP}
            value={otp}
            placeholder="Enter OTP code"
          />
          <TouchableOpacity
            style={styles.C2Button}
            onPress={() => navigation.navigate('C0')}>
            <Text style={styles.C2ButtonText}>Send OTP Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 15 }}
            onPress={() => navigation.navigate('C0')}>
            <Text style={styles.C2NextButton}>Send New OTP Code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  C2Text01: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#365798',
  },
  C2Text02: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    color: '#365798',
  },
  C2Line: {
    width: '75%',
    height: 1,
    alignSelf: 'center',
    borderColor: '#365798',
    borderWidth: 1,
  },
  C2TextInput: {
    height: 50,
    width: 275,
    marginHorizontal: 18,
    marginTop: 15,
    paddingHorizontal: 20,
    backgroundColor: '#9ECDFF',
    borderRadius: 10,
    alignSelf: 'center',
  },
  C2Button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 275,
    height: 50,
    marginTop: 15,
    backgroundColor: '#365798',
    borderRadius: 10,
  },
  C2ButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  C2NextButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#365798',
  },
});
