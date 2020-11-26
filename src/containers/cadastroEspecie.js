import React, { Component } from 'react';
import {StyleSheet,View, Text,ScrollView,TouchableOpacity,Picker} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { TextInput } from 'react-native-paper';

import styles from '../Utils/styles'

var db = openDatabase({ name: 'rpg.db'});

export default class cadastroEspecie extends React.Component {
  static navigationOptions = {
    headerShown: false
  }

  
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      classe: '',
      raridade: '',
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
    const RARIDADE = this.state.raridade;
    const FORCA = Number(this.state.forca);
    const MAGIA = Number(this.state.magia);
    const PRECISAO = Number(this.state.precisao);
    const AGILIDADE = Number(this.state.agilidade);
    const VITALIDADE = Number(this.state.vitalidade);
    const ENERGIA = Number(this.state.energia);
    const ARMADURA = Number(this.state.armadura);
    const AURA = Number(this.state.aura);

    //alert(NOME+CLASSE+RARIDADE+FORCA+MAGIA+PRECISAO+AGILIDADE+VITALIDADE+ENERGIA+ARMADURA+AURA)
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO ARMAS(NOME,CLASSE,RARIDADE,FORCA,MAGIA,PRECISAO,AGILIDADE,VITALIDADE,ENERGIA,ARMADURA,AURA) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
        [NOME,CLASSE,RARIDADE,FORCA,MAGIA,PRECISAO,AGILIDADE,VITALIDADE,ENERGIA,ARMADURA,AURA],
        (tx, results) => {
           if (results.rowsAffected > 0) {
            alert('Salvo com sucesso!');
            app.limparCampos();
            navigation.navigate('Objetos')
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
      raridade: '',
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
        <Text style={styles.TituloTexto}>Novo Objeto</Text>
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
              <Picker.Item label="Escolher..." value=""/>
                <Picker.Item label="Arco" value="Arco"/>
                <Picker.Item label="Cajado" value="Cajado"/>
                <Picker.Item label="Escudo" value="Escudo"/>
                <Picker.Item label="Espada" value="Espada"/>
                <Picker.Item label="Lança" value="Lança"/>
                <Picker.Item label="Grimorio" value="Grimorio"/>
                <Picker.Item label="Machado" value="Machado"/>
                <Picker.Item label="Marreta" value="Marreta"/>
                <Picker.Item label="Armadura" value="Armadura"/>
              </Picker>
            </View>
          </View>

          <View style={{flexDirection:"column"}}>
            <View style={{flex:1}}>
              <Text>Raridade:</Text>
            </View>
            <View style={{flex:1}}>
              <Picker style = {{width: 175, flex:1}} selectedValue = {this.state.raridade} onValueChange = {(itemValor, itemIndex) => this.setState({raridade: itemValor})}>
              <Picker.Item label="Escolher..." value=""/>
                <Picker.Item label="Domestica" value="Domestica"/>
                <Picker.Item label="Comum" value="Comum"/>
                <Picker.Item label="Incomum" value="Incomum"/>
                <Picker.Item label="Rara" value="Rara"/>
                <Picker.Item label="Lendaria" value="Lendaria"/>
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

