import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={[styles.text]}>
        <Text style={[styles.boldText]}>Jersone</Text>
        <Text style={[styles.italicText]}> Danao</Text>
      </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderWidth: 2,
  },
  scrollView: {
    width: '90%',
    height: '80%',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
});

export default App;