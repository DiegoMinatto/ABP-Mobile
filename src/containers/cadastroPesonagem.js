import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'rpg.db', createFromLocation: '~database/rpg.sqlite'});

export default class cadastroPersonagem extends React.Component {
  static navigationOptions = {
    headerShown: false
  }

  
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  componentDidMount(){

  }

  limparCampos(){

  }


  render() {
    return (
      <View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({

})

