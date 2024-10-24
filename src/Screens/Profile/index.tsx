import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import HeaderComponent from '../../Components/Header';
import FooterComponent from '../../Components/Footer';

const Profile = ({navigation}) => {
  const HandleClick = () => {
    navigation.navigate('home');
  };
  const HandleClick1 = () => {
    navigation.navigate('addPage');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <View>
          <HeaderComponent HeaderText={'Profile'} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4,
          }}>
          <Text style={{fontSize: 25, fontWeight: '500'}}>Profile Page </Text>
          <View>
            <TouchableOpacity style={{marginVertical: 10}}>
              <Text style={{color: 'blue'}}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={HandleClick}>
              <Text style={{color: 'blue'}}>Go Home</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FooterComponent
            onFirstImagePress={HandleClick}
            onSecondImagePress={HandleClick1}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
