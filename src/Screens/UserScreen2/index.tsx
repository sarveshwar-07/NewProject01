import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import styles from './styles';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';

const UserScreen2 = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isDisbaled, setIsdisabled] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
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
        <View style={{flex: 1, marginLeft: 20}}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: '600',
              color: '#9945ed',
              borderRadius: 10,
            }}>
            Sign In
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'column',
            marginVertical: 10,
          }}>
          <TextInput
            onChangeText={value => {
              setIsdisabled(false);
            }}
            placeholder="Email"
            style={{
              borderWidth: 1,
              padding: 12,
              borderRadius: 20,
              marginBottom: 20,
            }}
          />
          <TextInput
            onChangeText={value => {
              setIsdisabled(false);
            }}
            placeholder="Password"
            style={{borderWidth: 1, padding: 12, borderRadius: 20}}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('userScreen3')}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 12, fontWeight: '500', color: '#71c0ea'}}>
              FORGOT PASSWORD ?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: 28,
          }}>
          <TouchableOpacity
            disabled={isDisbaled}
            style={[
              styles.btn,
              isDisbaled ? styles.secondary : styles.primary,
            ]}>
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
        </View>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 40,
          }}>
          <Text style={{fontSize: 15, fontWeight: '600'}}>OR</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: 28,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0,
              borderRadius: 70,
              height: 49,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2e669e',
            }}
            onPress={() => navigation.navigate('userScreen7')}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                padding: 'auto',
                color: '#fffefe',
              }}>
              {' '}
              Login With facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <Image
            source={require('../../Assests/google.png')}
            style={{height: 50, width: 50}}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: 28,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 70,
              height: 49,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'grey',
              flexDirection: 'row',
            }}
            onPress={() => navigation.navigate('userScreen8')}>
            <Image
              source={require('../../Assests/apple.png')}
              style={{height: 20, width: 20}}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#fffefe',
                paddingLeft: 10,
              }}>
              Sign in With Apple
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 3, marginHorizontal: 20, marginBottom: 40}}>
          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
            }}
            onPress={() => navigation.navigate('userScreen9')}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#71c0ea'}}>
              Login with Phone number
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserScreen2;
