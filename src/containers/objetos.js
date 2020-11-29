import React, { Component } from 'react'
import {StyleSheet, Text, View,TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './../Utils/styles'

export default class Objetos extends Component {

  static navigationOptions = {
    headerShown: false
  }

  state = {
    ArrayNomes: []
  }

  definirRota(item){

    if(item == "Cadastrar"){
    this.props.navigation.navigate("cadastroEspecie", {})
    }
    if(item != "Cadastrar"){
      this.props.navigation.navigate("Especie", {params: item})
    }
    /* if(item != "Cadastrar"){
      this.props.navigation.navigate("editaEspecie", {params: item})
    } */
  }
  async componentDidMount() {

    
  this.setState((prevState) => ({
    ArrayNomes: ['Espada','Machado','Cajado','Marreta','Arco','Lança','Escudo','Armadura','Grimorio']
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
        <Divider style={{width:370,marginTop:5, borderWidth:1, borderColor: '#2b419a', justifyContent:'center'}}/>
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
    <View style={styles.content}>
      <View style={{ alignItems: 'center', height: 50, marginBottom: 20, marginTop: '5%' }}>
        <Text style={{ marginTop: 10, fontSize: 17 }} ><Icon name="nature-people" size={40}
             color="#336666" /> Meus Objetos</Text>
      </View>
     
      <ScrollView>
            <View style={styles.viewFlatList}>
            <FlatList
              data={this.state.ArrayNomes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem}
              //ItemSeparatorComponent={this.renderSeparator}
            />
            </View>
      </ScrollView>

      <View style={{paddingBottom: 10, paddingTop: 15, flexDirection: 'column', width:'80%',justifyContent:'center', alignItems:'center', marginRight:'auto',marginLeft:'auto' }}>
        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
           
              <TouchableOpacity style={styles.entrar2}
                                onPress={() => this.definirRota('Cadastrar')}
              >
                <Text style={styles.textButton}>Novas Armas</Text>
              </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </View>
  )
 }
}
