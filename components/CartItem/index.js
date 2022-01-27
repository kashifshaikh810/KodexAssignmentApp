import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CartItem = props => {
  const {name, tagline, image, taglineCTA} = props.car;
  return (
    <View style={styles.cartContainer}>
      <ImageBackground source={image} style={styles.imageBack}>
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>
            {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <StyledButton
            type="primary"
            content={'Custom Order'}
            onPress={() => {}}
          />
          <StyledButton
            type="secondary"
            content={'Existing Inventory'}
            onPress={() => {}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CartItem;
