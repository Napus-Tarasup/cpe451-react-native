import { Text, View, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styls.HomeView}>
      <View>
        <Text style={styls.HomeText}>Home Screen</Text>
      </View>
      <View style={styls.HomeButton}>
        <Button 
          title="Go to A" 
          onPress={() => navigation.navigate('A0')} />
      </View>
      <View style={styls.HomeButton}>
        <Button 
          title="Go to B" 
          onPress={() => navigation.navigate('B0')} />
      </View>
      <View style={styls.HomeButton}>
        <Button 
          title="Go to C" 
          onPress={() => navigation.navigate('C0')} />
      </View>
    </View>
  );
}

const styls = StyleSheet.create({
  HomeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  HomeButton: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  }
});
