import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const HandleUserInput = () => {
  const [text, setText] = useState('');

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 50}}>
        {text.split(' ').map(word => word && '🐞')}
      </Text>
    </View>
  );
};

export default HandleUserInput;
