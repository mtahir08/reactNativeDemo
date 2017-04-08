/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text, TouchableOpacity,
  TouchableHighlight,
  View, Image
} from 'react-native';
import Camera from 'react-native-camera';

class BadInstagramCloneApp extends Component {
  constructor() {
    super();
    this.state = {
      type: Camera.constants.Type.back,
      FlashMode: Camera.constants.FlashMode.auto,
      captureTarget: Camera.constants.CaptureTarget.cameraRoll,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}

          type={this.state.type}
          orientation={Camera.constants.Orientation.auto}
          flashMode={this.state.FlashMode}
          captureTarget = {this.state.captureTarget}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
          <TouchableOpacity onPress={this.changeCameraType}>
            <Image source={this.getCameraType} style={{ backgroundColor: "#000000" }} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeFlashMode}>
            <Image source={this.getFlashMode} style={{ backgroundColor: "#000000" }} ></Image>
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
  get getCameraType() {
    let icon;
    const { back, front } = Camera.constants.Type;
    if (this.state.type == back) {
      icon = require('./assets/ic_camera_rear_white.png');
    } else if (this.state.type == front) {
      icon = require('./assets/ic_camera_front_white.png');
    }
    return icon;
  }

  changeCameraType = () => {
    let newType;
    const { back, front } = Camera.constants.Type;
    var newState = this.state;
    if (newState.type === back) {
      newType = front;
    } else if (newState.type === front) {
      newType = back;
    }
    newState.type = newType
    this.setState(newState);
  }
  get getFlashMode() {
    let flash;
    const { auto, on, off } = Camera.constants.FlashMode;
    console.log(Camera.constants.FlashMode);
    var newState = this.state;
    if (newState.FlashMode == auto) {
      flash = require('./assets/ic_flash_auto_white.png');
    } else if (newState.FlashMode == on) {
      flash = require('./assets/ic_flash_on_white.png');
    } else if (newState.FlashMode == off) {
      flash = require('./assets/ic_flash_off_white.png');
    }
    return flash;
  }

  changeFlashMode = () => {
    const { auto, on, off } = Camera.constants.FlashMode;
    var newState = this.state;
    if (newState.FlashMode == auto) {
      newState.FlashMode = on;
    } else if (newState.FlashMode == on) {
      newState.FlashMode = off;
    } else if (newState.FlashMode == off) {
      newState.FlashMode = auto;
    }
    this.setState(newState);     
    console.log(newState)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});


AppRegistry.registerComponent('AwesomeApplication', () => BadInstagramCloneApp);
