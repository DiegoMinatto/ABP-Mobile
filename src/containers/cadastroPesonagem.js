import React, { Component } from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,Picker} from 'react-native';
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

        <View style={{flexDirection:"row"}}> 
          <View style={{flex:1}}>
            <Text></Text>
            <Text></Text>
          </View>
        </View> 

        <View style={{flexDirection:"row"}}>
          <View style={{flexDirection:"column"}}>
            <View style={{flex:1}}>
              <Text>Classe:</Text>
            </View>
            <View style={{flex:1}}>
              <Picker style = {{width: 175, flex:1}} selectedValue = {this.state.classe} onValueChange = {(itemValor, itemIndex) => this.setState({classe: itemValor})}>
                <Picker.Item label="Assassino" value="Assassino"/>
                <Picker.Item label="Arqueiro" value="Arqueiro"/>
                <Picker.Item label="Bruxo" value="Bruxo"/>
                <Picker.Item label="Druida" value="Druida"/>
                <Picker.Item label="Feiticeiro" value="Feiticeiro"/>
                <Picker.Item label="Guerreiro" value="Guerreiro"/>
                <Picker.Item label="Mago" value="Mago"/>
                <Picker.Item label="Monge" value="Monge"/>
                <Picker.Item label="Paladino" value="Paladino"/>
                <Picker.Item label="Sacerdote" value="Sacerdote"/>
              </Picker>
            </View>
          </View>

          <View style={{flexDirection:"column"}}>
            <View style={{flex:1}}>
              <Text>Raça:</Text>
            </View>
            <View style={{flex:1}}>
              <Picker style = {{width: 175, flex:1}} selectedValue = {this.state.raca} onValueChange = {(itemValor, itemIndex) => this.setState({raca: itemValor})}>
                <Picker.Item label="Anão" value="Anão"/>
                <Picker.Item label="Bestial" value="Bestial"/>
                <Picker.Item label="Elfo" value="Elfo"/>
                <Picker.Item label="Humano" value="Humano"/>
                <Picker.Item label="Gnomo" value="Gnomo"/>
                <Picker.Item label="Goblin" value="Goblin"/>
                <Picker.Item label="Ogro" value="Ogro"/>
              </Picker>
            </View>
          </View>
        </View>
        
        <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
                
                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <Text>Força</Text>
                      </View>
                      <View style={{flex:1}}>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({forca: String(Number(this.state.forca) + 1)})}}>
                              <Text style={styles.textButton}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{this.state.forca}</Text>
                          </View>       
                          <View style={{flex:1}}>  
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({forca: String(Number(this.state.forca) - 1)})}}>
                              <Text style={styles.textButton}>-</Text>
                            </TouchableOpacity> 
                          </View>     
                        </View>  
                      </View>
                    </View> 
                  </View>

                  <View style={{flex:1}}>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <Text>Magia</Text>
                      </View>
                      <View style={{flex:1}}>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({magia: String(Number(this.state.magia) + 1)})}}>
                              <Text style={styles.textButton}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{this.state.magia}</Text>
                          </View>      
                          <View style={{flex:1}}>  
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({magia: String(Number(this.state.magia) - 1)})}}>
                              <Text style={styles.textButton}>-</Text>
                            </TouchableOpacity> 
                          </View>     
                        </View>  
                      </View>
                    </View> 
                  </View>    
                </View>

                <View style={{flexDirection:"row"}}> 
                  <View style={{flex:1}}>
                    <Text></Text>
                  </View>
                </View> 

                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <Text>Precisão</Text>
                      </View>
                      <View style={{flex:1}}>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({precisao: String(Number(this.state.precisao) + 1)})}}>
                              <Text style={styles.textButton}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{this.state.precisao}</Text>
                          </View>       
                          <View style={{flex:1}}>  
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({precisao: String(Number(this.state.precisao) - 1)})}}>
                              <Text style={styles.textButton}>-</Text>
                            </TouchableOpacity> 
                          </View>     
                        </View>  
                      </View>
                    </View> 
                  </View>   

                  <View style={{flex:1}}>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <Text>Agilidade</Text>
                      </View>
                      <View style={{flex:1}}>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({agilidade: String(Number(this.state.agilidade) + 1)})}}>
                              <Text style={styles.textButton}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{this.state.agilidade}</Text>
                          </View>      
                          <View style={{flex:1}}>  
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({agilidade: String(Number(this.state.agilidade) - 1)})}}>
                              <Text style={styles.textButton}>-</Text>
                            </TouchableOpacity> 
                          </View>     
                        </View>  
                      </View>
                    </View> 
                  </View>    
                </View>

                <View style={{flexDirection:"row"}}> 
                  <View style={{flex:1}}>
                    <Text></Text>
                  </View>
                </View> 

                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <Text>Vitalidade</Text>
                      </View>
                      <View style={{flex:1}}>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({vitalidade: String(Number(this.state.vitalidade) + 1)})}}>
                              <Text style={styles.textButton}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{this.state.vitalidade}</Text>
                          </View>       
                          <View style={{flex:1}}>  
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({vitalidade: String(Number(this.state.vitalidade) - 1)})}}>
                              <Text style={styles.textButton}>-</Text>
                            </TouchableOpacity> 
                          </View>     
                        </View>  
                      </View>
                    </View> 
                  </View>   

                  <View style={{flex:1}}>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <Text>Energia</Text>
                      </View>
                      <View style={{flex:1}}>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({energia: String(Number(this.state.energia) + 1)})}}>
                              <Text style={styles.textButton}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{this.state.energia}</Text>
                          </View>      
                          <View style={{flex:1}}>  
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({energia: String(Number(this.state.energia) - 1)})}}>
                              <Text style={styles.textButton}>-</Text>
                            </TouchableOpacity> 
                          </View>     
                        </View>  
                      </View>
                    </View> 
                  </View>    
                </View>

                <View style={{flexDirection:"row"}}> 
                  <View style={{flex:1}}>
                    <Text></Text>
                  </View>
                </View> 

                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <Text>Armadura</Text>
                      </View>
                      <View style={{flex:1}}>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({armadura: String(Number(this.state.armadura) + 1)})}}>
                              <Text style={styles.textButton}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{this.state.armadura}</Text>
                          </View>       
                          <View style={{flex:1}}>  
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({armadura: String(Number(this.state.armadura) - 1)})}}>
                              <Text style={styles.textButton}>-</Text>
                            </TouchableOpacity> 
                          </View>     
                        </View>  
                      </View>
                    </View> 
                  </View>   

                  <View style={{flex:1}}>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <Text>Aura</Text>
                      </View>
                      <View style={{flex:1}}>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({aura: String(Number(this.state.aura) + 1)})}}>
                              <Text style={styles.textButton}>+</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{this.state.aura}</Text>
                          </View>      
                          <View style={{flex:1}}>  
                            <TouchableOpacity style={styles.touch} onPress={() => {this.setState({aura: String(Number(this.state.aura) - 1)})}}>
                              <Text style={styles.textButton}>-</Text>
                            </TouchableOpacity> 
                          </View>     
                        </View>  
                      </View>
                    </View> 
                  </View>    
                </View>

              </View> 

              <View style={{flexDirection:"row"}}> 
              <View style={{flex:1}}>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
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

