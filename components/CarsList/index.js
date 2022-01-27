import React from 'react';
import {View, Text, FlatList, ScrollView, Dimensions} from 'react-native';
import styles from './styles';
import Cars from './Cars';
import CartItem from '../CartItem/index';

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Cars}
        renderItem={({item, index}) => <CartItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
