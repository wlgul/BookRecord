import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Icon, Header} from 'react-native-elements';

export default class Mainpage extends React.Component{
    render() {
        return (
          <Header
            leftComponent={{icon:'menu', color:'#FFF', onPress: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}}
            centerComponent={{text: 'Mainpage', style:{color:'#FFF'}}}
            containerStyle={{backgroundColor:'#52C8BE'}}
            />
        );
      }
}