import React from 'react'
import {
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

const KeyBoard = () => {

    return (
        <View style={styles.container}>
            <View style={styles.messages}>
                <ScrollView>

                </ScrollView>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            >
                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Messages"}
                        // onChangeText={(text) => setPassword(text)}
                        // value={password}
                        keyboardType="default"
                    />
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D4E6F1',
        justifyContent: 'space-between',
    },
    box: {
        height: 70,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff'
    },
    messages: {
        flex: 1,
    },
    input: {
        width: Dimensions.get('screen').width - 110,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
    },
    button: {
        width: 90,
        backgroundColor: "#841584",
        borderRadius: 5,
        marginLeft: 5,
        justifyContent: 'center',
        elevation: 2

    },
    text: {
        padding: 10,
        color: "#fff",
        textAlign: 'center',
    }
})


export { KeyBoard }