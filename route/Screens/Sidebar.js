import React from "react";
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { StyleSheet, Dimensions, Image } from "react-native";
import { Icon } from 'native-base';

import profile from './../assets/dummy/profile.png'
import cover from './../assets/dummy/bookingEvents1.png'
const SideBar = props => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.header}
                source={cover}
            >
                <View style={styles.avatar}>
                    <Image
                        source={profile}
                        style={styles.image}
                    />
                </View>
            </ImageBackground>
            <View style={styles.main}>
                <Text style={styles.avatarName}>{"John Deo"}</Text>
                <View style={styles.mainContentWrapper}>
                    <TouchableOpacity style={styles.mainContent} onPress={() => { props.navigation.navigate('Profile') }}>
                        <View style={styles.size}>
                            <Icon name={'person'} type={'MaterialIcons'} style={styles.icon} />
                        </View>
                        <Text style={styles.text}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainContent} onPress={() => { props.navigation.navigate('Settings') }}>
                        <View style={styles.size}>
                            <Icon name={'md-settings'} type={'Ionicons'} style={styles.icon} />
                        </View>
                        <Text style={styles.text}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainContent} onPress={() => { }}>
                        <View style={styles.size}>
                            <Icon name={'logout'} type={'MaterialCommunityIcons'} style={styles.icon} />
                        </View>
                        <Text style={styles.text}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

SideBar.navigationOptions = route => {
};
export { SideBar };


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
        height: Dimensions.get("screen").height / 6 + 70
    },
    avatar: {
        height: 120,
        width: 120,
        position: "absolute",
        bottom: -60
    },
    image: {
        borderRadius: 60,
        height: 120,
        width: 120,
    },
    main: {
        height:
            Dimensions.get("screen").height - Dimensions.get("screen").height / 5,
        marginTop: 65
    },
    avatarName: {
        textAlign: "center",
        paddingTop: 10,
        fontSize: 24,
    },
    brandName: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    mainContentWrapper: {
        marginTop: 45,
        padding: 20
    },
    mainContent: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: 'center',
        borderBottomColor: '#414747',
    },
    icon: {
        fontSize: 20,
        color: '#000',
    },
    size: {
        width: 20,
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
        color: '#000',
    }
});
