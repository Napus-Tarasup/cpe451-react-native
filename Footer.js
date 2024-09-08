import { View, Text, StyleSheet } from 'react-native';

export default function  Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>BokBak Hospital</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#5889E6',
    alignItems: 'center',
    justifyContent: 'center',
    height: 67,
  },
  footerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E4F0FD',
  },
});