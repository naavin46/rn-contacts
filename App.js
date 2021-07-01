import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Details';
import AddUser from './src/screens/AddUser';

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Contacts',
    },
  },
  Details: {
    screen: Profile,
  },
  New: {
    screen: AddUser,
    navigationOptions: {
      title: 'Add new contact',
    },
  },
});

export default createAppContainer(App);
