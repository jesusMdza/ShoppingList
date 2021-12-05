import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');

  const handleChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input} onChangeText={handleChange} />
      <TouchableOpacity style={styles.button} onPress={() => addItem(text)}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8, 
    fontSize: 16
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default AddItem;
