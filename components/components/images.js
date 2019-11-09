import React from 'react'
import { StyleSheet, View, Image, Dimensions, ImageBackground, Text } from 'react-native'

import Image1 from './../assets/dummy/bookingEvents1.png'
import Image2 from './../assets/dummy/community.png'
const Images = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={Image1} style={styles.images} >
                <Text style={styles.text}>First Image</Text>
            </ImageBackground>
            <Image source={Image2} style={styles.images} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    images: {
        flex: 1,
        width: Dimensions.get('screen').width,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
        // height: 200,
        // borderRadius: 50
    },
    text: {
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0, 0.2)',
        color: '#fff',
        padding: 10
    }
})


export { Images }