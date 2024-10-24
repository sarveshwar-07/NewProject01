import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const UserScreen5 = ({navigation}) => {
  const Data = [
    {
      id: '1',
      title: 'Bank of baroda',
      name: 'Personal Account',
      amount: '$12.51219',
    },
    {
      id: '2',
      title: 'Bank of Babu',
      name: 'Personal Account',
      amount: '$12.59',
    },
    {
      id: '3',
      title: 'Bank of Baskar',
      name: 'Personal Account',
      amount: '$12.59',
    },
    {
      id: '4',
      title: 'Bank of Bomb',
      name: 'Personal Account',
      amount: '$12.59',
    },
    {
      id: 5,
      title: 'Bank of Prabhu',
      name: 'Personal Account',
      amount: '$12.59',
    },
    {
      id: '6',
      title: 'Bank of Brock',
      name: 'Personal Account',
      amount: '$12.59',
    },

    // {
    //   id: '7',
    //   title: 'Bank of Babu',
    //   name: 'Personal Account',
    //   amount: '$12.59',
    // },
    // {
    //   id: '8',
    //   title: 'Bank of Baskar',
    //   name: 'Personal Account',
    //   amount: '$12.59',
    // },
    // {
    //   id: 9,
    //   title: 'Bank of Prabhu',
    //   name: 'Personal Account',
    //   amount: '$12.59',
    // },
    // {
    //   id: 10,
    //   title: 'Bank of Brock',
    //   name: 'Personal Account',
    //   amount: '$12.59',
    // },

    // {
    //   id: 11,
    //   title: 'Bank of Babu',
    //   name: 'Personal Account',
    //   amount: '$12.59',
    // },
    // {
    //   id: 12,
    //   title: 'Bank of Baskar',
    //   name: 'Personal Account',
    //   amount: '$12.59',
    // },
  ];

  const ProductCard = ({item}) => {
    return (
      <View
        style={{
          borderBottomWidth: 0.2,
          height: 70,
          padding: 10,
          width: 'auto',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../Assests/friend.png')}
          style={{height: 40, width: 40, borderRadius: 50}}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 20,
          }}>
          <Text style={{fontSize: 13, fontWeight: '600', color: 'grey'}}>
            {item.title}
          </Text>
          <View style={{paddingTop: 3}}>
            <Text style={{fontSize: 17, fontWeight: '400'}}>{item.name}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 'auto',
          }}>
          <Text style={{fontSize: 18}}>{item.amount}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#348aed'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <Text style={{color: 'white', fontSize: 17, fontWeight: '500'}}>
            Your Financial Accounts
          </Text>
        </View>
        <View style={{backgroundColor: 'white', flex: 3}}>
          <FlatList data={Data} renderItem={ProductCard} />
          <TouchableOpacity
            onPress={() => navigation.navigate('userScreen6')}
            style={{
              flex: 0,
              borderWidth: 0,
              height: 50,
              width: 'auto',
              borderRadius: 10,
              marginVertical: 17,
              marginHorizontal: 10,
              backgroundColor: '#348aed',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>
              Link another Account
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../Assests/list.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={{fontWeight: '600', padding: 1}}>List</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('userScreen7')}
              style={{
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../Assests/profile.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={{fontWeight: '600', padding: 1}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../Assests/home.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={{fontWeight: '600', padding: 1}}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../Assests/friend.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={{fontWeight: '600', padding: 1}}>User</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../Assests/google.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={{fontWeight: '600', padding: 1}}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserScreen5;
