/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {Linking, Platform} from 'react-native';

const App: () => React$Node = () => {
  useEffect(() => {
    let phoneNumber = '1234567890';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${phoneNumber}`;
    } else {
      phoneNumber = `telprompt:${phoneNumber}`;
    }

    Linking.openURL(phoneNumber);
  }, []);

  return <></>;
};

export default App;
