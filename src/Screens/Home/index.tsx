import {View, Text, SafeAreaView} from 'react-native';
import HeaderComponent from '../../Components/Header';
import FooterComponent from '../../Components/Footer';

const Home = ({navigation}) => {
  const HandleClick = () => {
    navigation.navigate('home');
  };
  const HandleClick1 = () => {
    navigation.navigate('addPage');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <HeaderComponent HeaderText={'Home'} />
      </View>
      <View
        style={{
          flex: 1,
          borderWidth: 3,
          marginHorizontal: 10,
          borderRadius: 15,
          paddingBottom: 40,
        }}>
        <View></View>
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 40,
        }}>
        <View
          style={{
            borderWidth: 1,
            width: 90,
            height: 90,
            borderRadius: 15,
          }}></View>
        <View
          style={{
            borderWidth: 1,
            width: 90,
            height: 90,
            borderRadius: 15,
          }}></View>
        <View
          style={{
            borderWidth: 1,
            width: 90,
            height: 90,
            borderRadius: 15,
          }}></View>
      </View>
      <View>
        <FooterComponent
          onFirstImagePress={HandleClick}
          onSecondImagePress={HandleClick1}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
