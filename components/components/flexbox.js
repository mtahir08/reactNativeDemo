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
    // return (

    //     <View style={styles.container}>
    //         <View style={styles.box}>
    //             <Text style={styles.text}>1</Text>
    //         </View>
    //         <View style={styles.middleBox}>
    //             <Text style={styles.text}>2</Text>
    //         </View>
    //         <View style={styles.box}>
    //             <Text style={styles.text}>3</Text>
    //         </View>
    //     </View>
    // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D4E6F1',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#5E777C',
        padding: 20,
        flex: 1,
        margin: 5
    },
    middleBox: {
        backgroundColor: '#f4f4f4',
        flex: 4,
        padding: 20,

        alignSelf: 'center',
        margin: 5
    },
    text: {
        fontSize: 30,
        color: '#273032',
        textAlign: 'center',
        padding: 10
    }
})


export { FlexBox }