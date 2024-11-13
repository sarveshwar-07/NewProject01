import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen1 from '../Screens/UserScreen1';
import UserScreen2 from '../Screens/UserScreen2';
import UserScreen3 from '../Screens/UserScreen3';

const AppNavigator = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="UserScreen3">
        <stack.Screen name="UserScreen1" component={UserScreen1} />
        <stack.Screen name="UserScreen2" component={UserScreen2} />
        <stack.Screen name={'UserScreen3'} component={UserScreen3} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
