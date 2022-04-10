import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
// import CarsList from './components/CarsList/index';
// import Header from './components/Header';

import Screen from './components/AssignmentAppComponents/Screens/Screen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* assignment app component  */}
      <Screen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
