/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppNavigator from './src/Navigation/AppNavigation';
import {Appearance, Platform} from 'react-native';

const App = () => {
  const ColorScheme = Appearance.getColorScheme();
  console.log(ColorScheme, Platform.OS);

  return <AppNavigator />;
};

export default App;
