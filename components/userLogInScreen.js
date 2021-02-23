import 'react-native-gesture-handler';
import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Styles from '../Styles';
import {UserLogIn} from '../UserLogIn';

export const UserLogInScreen = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('../assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' User login'}
          </Text>
        </View>
        <UserLogIn />
      </SafeAreaView>
    </>
  );
}