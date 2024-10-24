import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  Switch,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import styles from './style';

const UserScreen9 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCodeEntered, setIsCodeEntered] = useState(false);
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isNewChecked, setIsNewChecked] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    code: '+1',
    flag: require('../../Assests/flag.png'),
  });

  const countryData = [
    {
      id: '1',
      name: 'United States',
      code: '+1',
      flag: require('../../Assests/flag.png'),
    },
    {
      id: '2',
      name: 'Canada',
      code: '+1',
      flag: require('../../Assests/flag.png'),
    },
    {
      id: '3',
      name: 'United Kingdom',
      code: '+44',
      flag: require('../../Assests/flag.png'),
    },
    {
      id: '4',
      name: 'Australia',
      code: '+61',
      flag: require('../../Assests/flag.png'),
    },
    {
      id: '5',
      name: 'India',
      code: '+91',
      flag: require('../../Assests/flag.png'),
    },
    {
      id: '6',
      name: 'Germany',
      code: '+49',
      flag: require('../../Assests/flag.png'),
    },
    {
      id: '7',
      name: 'Germany',
      code: '+49',
      flag: require('../../Assests/flag.png'),
    },
    {
      id: '8',
      name: 'Germany',
      code: '+49',
      flag: require('../../Assests/flag.png'),
    },
    {
      id: '9',
      name: 'Germany',
      code: '+49',
      flag: require('../../Assests/flag.png'),
    },
  ];

  const handleClick = () => {
    setIsFirstChecked(!isFirstChecked);
  };

  const handleCountrySelect = item => {
    setSelectedCountry(item);
    setIsModalVisible(false);
  };

  const handleOTPChange = otp => {
    otp.length === 6 ? setIsCodeEntered(true) : setIsCodeEntered(false);
  };

  const HandleSwitch = () => {
    setIsChecked(!isChecked);
  };
  const HandleSwitchh = () => {
    setIsNewChecked(!isNewChecked);
  };

  return (
    <SafeAreaView style={{flex: 1, marginTop: 10}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={require('../../Assests/arrow.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              marginVertical: 10,
              color: '#9945ed',
            }}>
            Enter Mobile
          </Text>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            You Will recieve a 6 digit code to verfiy your account{' '}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={{
              height: 50,
              width: 110,
              borderWidth: 0.8,
              backgroundColor: '#f2f5f7',
              display: 'flex',
              flexDirection: 'row',
              borderColor: '#9945ed',
            }}>
            <View style={{justifyContent: 'center', marginLeft: 5}}>
              <Image
                source={require('../../Assests/down.png')}
                style={{height: 20, width: 20}}
              />
            </View>
            <View style={{justifyContent: 'center', padding: 5}}>
              <Image
                source={selectedCountry.flag}
                style={{height: 20, width: 20}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                paddingLeft: 5,
                marginVertical: 5,
              }}>
              <Text>{selectedCountry.code}</Text>
            </View>
          </TouchableOpacity>

          <TextInput
            placeholder="Enter Mobile Number"
            style={{
              backgroundColor: '#f2f5f7',
              borderColor: '#9945ed',
              marginHorizontal: 10,
              borderWidth: 0.8,
              width: 240,
              borderRadius: 2,
              padding: 10,
              fontSize: 17,
            }}
          />
        </View>
        <View style={{marginHorizontal: 30, marginVertical: 10}}>
          <TouchableOpacity
            style={{
              borderWidth: 0,
              borderRadius: 10,
              height: 40,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#9945ed',
            }}>
            <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <OTPTextInput
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
            inputCount={6}
            handleTextChange={handleOTPChange}
            tintColor={'#EDEDED'}
            offTintColor={'#EDEDED'}
          />
        </View>
        <View
          style={{marginHorizontal: 20, display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={handleClick}
            style={{
              borderWidth: 1,
              height: 30,
              width: 30,
              borderRadius: 5,
            }}>
            <View>
              {isFirstChecked && (
                <View
                  style={{
                    height: 30,
                    width: 30,
                  }}>
                  <Image
                    source={require('../../Assests/tick.png')}
                    style={{height: 30, width: 30, borderRadius: 5}}
                  />
                </View>
              )}
            </View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              paddingLeft: 10,
              marginRight: 30,
            }}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              Please check this box to start on next screen and this is my order
              to work on this
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <Switch
            trackColor={{false: '#f4f3f4', true: '#7de88c'}}
            thumbColor={isChecked ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={HandleSwitch}
            value={isChecked}
          />
        </View>
        <Switch onValueChange={HandleSwitchh} value={isNewChecked} />
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 60,
              backgroundColor: 'grey',
              marginVertical: 250,
              marginHorizontal: 20,
            }}>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={{}}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={countryData}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => handleCountrySelect(item)}
                  style={{flexDirection: 'row', marginVertical: 10}}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={item.flag}
                      style={{height: 30, width: 30, marginRight: 10}}
                    />
                    <Text style={{marginTop: 5}}>
                      {item.name} ({item.code})
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen9;
