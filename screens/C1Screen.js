import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Footer from '../Footer';

export default function C1Screen({ navigation }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const onChangeOldPassword = (newOldPassword) => {
    setOldPassword(newOldPassword);
  };
  const onChangeNewPassword = (newNewPassword) => {
    setNewPassword(newNewPassword);
  };
  const onChangeConfirm = (newConfirm) => {
    setConfirm(newConfirm);
  };

  return (
    <View style={{ flex: 6, backgroundColor: '#fff' }}>
      <View style={{ flex: 5 }}>
        <View>
          <Text style={styles.C1TextExplain}>
            * A strong password is required. Please enter 8-12 characters
            including lowercase letters, uppercase letters, and numbers.
          </Text>
        </View>

        <View style={styles.C1Line}></View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.C1TopTextBox}>Old Password</Text>
          <TextInput
            style={styles.C1TextInput}
            onChangeText={onChangeOldPassword}
            value={oldPassword}
            placeholder="Enter your old password"
          />
          <Text style={styles.C1TopTextBox}>New Password</Text>
          <TextInput
            style={styles.C1TextInput}
            onChangeText={onChangeNewPassword}
            value={newPassword}
            placeholder="Enter your new password"
          />
          <Text style={styles.C1TopTextBox}>Confirm New Password</Text>
          <TextInput
            style={styles.C1TextInput}
            onChangeText={onChangeConfirm}
            value={confirm}
            placeholder="Confirm your new password"
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={styles.C1Button}
            onPress={() => navigation.navigate('C0')}>
            <Text style={styles.C1ButtonText}>Confirm New Password</Text>
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
  C1TopTextBox: {
    marginHorizontal: 20,
    marginTop: 10,
    marginLeft: 60,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#365798',
  },
  C1TextInput: {
    height: 40,
    width: '75%',
    marginHorizontal: 18,
    marginTop: 5,
    paddingHorizontal: 20,
    backgroundColor: '#EBF2FF',
    borderRadius: 10,
    alignSelf: 'center',
  },
  C1TextExplain: {
    width: '75%',
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#365798',
  },
  C1Line: {
    width: '75%',
    height: 1,
    alignSelf: 'center',
    borderColor: '#365798',
    borderWidth: 1,
  },
  C1Button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '75%',
    height: 50,
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  C1ButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});
