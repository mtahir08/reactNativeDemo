import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

export default function App() {
  let [name, setName] = useState('')
  let [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder={"Enter name"}
        onChangeText={(text) => setName(text)}
        value={name}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder={"Password"}
        onChangeText={(text) => setPassword(text)}
        value={password}
        keyboardType="default"
      />
      <TouchableOpacity
        onPress={() => {
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Press Me</Text>
      </TouchableOpacity>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "gray",
    marginBottom: 20
  },
  input: {
    width: Dimensions.get('screen').width - 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10
  },
  button: {
    width: Dimensions.get('screen').width - 100,
    backgroundColor: "#841584",
    borderRadius: 30,
  },
  text: {
    padding: 10,
    color: "#fff",
    textAlign: 'center',
  }
});
