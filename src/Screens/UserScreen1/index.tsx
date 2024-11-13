import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const UserScreen1 = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 10, flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            style={{height: 50, width: 50}}
            source={require('../../Assests/flag.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 50, width: 50}}
            source={require('../../Assests/flag.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>sarvesh 01</Text>
        <Text>sarvesh 02</Text>
        <Text>sarvesh 03</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen1;
