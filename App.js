import React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'rpg.db' });
export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false
    }

//####################################### CRIAR A TABELA SE ELA NÃO EXISTIR ###########################################################

db.transaction(function (txn) {


  txn.executeSql(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='PERSONAGENS' ",
    [],
    function (tx, res) {
      if (res.rows.length == 0) {
        txn.executeSql(
          ' CREATE TABLE IF NOT EXISTS PERSONAGENS( '+
          ' ID_PERSONAGEM INTEGER PRIMARY KEY AUTOINCREMENT, '+
          ' NOME VARCHAR(200), '+
          ' CLASSE VARCHAR(200), '+
          ' RACA VARCHAR(200), '+
          ' FORCA INTEGER, '+
          ' MAGIA INTEGER, '+
          ' PRECISAO INTEGER, '+
          ' AGILIDADE INTERGER, '+
          ' VITALIDADE INTEGER, '+
          ' ENERGIA INTEGER, '+
          ' ARMADURA INTEGER, '+
          ' AURA INTEGER '+
          ' ) ',
          [], () => {
            
          }
        );
        condInsertBase=true;
      }else{
        condInsertBase=false;
      }
    }
  );



  txn.executeSql(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='ARMAS' ",
    [],
    function (tx, res) {
      if (res.rows.length == 0) {
        txn.executeSql(
          ' CREATE TABLE IF NOT EXISTS ARMAS( '+
          ' ID_ARMA INTEGER PRIMARY KEY AUTOINCREMENT, '+
          ' NOME VARCHAR(200), '+
          ' CLASSE VARCHAR(200), '+
          ' RARIDADE VARCHAR(200), '+
          ' FORCA INTEGER, '+
          ' MAGIA INTEGER, '+
          ' PRECISAO INTEGER, '+
          ' AGILIDADE INTERGER, '+
          ' VITALIDADE INTEGER, '+
          ' ENERGIA INTEGER, '+
          ' ARMADURA INTEGER, '+
          ' AURA INTEGER, '+
          ' REQUISITO VARCHAR(200), '+
          ' VALOR INTEGER '+
          ' ) '
          ,
          []
        );
        condInsertBase=true;
      }else{
        condInsertBase=false;
      }
    }
  );



});


  }



  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppNavigator />
      );
    } else {
      return (
        <PaperProvider theme={theme}>
        <View style={styles.container}>
        <AppNavigator />
        </View>
      </PaperProvider>
      );
    }
  }

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  }
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


