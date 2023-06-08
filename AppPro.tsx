import React from 'react';
import {Text, View, StyleSheet, useColorScheme, Button} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
      <Button title="Ghayoor" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  whiteText: {
    color: '#fff',
  },

  darkText: {
    color: '#000',
  },
});

export default AppPro;
