import React, { Component } from 'react'
import {StyleSheet, Text, View,TouchableOpacity, FlatList} from 'react-native';
import { Divider } from 'react-native-elements';


export default class Objetos extends Component {
  state = {
    ArrayNomes: []
  }

  definirRota(item){

   if(item == "Espadas"){
   // this.props.navigation.navigate("EditaEspecie", {})
   }
   if(item == "Arcos"){
    //this.props.navigation.navigate("CadastroEspecie", {})
   }
   if(item == "Armaduras"){
    //this.props.navigation.navigate("CadastroEspecie", {})
   }
  }
  async componentDidMount() {

    
  this.setState((prevState) => ({
    ArrayNomes: ['Espadas','Arcos','Armaduras']
  }))
   
  }

renderItem = ({ item }) => {
  return ( 
      <TouchableOpacity style={{ justifyContent: 'flex-start',alignItems:'flex-start', flex: 1, flexDirection: 'row', marginBottom: 3,width:350 }}
        onPress=  {() => this.definirRota(item)}
      >
      <View style={styles.containerFlat}>
      <Text style={{ marginStart:15 ,fontSize: 20, color: '#2b419a', marginBottom: 15, textAlign:'left', marginRight: 3 }}>
        {item}
      </Text>
        <Divider style={{width:370,marginTop:10, borderWidth:1, borderColor: '#2b419a', justifyContent:'center'}}/>
      </View>
     </TouchableOpacity>
  )
}

renderSeparator = () => {
  return (
    <View style={{ height: 10, width: '100%', backgroundColor: '#2b419a' }}>
    </View>
  )
}

render() {
  return (
    <View>
      <FlatList
        data={this.state.ArrayNomes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
        //ItemSeparatorComponent={this.renderSeparator}
      />
    </View>
  )
 }
}

const styles = StyleSheet.create({
  botaoLogin: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textoBotao: {
    alignItems: 'center',
    color: 'white'
  },
  containerFlat:{
    marginTop:15,
  },
  mainContainer: {
    width: 500,
    marginLeft: 10,
    marginRight: 10,
  },
  BotaoCadastro: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBotao: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});