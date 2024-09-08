import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// ส่วนท้ายของหน้า
import Footer from '../Footer';
// การอัพโหลดภาพ
import * as ImagePicker from 'expo-image-picker';
// drop-down
import { Dropdown } from 'react-native-element-dropdown';
// sqlite
import * as SQLite from 'expo-sqlite';

// ข้อมูล drop-down
const data = [
  { label: 'CA19-9 Test', value: '1' },
  { label: 'AFP Test', value: '2' },
  { label: 'CEA Test', value: '3' },
];

// เชื่อมต่อกับ SQLite Database
const db = SQLite.openDatabase('database.db');

export default function A0Screen({ navigation }) {
  // textinput
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [idCard, setIdCard] = useState('');

  const onChangeFname = (newFname) => {
    setFname(newFname);
  };
  const onChangeLname = (newLname) => {
    setLname(newLname);
  };
  const onChangeAddress = (newAddress) => {
    setAddress(newAddress);
  };
  const onChangeDate = (newDate) => {
    setDate(newDate);
  };
  const onChangeIdCard = (newIdCard) => {
    setIdCard(newIdCard);
  };

  // drop-down
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.A0label, isFocus]}></Text>;
    }
    return null;
  };

  // การอัพโหลดภาพ
  const [image, setImage] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    // ตรวจสอบว่าผู้ใช้ยกเลิกการเลือกรูปภาพหรือไม่
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      // ถ้าผู้ใช้ยกเลิกการเลือกรูปภาพ คุณอาจต้องรักษาค่าเดิมของ image โดยไม่เปลี่ยนแปลง
      // สามารถทำได้โดยไม่ต้องทำอะไรเพิ่มเติมในส่วนนี้
    }
  };

  // ตาราง
  const [items01, setItems01] = useState([]);

  // สร้างตารางและคอลัมน์
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items01 (id INTEGER PRIMARY KEY AUTOINCREMENT, fname TEXT, lname TEXT, address TEXT, date TEXT, idCard INTEGER, image TEXT);'
      );
    });
  }, []);

  // เรียกข้อมูลจากตารางใน console.log
  const loadItems01 = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM items01;', [], (_, { rows }) => {
        const items01 = rows['_array'];
        setItems01(items01);
      });
    });
  };

  // เพิ่มข้อมูลลงตาราง
  const addItem = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO items01 (fname, lname, address, date, idCard, image) VALUES (?, ?, ?, ?, ?, ?);',
          [fname, lname, address, date, idCard, image],
          () => {
            // After adding the item, reload the items
            loadItems01();
          }
        );
      },
      null,
      () => {}
    );
  };

  // Log items to console
  console.log(items01);

  return (
    <View style={{ flex: 5, backgroundColor: '#fff' }}>
      <View style={{ flex: 4 }}>
        <Text style={styles.A0TopTextBox}>Frist Name</Text>
        <TextInput
          style={styles.A0TextInput}
          onChangeText={onChangeFname}
          value={fname}
          placeholder="Enter your first name"
        />
        <Text style={styles.A0TopTextBox}>Last Name</Text>
        <TextInput
          style={styles.A0TextInput}
          onChangeText={onChangeLname}
          value={lname}
          placeholder="Enter your last name"
        />
        <Text style={styles.A0TopTextBox}>Address</Text>
        <TextInput
          style={styles.A0TextInput}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Enter your address"
        />
        <Text style={styles.A0TopTextBox}>Date</Text>
        <TextInput
          style={styles.A0TextInput}
          onChangeText={onChangeDate}
          value={date}
          placeholder="Enter date: DD/MM/YYYY"
        />
        <Text style={styles.A0TopTextBox}>ID Card</Text>
        <TextInput
          style={styles.A0TextInput}
          onChangeText={onChangeIdCard}
          value={idCard}
          keyboardType="numeric"
          placeholder="Enter your ID card"
        />

        <TouchableOpacity
          onPress={pickImage}
          style={styles.A0ButtonImage}></TouchableOpacity>
        <Text style={styles.A0ButtonText}>Upload ID Card</Text>

        <View style={styles.A0Line}></View>

        <View style={{ alignSelf: 'center', width: '75%', marginTop: 20 }}>
          {renderLabel()}
          <Dropdown
            style={styles.A0dropdown}
            placeholderStyle={{
              marginLeft: 20,
              fontWeight: 'bold',
              fontSize: 16,
              color: '#fff',
            }}
            selectedTextStyle={{
              color: '#fff',
              fontWeight: 'bold',
              marginLeft: 20,
            }}
            itemTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}
            containerStyle={{ backgroundColor: '#365798', borderRadius: 8 }}
            itemContainerStyle={{ borderRadius: 8 }}
            activeColor="#5889E6"
            iconColor="#fff"
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select program' : ''}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.A0Line}></View>

        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => {
            addItem(fname, lname, address, date, idCard, image);
            navigation.navigate('A1', { selectedProgram: value });
          }}>
          <Text style={styles.A0NextButton}> Next ➜</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ข้อความด้านบน TextInput
  A0TopTextBox: {
    marginHorizontal: 20,
    marginTop: 6,
    marginLeft: 60,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#365798',
  },
  // กล่องสำหรับพิมพ์ข้อความ
  A0TextInput: {
    height: 40,
    width: '75%',
    marginHorizontal: 18,
    marginTop: 5,
    paddingHorizontal: 20,
    backgroundColor: '#EBF2FF',
    borderRadius: 10,
    alignSelf: 'center',
  },
  // ปุ่มกดอัพรูปภาพ
  A0ButtonImage: {
    height: 120,
    width: '75%',
    marginTop: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
  },
  // ข้อความอธิบายปุ่ม
  A0ButtonText: {
    marginTop: 8,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#365798',
  },
  // ปุ่มกดไปหน้าถัดไป
  A0NextButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#365798',
  },
  A0dropdown: {
    height: 50,
    backgroundColor: '#365798',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  A0label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  A0Line: {
    width: '75%',
    height: 1,
    alignSelf: 'center',
    borderColor: '#365798',
    borderWidth: 1,
    marginTop: 20,
  },
});
