import React, { Component } from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { TextInput } from 'react-native-paper';

var db = openDatabase({ name: 'rpg.db', createFromLocation: '~database/rpg.sqlite'});

export default class cadastroPersonagem extends React.Component {
  static navigationOptions = {
    headerShown: false
  }

  
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      classe: '',
      raca: '',
      forca: '',
      magia: '',
      precisao: '',
      agilidade: '',
      vitalidade: '',
      energia: '',
      armadura: '',
      aura: ''
    }
  }
  
  componentDidMount(){

  }

  limparCampos(){

  }


  render() {
    return (
      <View style={styles.content}>
      <View style={styles.containerTitulo}>
        <Text style={styles.TituloTexto}>Novo Personagem</Text>
      </View>
    <ScrollView  ref='_scrollView'>    
    <TextInput
      label="Nome"
      style={styles.view}
      value={this.state.nome}
      onChangeText={text => {this.setState({nome: text})}}
    />
    
    <TextInput
      label="Classe"
      style={styles.view}
      value={this.state.classe}
      onChangeText={text => {this.setState({classe: {text}})}}
    />
    
    <TextInput
      label="Raça"
      style={styles.view}
      value={this.state.raca}
      onChangeText={text => {this.setState({racao: text})}}
    />
    
    <TextInput
      label="Força"
      style={styles.view}
      value={this.state.forca}
      onChangeText={text => {this.setState({forca: text})}}
    />
    
    <TextInput
      label="Magia"
      style={styles.view}
      value={this.state.magia}
      onChangeText={text => {this.setState({magia: text})}}
    />
    
    <TextInput
      label="Precisão"
      style={styles.view}
      value={this.state.precisao}
      onChangeText={text => {this.setState({precisao: text})}}
    />
        <TextInput
      label="Agilidade"
      style={styles.view}
      value={this.state.agilidade}
      onChangeText={text => {this.setState({agilidade: text})}}
    />
            <TextInput
      label="Vitalidade"
      style={styles.view}
      value={this.state.vitalidade}
      onChangeText={text => {this.setState({vitalidade: text})}}
    />
            <TextInput
      label="Energia"
      style={styles.view}
      value={this.state.energia}
      onChangeText={text => {this.setState({energia: text})}}
    />
            <TextInput
      label="Armadura"
      style={styles.view}
      value={this.state.armadura}
      onChangeText={text => {this.setState({armadura: text})}}
    />
            <TextInput
      label="Aura"
      style={styles.view}
      value={this.state.aura}
      onChangeText={text => {this.setState({aura: text})}}
    />
  
  
  
  
  

    
    </ScrollView>
    <View style={{paddingBottom: 10, paddingTop: 15, flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
                              <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.entrar3}
                              onPress={() => { this.limparEstadosCad() }}
            >
              <Text style={styles.textButton}>Limpar</Text>
            </TouchableOpacity>    
          </View>
          <View style={{flex:1}}>
           
              <TouchableOpacity style={styles.entrar2}
                                onPress={() => this.saveChangesCad()}
              >
                <Text style={styles.textButton}>Salvar</Text>
              </TouchableOpacity>
            
          </View>
        </View>
    </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
   entrar2: {
    alignItems: 'center', borderRadius: 30, marginTop: 10, paddingTop: '6%', color: '#6680AA',
    paddingBottom: '6%',
    backgroundColor: 'blue',
    borderColor: '#fff',
    width: '90%',
    marginBottom: 100,
  },
  entrar3: {
    alignItems: 'center', borderRadius: 30, marginTop: 10, paddingTop: '6%', color: '#6680AA',
    paddingBottom: '6%',
    backgroundColor: 'blue',
    borderColor: '#fff',
    width: '90%',
    marginBottom: 100,
   
  },
  textButton: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    // fontFamily: 'open-sans-bold',
    fontWeight: 'bold'
  },  
  mainContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  containerTitulo: {
    alignItems: 'center',
    marginTop: 10,

  },
  TituloTexto: {
    fontSize: 20,
    color: 'blue'
  },
})

