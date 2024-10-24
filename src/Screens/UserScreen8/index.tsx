import {WebView} from 'react-native-webview';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const UserScreen8 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, position: 'relative'}}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 10,
            zIndex: 1,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('userScreen2')}>
            <Image
              source={require('../../Assests/arrow.png')}
              style={{height: 25, width: 20}}
            />
          </TouchableOpacity>
        </View>
        <WebView source={{uri: 'https://support.apple.com/en-in/111001'}} />
      </View>
    </SafeAreaView>
  );
};
export default UserScreen8;
