import { Text, View, TextInput, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { onSnapshot, query, addDoc, collection } from 'firebase/firestore';
import { database, storage } from '../../config/firebase'

const noteCollection = "notes" // Name of the collection of notes

const notepads = [ // TODO: Turn this one into collection found on storage
  {name: "notepad1", value: "notepadtext1"},
  {name: "notepad2", value: "notepadtext2"},
  {name: "notepad3", value: "notepadtext3"},
  {name: "notepad4", value: "notepadtext4"},
  {name: "notepad5", value: "notepadtext5"}
]

function retrieveObjects(){
  console.log('retrieving')
  return notepads
}

export default function NotepadList() {
  const navigation = useNavigation();
  const [newNoteName, setNewNoteName] = useState("");
  const [notepads, setNotepads] = useState([]);

  const button_2 = (notepad) => {
    // TODO: Eventually have a key to update notes on here
    navigation.navigate("Notepad", { name: notepad.name, value: notepad.value} ) 
  }

  const button_3 = () => {
    // TODO: Verify that there are no duplicates
    navigation.navigate("Notepad")
  };

  useEffect(() => {
    setNotepads(retrieveObjects())
  }, [])

  return (
    <SafeAreaView>
      <Text>Notepad List</Text>
      <ScrollView>
        {notepads.map((notepad) => (
          <View>
            <TouchableOpacity
            onPress={() => button_2(notepad)}>
              <Text>{notepad.name}</Text>
            </TouchableOpacity>
          </View>
        ))}

      </ScrollView>
      <View>
        <Text>Create New Note</Text>
      </View>
      <TextInput
      onChangeText={setNewNoteName}>
        <Text>New Note</Text>
      </TextInput>
      <Button
      title='create new note'
      onPress={button_3}
      />
    </SafeAreaView>
  );
}