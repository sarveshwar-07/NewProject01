import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const UserScreen6 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#348aed'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            style={{display: 'flex', flexDirection: 'row'}}
            onPress={() => navigation.navigate('userScreen5')}>
            <Image
              source={require('../../Assests/arrow.png')}
              style={{height: 25, width: 20}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              paddingLeft: 60,
              color: 'white',
            }}>
            {' '}
            Add New Financial Account
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            Bank Name
          </Text>
          <TextInput
            placeholder="Enter Bank Name"
            style={{
              borderWidth: 1,
              height: 50,
              borderRadius: 20,
              padding: 10,
              marginVertical: 5,
              marginHorizontal: 10,
            }}></TextInput>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            Account Type
          </Text>
          <TextInput
            placeholder="Enter Account Type"
            style={{
              borderWidth: 1,
              height: 50,
              borderRadius: 20,
              padding: 10,
              marginVertical: 5,
              marginHorizontal: 10,
            }}></TextInput>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            {' '}
            Amount
          </Text>
          <TextInput
            placeholder="Enter Amount"
            style={{
              borderWidth: 1,
              height: 50,
              borderRadius: 20,
              padding: 10,
              marginVertical: 5,
              marginHorizontal: 10,
            }}></TextInput>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderRadius: 10,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#55a1f2',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'white',
              }}>
              Add New Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserScreen6;
