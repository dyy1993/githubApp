/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PopularNavigator,AppTabNavigator} from './js/navigators/AppNavigator'

AppRegistry.registerComponent(appName, () => PopularNavigator);
