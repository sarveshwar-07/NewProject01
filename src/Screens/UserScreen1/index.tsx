import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const UserScreen1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, marginTop: 100}}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 28,
            marginVertical: 40,
            flexDirection: 'column',
          }}>
          <Image
            source={require('../../Assests/rocket.png')}
            style={{height: 200, width: 200}}
          />
          <Text
            style={{
              fontSize: 35,
              fontWeight: '700',
              color: '#9945ed',
              paddingVertical: 20,
            }}>
            Instamobile
          </Text>
          <Text style={{color: '#acaaad', fontSize: 15}}>
            Use this codebase to start a new firebase mobile app in few minutes
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: 28,
            paddingTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('userScreen2')}
            style={{
              borderWidth: 1,
              borderRadius: 70,
              height: 49,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
              backgroundColor: '#9945ed',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                padding: 'auto',
                color: '#fffefe',
              }}>
              {' '}
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('userScreen4')}
            style={{
              borderWidth: 1,
              borderRadius: 70,
              height: 49,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#9945ed',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                padding: 'auto',
                color: '#9945ed',
              }}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserScreen1;
