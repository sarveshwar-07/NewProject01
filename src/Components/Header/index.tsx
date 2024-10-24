import {View, Text} from 'react-native';

const HeaderComponent = ({HeaderText}) => {
  return (
    <View
      style={{
        backgroundColor: 'grey',
        paddingLeft: 'auto',
        padding: 20,
      }}>
      <Text style={{fontSize: 30, fontWeight: '700'}}>{HeaderText}</Text>
    </View>
  );
};
export default HeaderComponent;
