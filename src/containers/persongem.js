import React from 'react';
import {StyleSheet, Text, View,ScrollView,FlatList, Alert} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';


var db = openDatabase({ name: 'rpg.db'});

export default class Personagem extends React.Component {
  static navigationOptions = {
    headerShown: false
  }
  constructor(props) {
    super(props)
    this.state = {
        nome: '',

    }

  }

  componentDidMount(){
   if(this.props.navigation.state.params.params){
       this.setState({nome: this.props.navigation.state.params.params.NOME})
       
   }

   
  }




  render() {
    return (


      <View>
        <Text>{this.state.nome}</Text>
    </View>



    );
  }
}

const styles = StyleSheet.create({

});