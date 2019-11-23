/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  Dimensions,
} from 'react-native';

import ImaagePicker from './ImagePicker';
import Phone from './Phone';
import NetInfo from './NetInfo';

const App: () => React$Node = () => {
  const [component, setComponent] = useState(null);

  const showComponents = () => {
    switch (component) {
      case 'imagePicker':
        return <ImaagePicker />;
      case 'dial':
        return <Phone />;
      case 'netInfo':
        return <NetInfo />;
      default:
        return null;
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {component ? (
          showComponents()
        ) : (
          <>
            <Button
              onPress={() => {
                setComponent('imagePicker');
              }}
              title="Image Picker"
            />
            <Button
              onPress={() => {
                setComponent('dial');
              }}
              title="Open Dial"
            />
            <Button
              onPress={() => {
                setComponent('netInfo');
              }}
              title="NetInfo"
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 30,
  },
});

export default App;
