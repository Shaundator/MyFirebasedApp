import { Text, View, TextInput, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

const notepads = [
  {name: "notepad1", value: "notepadtext1"},
  {name: "notepad2", value: "notepadtext2"},
  {name: "notepad3", value: "notepadtext3"},
  {name: "notepad4", value: "notepadtext4"},
  {name: "notepad5", value: "notepadtext5"}
]

export default function NotepadList() {
  const navigation = useNavigation();
  const [newNoteName, setNewNoteName] = useState("");

  const button_2 = (notepad) => {
    console.log('clicked note')
    console.log('note name: ' + notepad.name)
    console.log('note value: ' + notepad.value)
    navigation.navigate("Notepad", { name: notepad.name, value: notepad.value} )
  }

  const button_3 = () => {
    console.log('creating new note: ' + newNoteName)
    navigation.navigate("Notepad")
  };

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