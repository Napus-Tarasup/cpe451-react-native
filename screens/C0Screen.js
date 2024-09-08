import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../Footer';

import { MaterialCommunityIcons } from '@expo/vector-icons';
// <MaterialCommunityIcons name="email" size={24} color="black" />

import { FontAwesome6 } from '@expo/vector-icons';
// <FontAwesome6 name="phone" size={24} color="black" />

export default function C0Screen({ navigation }) {
  return (
    <View style={{ flex: 8, backgroundColor: '#fff' }}>
      <View style={{ flex: 5, marginTop: 30 }}>
        <TouchableOpacity
          style={styles.C0Button}
          onPress={() => navigation.navigate('C1')}>
          <Text style={styles.C0ButtonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.C0Button}
          onPress={() => navigation.navigate('C2')}>
          <Text style={styles.C0ButtonText}>Forgot Password</Text>
        </TouchableOpacity>
        <Text style={styles.C0Text01}>Setting Font</Text>

        <Text style={styles.C0Text01}>Setting Theme</Text>

        <Text style={styles.C0Text01}>Contact</Text>

        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <MaterialCommunityIcons
            name="email"
            size={24}
            color="#4C80E4"
            style={{ marginLeft: 70 }}
          />
          <Text style={styles.C0Text02}>bokbak.hosp@gmail.com</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <FontAwesome6
            name="phone"
            size={24}
            color="#4C80E4"
            style={{ marginLeft: 70 }}
          />
          <Text style={styles.C0Text02}>123-456-7890</Text>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          style={styles.C0SignOutButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.C0SignOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  C0SignOutButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: 300,
    height: 50,
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  C0SignOutButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  C0Button: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    width: 300,
    height: 50,
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  C0ButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
  },
  C0Text01: {
    marginHorizontal: 20,
    marginTop: 10,
    marginLeft: 60,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#365798',
  },
  C0Text02: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#365798',
  },
});
