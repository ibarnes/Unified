import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

// Import Amplify and configuration
import Amplify from 'aws-amplify';
import amplifyConfig from './amplifyConfig';

// Configure Amplify
Amplify.configure(amplifyConfig);

const App = () => {
  return <AppNavigator />;
};

export default App;