import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import AppNavigation from './navigation'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
