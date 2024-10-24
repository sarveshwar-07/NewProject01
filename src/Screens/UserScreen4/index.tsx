import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Appearance,
} from 'react-native';

const UserScreen4 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('userScreen1')}>
            <Image
              source={require('../../Assests/arrow.png')}
              style={{height: 40, width: 40}}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 30, marginVertical: 10, flex: 1}}>
          <Text style={{fontSize: 28, fontWeight: '700', color: '#9945ed'}}>
            Create New Account
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              marginBottom: 30,
            }}>
            <Image
              source={require('../../Assests/friend.png')}
              style={{height: 100, width: 100, borderRadius: 50}}
            />
          </View>
        </View>

        <View style={{marginHorizontal: 30}}>
          <TextInput
            placeholder="FirstName"
            style={{
              borderWidth: 0,
              height: 49,
              borderRadius: 20,
              padding: 10,
              marginVertical: 10,
              backgroundColor: '#e6e7e8',
            }}
          />
          <TextInput
            placeholder="Last Name"
            style={{
              borderWidth: 0,
              height: 49,
              borderRadius: 20,
              padding: 10,
              marginVertical: 10,
              backgroundColor: '#e6e7e8',
            }}
          />
          <TextInput
            placeholder="User Name"
            style={{
              borderWidth: 0,
              height: 49,
              borderRadius: 20,
              padding: 10,
              marginVertical: 10,
              backgroundColor: '#e6e7e8',
            }}
          />
          <TextInput
            placeholder="Email Address"
            style={{
              borderWidth: 0,
              height: 49,
              borderRadius: 20,
              padding: 10,
              marginVertical: 10,
              backgroundColor: '#e6e7e8',
            }}
          />
          <TextInput
            placeholder="Password"
            style={{
              borderWidth: 0,
              height: 49,
              borderRadius: 20,
              padding: 10,
              marginVertical: 10,
              backgroundColor: '#e6e7e8',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: 28,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0,
              borderRadius: 70,
              marginHorizontal: 20,
              height: 49,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
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
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Text>OR</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: '#3d87d1', fontWeight: '600'}}>
              Sign Up using Mobile Number
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserScreen4;
