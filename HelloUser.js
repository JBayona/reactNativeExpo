import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Parse from 'parse/react-native';
import { DataTable } from 'react-native-paper';
import Styles from './Styles';

export const HelloUser = () => {
  // State variable that will hold username value
  const [username, setUsername] = useState('');

  // useEffect is called after the component is initially rendered and
  // after every other render
  useEffect(() => {
    // Since the async method Parse.User.currentAsync is needed to
    // retrieve the current user data, you need to declare an async
    // function here and call it afterwards
    async function getCurrentUser() {
      // This condition ensures that username is updated only if needed
      if (username === '') {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setUsername(currentUser.getUsername());
        }
      }
    }
    getCurrentUser();
  }, [username]);

  // Note the conditional operator here, so the "Hello" text is only
  // rendered if there is an username value
  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        {username !== '' && <Text>{`Hello ${username}!`}</Text>}
        <Text>{'This is the home Screen where we can see the details'}</Text>
        <MyComponent/>
      </View>
    </View>
  );
};

const MyComponent = () => (
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Dessert</DataTable.Title>
      <DataTable.Title numeric>Calories</DataTable.Title>
      <DataTable.Title numeric>Fat</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
);
