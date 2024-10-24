import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';

const HeaderScreen = () => {
  const [message, setMessage] = useState(false);
  // useEffect(() => {
  //   GetData();
  // }, []);
  // const [newData, setNewData] = useState([]);
  // const GetData = async () => {
  //   try {
  //     const response = await fetch('https://fakestoreapi.com/products');

  //     const json = await response.json();
  //     console.log(json, 'sarvesh10');
  //     setNewData(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const NewFunction1 = () => {
    console.log(' this is my game');
  };
  const NewFunction = () => {
    setMessage('Welcome the User ' + new Date().toLocaleTimeString());
  };

  setTimeout(() => {
    NewFunction();
  }, 4000);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{marginTop: 0, flex: 1, marginHorizontal: 20}}>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../Assests/apple.png')}
          style={{height: 20, width: 20}}
        />
        <Image
          source={require('../../Assests/apple.png')}
          style={{height: 20, width: 20}}
        />
        <Image
          source={require('../../Assests/apple.png')}
          style={{height: 20, width: 20}}
        />
      </View>
      <View>
        <TouchableOpacity onPress={NewFunction}>
          <Text> hi welcome the user</Text>
          <Text>{message}</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <FlatList data={newData} renderItem={renderItem} />
      </View> */}
      <View
        style={{
          flex: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../Assests/apple.png')}
          style={{height: 20, width: 20}}
        />
        <Image
          source={require('../../Assests/apple.png')}
          style={{height: 20, width: 20}}
        />
        <Image
          source={require('../../Assests/apple.png')}
          style={{height: 20, width: 20}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HeaderScreen;
