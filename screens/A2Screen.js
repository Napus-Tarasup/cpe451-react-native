import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Footer from '../Footer';

export default function A2Screen({ navigation, route }) {

  const { selectedProgram } = route.params;

  let program;

  if (selectedProgram === '1') {
    program = <Text style={styles.A2Text01}>Examination Program: Cancer Antigen 19-9 (CA19-9)</Text>;
  } else if (selectedProgram === '2') {
    program = <Text style={styles.A2Text01}>Examination Program: Alpha-Fetoprotein (AFP)</Text>;
  } else if (selectedProgram === '3') {
    program = <Text style={styles.A2Text01}>Examination Program: Carcinoembryonic Antigen (CEA Test)</Text>;
  } else {
    program = <Text style={styles.A2Text01}>Examination Program: No examination program selected</Text>;
  }

  return (
    <View style={{ flex: 6, backgroundColor: '#fff' }}>
      <View style={{ flex: 2 }}>
        <Image 
        style={{justifyContent: 'center', alignSelf: 'center', marginTop: 80}}
        source={require('../assets/image02.png')}/>
      </View>

      <View style={styles.A2Box}>
        <View>
          <Text style={styles.A2Text01}>Patient Number: xxx-xxx-xxxx</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          {program}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.A2Text01}>Queue To Meet Officials: 34</Text>
          <Text style={styles.A2Text01}>Inspection Queue: 54</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.A2Text02}>
            *Please allow time to meet the staff.
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, marginTop: 30 }}>
        <TouchableOpacity
          style={styles.A2Button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.A2ButtonText}>➜</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  A2Box: {
    flex: 2,
    marginTop: 55,
    width: '80%',
    height: 'auto',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  A2Text01: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 20,
  },
  A2Text02: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  A2Button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 180,
    height: 50,
    backgroundColor: '#365798',
    borderRadius: 20,
  },
  A2ButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});
