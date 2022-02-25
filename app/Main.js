import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useActionSheet } from '@expo/react-native-action-sheet'

const Main = () => {
    const { showActionSheetWithOptions } = useActionSheet()

    const options = {
        options: ['Tirar foto', 'Escolher existente', 'Cancelar'],
        cancelButtonIndex: 2,
        textStyle: {
            flex: 1,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },
    }

    const onSelectOption = (optionIndex) => {
        console.log('optionIndex', optionIndex)
    }

    const onPressActionMenu = () => {
        showActionSheetWithOptions(options, onSelectOption)
    }

    return (

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={onPressActionMenu}>
                <Text>Abrir menu de ações</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Main