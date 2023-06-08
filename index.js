/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppPro from './AppPro';
import HandleUserinput from './HandleUserInput';
import FlatListBasics from './FlatList_Basics';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FlatListBasics);
