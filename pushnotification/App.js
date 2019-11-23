/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase'
const App = () => {

  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log("before fcmToken: ", fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log("after fcmToken: ", fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  const requestPermission = async () => {
    firebase.messaging().requestPermission()
      .then(() => {
        getToken();
      })
      .catch(error => {
        console.log('permission rejected');
      });
  }

  const checkPermission = async () => {
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log("Permission granted");
          getToken();
        } else {
          console.log("Request Permission");
          requestPermission();
        }
      });
  }

  useEffect(() => {
    checkPermission()
  })

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
