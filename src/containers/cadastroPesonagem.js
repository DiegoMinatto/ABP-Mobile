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
      forca: '0',
      magia: '0',
      precisao: '0',
      agilidade: '0',
      vitalidade: '0',
      energia: '0',
      armadura: '0',
      aura: '0'
    }
  }
  
  componentDidMount(){
    
  }


  cadastra(navigation,app){
    const NOME = this.state.nome;
    const CLASSE = this.state.classe;
    const RACA = this.state.raca;
    const FORCA = Number(this.state.forca);
    const MAGIA = Number(this.state.magia);
    const PRECISAO = Number(this.state.precisao);
    const AGILIDADE = Number(this.state.agilidade);
    const VITALIDADE = Number(this.state.vitalidade);
    const ENERGIA = Number(this.state.energia);
    const ARMADURA = Number(this.state.armadura);
    const AURA = Number(this.state.aura);
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO PERSONAGENS(NOME,CLASSE,RACA,FORCA,MAGIA,PRECISAO,AGILIDADE,VITALIDADE,ENERGIA,ARMADURA,AURA) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
        [NOME,CLASSE,RACA,FORCA,MAGIA,PRECISAO,AGILIDADE,VITALIDADE,ENERGIA,ARMADURA,AURA],
        (tx, results) => {
           if (results.rowsAffected > 0) {
            alert('Salvo com sucesso!');
            app.limparCampos();
            navigation.navigate('Home')
           } else {
              alert('Falha ao salvar!');
          }
          }
        );
      });
  }

  limparCampos(){
    this.setState({
      nome: '',
      classe: '',
      raca: '',
      forca: '0',
      magia: '0',
      precisao: '0',
      agilidade: '0',
      vitalidade: '0',
      energia: '0',
      armadura: '0',
      aura: '0'
    })
  }


  render() {
    const navigation = this.props.navigation;
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
      onChangeText={text => {this.setState({classe: text})}}
    />
    
    <TextInput
      label="Raça"
      style={styles.view}
      value={this.state.raca}
      onChangeText={text => {this.setState({raca: text})}}
    />
    
    <TextInput
      label="Força"
      style={styles.view}
      value={this.state.forca}
      disabled={true}
      onChangeText={text => {this.setState({forca: text})}}
    />
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({forca: String(Number(this.state.forca) + 1)})}}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>            
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({forca: String(Number(this.state.forca) - 1)})}}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>


    <TextInput
      label="Magia"
      style={styles.view}
      disabled={true}
      value={this.state.magia}
      onChangeText={text => {this.setState({magia: text})}}
    />
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({magia: String(Number(this.state.magia) + 1)})}}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>            
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({magia: String(Number(this.state.magia) - 1)})}}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>    
    <TextInput
      label="Precisão"
      style={styles.view}
      disabled={true}
      value={this.state.precisao}
      onChangeText={text => {this.setState({precisao: text})}}
    />
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({precisao: String(Number(this.state.precisao) + 1)})}}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>            
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({precisao: String(Number(this.state.precisao) - 1)})}}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>    
        <TextInput
      label="Agilidade"
      disabled={true}
      style={styles.view}
      value={this.state.agilidade}
      onChangeText={text => {this.setState({agilidade: text})}}
    />
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({agilidade: String(Number(this.state.agilidade) + 1)})}}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>            
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({agilidade: String(Number(this.state.agilidade) - 1)})}}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>    
            <TextInput
      label="Vitalidade"
      style={styles.view}
      disabled={true}
      value={this.state.vitalidade}
      onChangeText={text => {this.setState({vitalidade: text})}}
    />
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({vitalidade: String(Number(this.state.vitalidade) + 1)})}}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>            
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({vitalidade: String(Number(this.state.vitalidade) - 1)})}}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>    
            <TextInput
      label="Energia"
      disabled={true}
      style={styles.view}
      value={this.state.energia}
      onChangeText={text => {this.setState({energia: text})}}
    />
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({energia: String(Number(this.state.energia) + 1)})}}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>            
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({energia: String(Number(this.state.energia) - 1)})}}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>    
            <TextInput
      label="Armadura"
      disabled={true}
      style={styles.view}
      value={this.state.armadura}
      onChangeText={text => {this.setState({armadura: text})}}
    />
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({armadura: String(Number(this.state.armadura) + 1)})}}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>            
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({armadura: String(Number(this.state.armadura) - 1)})}}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>    
            <TextInput
      label="Aura"
      disabled={true}
      style={styles.view}
      value={this.state.aura}
      onChangeText={text => {this.setState({aura: text})}}
    />
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({aura: String(Number(this.state.aura) + 1)})}}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>            
          <TouchableOpacity style={styles.touch} onPress={() => {this.setState({aura: String(Number(this.state.aura) - 1)})}}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>    
  
  
  
  
  

    
    </ScrollView>
    <View style={{paddingBottom: 10, paddingTop: 15, flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
                              <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.entrar3}
                              onPress={() => { this.limparCampos() }}
            >
              <Text style={styles.textButton}>Limpar</Text>
            </TouchableOpacity>    
          </View>
          <View style={{flex:1}}>
           
              <TouchableOpacity style={styles.entrar2}
                                onPress={() => {this.cadastra(navigation,this)}}
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
  touch: {
    marginLeft: 10,
    marginRight: 10,
    height: 25,
    borderRadius: 10,
    backgroundColor: '#2b419a',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
   entrar2: {
    alignItems: 'center', borderRadius: 30, marginTop: 10, paddingTop: '6%', color: '#6680AA',
    paddingBottom: '6%',
    backgroundColor: '#2b419a',
    borderColor: '#fff',
    width: '90%',
    marginBottom: 100,
  },
  entrar3: {
    alignItems: 'center', borderRadius: 30, marginTop: 10, paddingTop: '6%', color: '#6680AA',
    paddingBottom: '6%',
    backgroundColor: '#2b419a',
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
    color: '#2b419a'
  },
})

