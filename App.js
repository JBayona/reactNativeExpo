import 'react-native-gesture-handler';
import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {UserRegistration} from './UserRegistration';
import {UserLogIn} from './UserLogIn';
import {UserLogOut} from './UserLogOut';
import {HelloUser} from './HelloUser';
import Styles from './Styles';

// Components
import {UserLogInScreen} from './components/userLogInScreen';
import {UserRegistrationScreen} from './components/userRegistrationScreen';
import {HomeScreen} from './components/homeScreen';

// Your Parse initialization configuration goes here
Parse.setAsyncStorage(AsyncStorage);

const PARSE_APPLICATION_ID = 'fD4ALx9l4Ze7cnn5Y5kIA9ikxtYtqBd29GpgzSY0';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_ID = 'w2DCeYNJLlSmq8ScQ43NsbThxkzbm2nEumrlXtBU';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
Parse.serverURL = PARSE_HOST_URL;

// This method instantiates and creates a new StackNavigator
const Stack = createStackNavigator();

// Add the stack navigator and inside it you can insert all your app screens, in the desired order
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={UserLogInScreen} />
        <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
