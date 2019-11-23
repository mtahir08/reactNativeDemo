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
import ImagePicker from 'react-native-image-picker';

const App: () => React$Node = () => {
  const [image, setImage] = useState('');
  const openImagePicker = () => {
    const options = {
      title: 'Select Background',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(source);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImage(source);
      }
    });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button onPress={openImagePicker} title="open" />
        <Image source={image} style={styles.image} />
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
