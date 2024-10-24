import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const FooterComponent = ({
  onFirstImagePress,
  onSecondImagePress,
  onThirdImagePress,
  firstImageSource,
  secondImageSource,
  thirdImageSource,
}) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={onFirstImagePress}>
        <Image
          source={require('../../Assests/home.png')}
          style={styles.footerImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSecondImagePress}>
        <Image
          source={require('../../Assests/profile.png')}
          style={styles.footerImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onThirdImagePress}>
        <Image
          source={require('../../Assests/list.png')}
          style={styles.footerImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8', // Change this to the desired background color
  },
  footerImage: {
    width: 40,
    height: 40,
  },
});

export default FooterComponent;
