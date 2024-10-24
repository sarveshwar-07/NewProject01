import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import HeaderComponent from '../../Components/Header';

const AddPage = () => {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setNewData(result);
    } catch (error) {
      console.log(error, 'sarvesh');
    }
  };

  const HandleDelete = title => {
    const filteredData = newData.filter(item => item.title !== title);
    setNewData(filteredData);
    // console.log(filteredData.length, DummyData.length, 'sar-->');
    // console.log(jobLevel, 'ss');
  };

  const ProductCard = ({item}) => {
    return (
      <View>
        <View
          style={{
            padding: 10,
            borderWidth: 2,
            borderColor: '#ccc',
            margin: 10,
            borderRadius: 5,
            flex: 1,
          }}>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <View>
            <TouchableOpacity onPress={() => HandleDelete(item.title)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <View>
          <HeaderComponent HeaderText={'AddPage'} />
        </View>
      </View>
      <View
        style={{
          // flex: 1,
          borderWidth: 1,
          marginHorizontal: 10,
          borderRadius: 10,
          padding: 10,
        }}>
        <TextInput placeholder="Enter Name Here" style={{padding: 10}} />
      </View>
      <View style={{marginTop: 10}}>
        <Text>Add Item Here</Text>
      </View>
      <View>
        <FlatList
          data={newData}
          renderItem={ProductCard}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
export default AddPage;
