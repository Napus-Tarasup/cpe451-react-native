import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../Footer';

export default function A1Screen({ navigation, route }) {

  const { selectedProgram } = route.params;
  const [value, setValue] = useState(null);

  return (
    <View style={{ flex: 6, backgroundColor: '#fff' }}>
      <View style={styles.A1Box}>
        <View>
          <Text style={styles.A1Text}>Pre-Examination Preparation</Text>
          <Text style={styles.A1Text}>
            • Abstain from food and water 8 hours before the test.
          </Text>
          <Text style={styles.A1Text}>
            • Inform your doctor or staff about the medicines you are taking.
          </Text>
          <Text style={styles.A1Text}>• Wear comfortable clothes.</Text>
          <Text style={styles.A1Text}>• Get enough rest.</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.A1Text}>Examination Period</Text>
          <Text style={styles.A1Text}>
            • Depends on the type of examination Generally it takes about 30
            minutes to 1 hour.
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.A1Text}>Examination results</Text>
          <Text style={styles.A1Text}>
            • You will know within 1-2 weeks. The doctor will inform you of the
            test results and explain the test results.
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, marginTop: 30 }}>
        <TouchableOpacity
          style={styles.A1Button}
          onPress={() => navigation.navigate('A2', { selectedProgram, value })}>
          <Text style={styles.A1ButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  A1Box: {
    flex: 4,
    marginTop: 55,
    width: '80%',
    height: 'auto',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  A1Text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 20,
  },
  A1Button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 180,
    height: 50,
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  A1ButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});

