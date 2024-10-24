import {WebView} from 'react-native-webview';
import {View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const UserScreen7 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('userScreen2')}>
            <Image
              source={require('../../Assests/arrow.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <WebView source={{uri: 'https://www.facebook.com/'}} />
      </View>
    </SafeAreaView>
  );
};
export default UserScreen7;
