import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import CarsList from './components/CarsList/index';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
      <CarsList />
      {/* <CartItem
        name="Modal S"
        tagline="Order Online For"
        taglineCTA="Touchless Delivery"
        image={require('./assets/images/ModelX.jpeg')}
      /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
