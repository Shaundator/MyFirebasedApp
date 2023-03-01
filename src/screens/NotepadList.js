import { Text, View, TextInput, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { onSnapshot, query, addDoc, collection } from 'firebase/firestore';
import { database, storage } from '../../config/firebase'

const noteCollection = "test" // Name of the collection of notes

const notepads = [ // TODO: Turn this one into collection found on storage
  {name: "notepad1", value: "notepadtext1"},
  {name: "notepad2", value: "notepadtext2"},
  {name: "notepad3", value: "notepadtext3"},
  {name: "notepad4", value: "notepadtext4"},
  {name: "notepad5", value: "notepadtext5"}
]

const readDB = async() => {
  const collectionRef = collection(database, noteCollection)
  const q = query(collectionRef, ref => ref.orderBy('createdAt', 'desc'));
  onSnapshot(q, snapshot => {
    const _notes = [];
    snapshot.forEach(doc => {
      _notes.push({
        ...doc.data(),
        key: doc.id
      })
    })
    _notes.forEach((test) => {
      console.log('\nobject found:')
      console.log('key:' + test.key)
      console.log('name: ' + test.name)
      console.log('value: ' + test.value)
    })
    console.log('returning notes')
    return _notes
  })
}


export default function NotepadList() {
  const navigation = useNavigation();
  const [notepads2, setNotepads] = useState([]);


  console.log('returning page')
  return (
    <SafeAreaView>
      <Text>Notepad List</Text>
      <ScrollView>
        {notepads.map((notepad) => (
          <View>
              <Text>{notepad.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}


/*
NOTES;

*/