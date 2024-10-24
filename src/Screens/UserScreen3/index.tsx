import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

const UserScreen3 = ({navigation}) => {
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
        <View
          style={{
            flex: 1,
            paddingHorizontal: 25,
            flexDirection: 'column',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#9945ed',
              fontWeight: '700',
            }}>
            Reset Password{' '}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 25,
              fontWeight: '700',
              color: '#9945ed',
            }}>
            Old Password
          </Text>
          <TextInput
            placeholder=" Enter Old Password"
            style={{
              borderWidth: 1,
              borderColor: '#9945ed',
              height: 50,
              marginHorizontal: 25,
              marginVertical: 10,
              borderRadius: 10,
              padding: 10,
            }}></TextInput>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 25,
              fontWeight: '700',
              color: '#9945ed',
            }}>
            {' '}
            New Password
          </Text>
          <TextInput
            placeholder=" Enter New Password"
            style={{
              borderWidth: 1,
              borderColor: '#9945ed',
              height: 50,
              marginHorizontal: 25,
              marginVertical: 10,
              borderRadius: 10,
              padding: 10,
            }}></TextInput>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 25,
              fontWeight: '700',
              color: '#9945ed',
            }}>
            {' '}
            Confirm New Password
          </Text>
          <TextInput
            placeholder=" Confirm New Password"
            style={{
              borderWidth: 1,
              borderColor: '#9945ed',
              height: 50,
              marginHorizontal: 25,
              marginVertical: 10,
              borderRadius: 10,
              padding: 10,
            }}></TextInput>
        </View>
        {/* <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            height: 45,
            width: 'auto',
            justifyContent: 'center',
            paddingLeft: 10,
            marginHorizontal: 25,
          }}>
          <TextInput placeholder="Reset Password"></TextInput>
        </View> */}
        <View
          style={{
            flex: 5,
            flexDirection: 'column',
            marginHorizontal: 28,
            marginVertical: 25,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0,
              marginHorizontal: 15,
              borderRadius: 70,
              height: 40,
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
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserScreen3;
