import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import Footer from '../Footer';
import * as SQLite from 'expo-sqlite';

// drop-down
const data = [
  { label: 'CA19-9 Test', value: '1' },
  { label: 'AFP Test', value: '2' },
  { label: 'CEA Test', value: '3' },
];

const db = SQLite.openDatabase('database.db');

export default function B0Screen({ navigation }) {
  // textinput
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const onChangeFname = (newFname) => {
    setFname(newFname);
  };
  const onChangeLname = (newLname) => {
    setLname(newLname);
  };

  // drop-down
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.B0label, isFocus]}></Text>;
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
  const [items02, setItems02] = useState([]);

  // สร้างตารางและคอลัมน์
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items02 (id INTEGER PRIMARY KEY AUTOINCREMENT, fname TEXT, lname TEXT, image TEXT);'
      );
    });
  }, []);

  // เรียกข้อมูลจากตารางใน console.log
  const loadItems02 = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM items02;', [], (_, { rows }) => {
        const items02 = rows['_array'];
        setItems02(items02);
      });
    });
  };

  // เพิ่มข้อมูลลงตาราง
  const addItem = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO items02 (fname, lname, image) VALUES (?, ?, ?);',
          [fname, lname, image],
          () => {
            // After adding the item, reload the items
            loadItems02();
          }
        );
      },
      null,
      () => {}
    );
  };

  // Log items to console
  console.log(items02);

  return (
    <View style={{ flex: 5, backgroundColor: '#fff' }}>
      <View style={{ flex: 4 }}>
        <Text style={styles.B0TopTextBox}>Frist Name</Text>
        <TextInput
          style={styles.B0TextInput}
          onChangeText={onChangeFname}
          value={fname}
          placeholder="Enter your first name"
        />

        <Text style={styles.B0TopTextBox}>Last Name</Text>
        <TextInput
          style={styles.B0TextInput}
          onChangeText={onChangeLname}
          value={lname}
          placeholder="Enter your last name"
        />

        <Text style={styles.B0TopTextBox}>ID Card</Text>

        <TouchableOpacity
          onPress={pickImage}
          style={styles.B0ButtonImage}></TouchableOpacity>
        <Text style={styles.B0ButtonText}>Upload ID Card</Text>

        <View style={styles.B0Line}></View>

        <View style={{ alignSelf: 'center', width: '75%', marginTop: 20 }}>
          {renderLabel()}
          <Dropdown
            style={styles.B0dropdown}
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

        <View style={styles.B0Line}></View>

        <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => {
            addItem(fname, lname, image);
            navigation.navigate('B1', { selectedProgram: value });
          }}>
          <Text style={styles.B0NextButton}>Next ➜</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  B0TopTextBox: {
    marginHorizontal: 20,
    marginTop: 10,
    marginLeft: 60,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#365798',
  },
  B0TextInput: {
    height: 40,
    width: '75%',
    marginHorizontal: 18,
    marginTop: 5,
    paddingHorizontal: 20,
    backgroundColor: '#EBF2FF',
    borderRadius: 10,
    alignSelf: 'center',
  },
  B0NextButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#365798',
  },
  B0ButtonImage: {
    height: 120,
    width: '75%',
    marginTop: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
  },
  B0ButtonText: {
    marginTop: 8,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#365798',
  },
  B0dropdown: {
    height: 50,
    backgroundColor: '#365798',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  B0label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  B0Line: {
    width: '75%',
    height: 1,
    alignSelf: 'center',
    borderColor: '#365798',
    borderWidth: 1,
    marginTop: 20,
  },
});
