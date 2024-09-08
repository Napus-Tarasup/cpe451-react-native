//import React from 'react';
import { TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Entypo } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';

import A0Screen from './screens/A0Screen';
import A1Screen from './screens/A1Screen';
import A2Screen from './screens/A2Screen';

import B0Screen from './screens/B0Screen';
import B1Screen from './screens/B1Screen';
import B2Screen from './screens/B2Screen';

import C0Screen from './screens/C0Screen';
import C1Screen from './screens/C1Screen';
import C2Screen from './screens/C2Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
        <Stack.Screen
          name="A0"
          component={A0Screen}
          options={({ navigation }) => ({
            title: 'Booking (New Patients)', // เปลี่ยนชื่อ title การจองคิวผู้ป่วยใหม่
            headerTitleAlign: 'center', // กำหนดตำแหน่งตัวอักษร left right center
            headerTitleStyle: {
              fontWeight: 'bold', // กำหนดความหนาตัวอักษร
              fontSize: 22, // กำหนดขนาดตัวอักษร
              color: '#365798',
            },
            headerStyle: {
              backgroundColor: '#EBF2FF', // กำหนดสีพื้นหลัง
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Entypo name="chevron-left" size={24} color="#365798" /> 
              </TouchableOpacity>
            ), 
          })}
        />
        <Stack.Screen
          name="A1"
          component={A1Screen}
          options={({ navigation }) => ({
            title: 'Inspection Details', // รายละเอียดการตรวจ
            headerTitleAlign: 'center', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 22, 
              color: '#365798',
            },
            headerStyle: {
              backgroundColor: '#EBF2FF', 
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('A0')}>
                <Entypo name="chevron-left" size={24} color="#365798" /> 
              </TouchableOpacity>
            ), 
          })}
        />
        <Stack.Screen
          name="A2"
          component={A2Screen}
          options={{headerShown: false}} // ไม่แสดง Header
        />
        <Stack.Screen
          name="B0"
          component={B0Screen}
          options={({ navigation }) => ({
            title: 'Physical Examination', // 
            headerTitleAlign: 'center', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 22, 
              color: '#365798',
            },
            headerStyle: {
              backgroundColor: '#EBF2FF', 
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Entypo name="chevron-left" size={24} color="#365798" />
              </TouchableOpacity>
            ), 
          })}
        />
        <Stack.Screen
          name="B1"
          component={B1Screen}
          options={({ navigation }) => ({
            title: 'Inspection Details', // รายละเอียดการตรวจ 
            headerTitleAlign: 'center', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 22, 
              color: '#365798',
            },
            headerStyle: {
              backgroundColor: '#EBF2FF', 
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Entypo name="chevron-left" size={24} color="#365798" />
              </TouchableOpacity>
            ), 
          })}
        />
        <Stack.Screen
          name="B2"
          component={B2Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="C0"
          component={C0Screen}
          options={({ navigation }) => ({
            title: 'Settings', // การตั้งค่า
            headerTitleAlign: 'center', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 22, 
              color: '#365798',
            },
            headerStyle: {
              backgroundColor: '#EBF2FF', 
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Entypo name="chevron-left" size={24} color="#365798" />
              </TouchableOpacity>
            ), 
          })}
        />
        <Stack.Screen
          name="C1"
          component={C1Screen}
          options={({ navigation }) => ({
            title: 'Change Password', // เปลี่ยนรหัสผ่าน
            headerTitleAlign: 'center', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 22, 
              color: '#365798',
            },
            headerStyle: {
              backgroundColor: '#EBF2FF', 
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('C0')}>
                <Entypo name="chevron-left" size={24} color="#365798" />
              </TouchableOpacity>
            ), 
          })}
        />
        <Stack.Screen
          name="C2"
          component={C2Screen}
          options={({ navigation }) => ({
            title: 'Forgot Password', // ลืมรหัสผ่าน
            headerTitleAlign: 'center', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 22, 
              color: '#365798',
            },
            headerStyle: {
              backgroundColor: '#EBF2FF', 
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('C0')}>
                <Entypo name="chevron-left" size={24} color="#365798" />
              </TouchableOpacity>
            ), 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
