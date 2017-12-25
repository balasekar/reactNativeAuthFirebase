import { AppRegistry, Platform } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('reactNativeAuthFirebase', () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication('reactNativeAuthFirebase', { rootTag: document.getElementById('react-root') });
}

