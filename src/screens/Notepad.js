import { Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

import SaveNote from '../utilities/SaveNote';

export default function Notepad({ route }){
    const navigation = useNavigation();
    const { name, value } = route.params
    const [text, setText] = useState(value)

    const button_1 = () => {
        console.log('saving note...')
        SaveNote(test)
        navigation.navigate("Notepad List")
    }

    const button_2 = () => {
        console.log('deleting note...')
        navigation.navigate("Notepad List")
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
                onPress={button_1}
                />
                <Button
                title='Delete Button'
                onPress={button_2}
                />
            </View>
        </View>
    )
}