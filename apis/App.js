import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasCameraPermission, setHasCameraPermission] = useState(null)

  const componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  }


  const setCamera = () => {
    setType(type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back,
    )
  }

  useEffect(() => {
    componentDidMount();
  }, [])

  return (
    hasCameraPermission === null ?
      <View /> :
      hasCameraPermission === false ?
        <View>
          <Text>No Camera permission!</Text>
        </View> :
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => { setCamera() }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
