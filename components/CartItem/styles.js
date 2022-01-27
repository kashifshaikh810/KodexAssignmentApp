import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  cartContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  imageBack: {
    flex: 1,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  subTitleCTA: {
    textDecorationLine: 'underline',
  },
});

export default styles;
