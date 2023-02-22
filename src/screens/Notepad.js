import { Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

import { collection, addDoc, query, onSnapshot } from 'firebase/firestore'
import { database } from '../../config/firebase';

export default function Notepad({ route }){
    const navigation = useNavigation();
    const { name, value } = route.params
    
    const [text, setText] = useState(value)

    const button_1 = () => {
        console.log('deleting note')
        navigation.navigate("Notepad List")
    }
    const button_2 = () => {
        const noteCollection = "notes"
        console.log('saving note:(' + name + ',' + text + ')')
        const test = {name: name, value: value}
        addDoc(collection(database, noteCollection), test)
    }

    return (
        <View>
            <View>
                <Text>{name}</Text>
            </View>
            <TextInput
            onChangeText={setText}>
                <Text>{text}</Text>
            </TextInput>
            <View>
                <Button
                title='Save Button'
                onPress={button_2}
                />
                <Button
                title='Delete Button'
                onPress={button_1}
                />
            </View>
        </View>
    )
}