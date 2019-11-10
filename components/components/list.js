import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native'

const arr = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Ahmed" },
    { id: 4, name: "Ahmed" },
    { id: 5, name: "Ahmed" },
    { id: 6, name: "Ahmed" },
    { id: 7, name: "Ahmed" },
    { id: 8, name: "Ahmed" },
    { id: 9, name: "Ahmed" },
    { id: 10, name: "Ahmed" },
    { id: 11, name: "Ahmed" },
    { id: 12, name: "Ahmed" },
    { id: 13, name: "Ahmed" },
    { id: 14, name: "Ahmed" },
    { id: 15, name: "Ahmed" },
    { id: 16, name: "Ahmed" },
    { id: 17, name: "Ahmed" },
    { id: 18, name: "Ahmed" },
]
const List = () => {
    // <ScrollView style={styles.container}>
    //     {arr.map((item, index) => {
    //         return <Text key={index} style={styles.text}>{item.id}</Text>
    //     })}
    // </ScrollView>
    return (
        <FlatList
            data={arr}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Text style={styles.text}>{item.id}</Text>
            )}
        />

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 26,
        padding: 10
    }

})


export { List }