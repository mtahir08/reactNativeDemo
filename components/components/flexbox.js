import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const FlexBox = () => {

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={[styles.text]}>Box 1</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Box 1</Text>
            </View>
            <View style={[styles.box]}>
                <Text style={styles.text}>Box 1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        flex: 1,

    },
    box: {
        backgroundColor: "#5E777C",
        // flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        margin: 5,

    },
    text: {
        color: '#273032',
        textAlign: 'center',
        padding: 10
    }
})


export { FlexBox }