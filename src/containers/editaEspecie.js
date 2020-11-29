import React, { Component } from 'react';
import {StyleSheet,View, Text, ScrollView, TouchableOpacity, Picker} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { TextInput } from 'react-native-paper';

import styles from '../Utils/styles'

var db = openDatabase({ name: 'rpg.db'});
var vD = 0;
var vP = 0;

export default class editaEspecie extends React.Component {
  static navigationOptions = {
    headerShown: false
  }
  constructor(props) {
    super(props)
    this.state = {
        nome:'',
        classe: '',
        raridade: '',
        forca: '0',
        magia: '0',
        precisao: '0',
        agilidade: '0',
        vitalidade: '0',
        energia: '0',
        armadura: '0',
        aura: '0',
        dD: 'd6',
        dP: 'd6',
        rF: '0',
        rM: '0',
        rP: '0',
        rA: '0'
    }

  }

  

  componentDidMount(){
   if(this.props.navigation.state.params.params){
       this.setState({nome: this.props.navigation.state.params.params.NOME})
       this.setState({classe: this.props.navigation.state.params.params.CLASSE})
       this.setState({raridade: this.props.navigation.state.params.params.RARIDADE})
       this.setState({forca: this.props.navigation.state.params.params.FORCA})
       this.setState({magia: this.props.navigation.state.params.params.MAGIA})
       this.setState({precisao: this.props.navigation.state.params.params.PRECISAO})
       this.setState({agilidade: this.props.navigation.state.params.params.AGILIDADE})
       this.setState({vitalidade: this.props.navigation.state.params.params.VITALIDADE})
       this.setState({energia: this.props.navigation.state.params.params.ENERGIA})
       this.setState({armadura: this.props.navigation.state.params.params.ARMADURA})
       this.setState({aura: this.props.navigation.state.params.params.AURA})  
   }
  }

  edita(){
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
    db.transaction(function (tx) {
      tx.executeSql(
        'UPDATE ARMAS SET FORCA = ?,MAGIA = ?,PRECISAO = ?,AGILIDADE = ?,VITALIDADE = ?,ENERGIA = ?,ARMADURA = ?,AURA = ? WHERE NOME = ?',
        [FORCA,MAGIA,PRECISAO,AGILIDADE,VITALIDADE,ENERGIA,ARMADURA,AURA,NOME],
        (tx, results) => {
           if (results.rowsAffected > 0) {
            alert('Salvo com sucesso!');
           } else {
            alert('Falha ao salvar!');
          }
          }
        );
      });
  }

  calcular(){
    if(this.state.dD == "d3"){
      vD = 3;
    }else if(this.state.dD == "d6"){
      vD = 6;
    }else if(this.state.dD == "d10"){
      vD = 10;
    }else if(this.state.dD == "d12"){
      vD = 12;
    }else if(this.state.dD == "d20"){
      vD = 20;
    }

    if(this.state.dP == "d3"){
      vP = 3;
    }else if(this.state.dP == "d6"){
      vP = 6;
    }else if(this.state.dP == "d10"){
      vP = 10;
    }else if(this.state.dP == "d12"){
      vP = 12;
    }else if(this.state.dP == "d20"){
      vP = 20;
    }
    
    this.setState({rF:String(parseInt(this.state.forca) + Math.floor(Math.random() * vD + 1))});
    this.setState({rM:String(parseInt(this.state.magia) + Math.floor(Math.random() * vD + 1))});
    this.setState({rP:String(parseInt(this.state.precisao) + Math.floor(Math.random() * vP + 1))});
    this.setState({rA:String(parseInt(this.state.agilidade) + Math.floor(Math.random() * vP + 1))});


  }

  render() {
    return (

      <View style={styles.content}>

        <View style={{width:'100%',justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.TituloTexto}>{this.state.nome}</Text>
        </View>

        <View style={{flexDirection:"row"}}> 
          <View style={{flex:1}}>
          </View>
        </View> 

        <View style={{flexDirection:"row"}}> 
          <View style={{flex:1}}>
            <Text></Text>
          </View>
        </View> 

        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
            <Text>{this.state.classe}</Text>
          </View>
          <View style={{flex:1}}>
            <Text>{this.state.raridade}</Text>
          </View>
        </View>

        <View style={{flexDirection:"row"}}> 
          <View style={{flex:1}}>
            <Text></Text>
          </View>
        </View> 

        <ScrollView  ref='_scrollView'> 
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
        </ScrollView>

        <View style={{flexDirection:"row"}}> 
          <View style={{flex:1}}>
            <Text></Text>
          </View>
        </View> 

        <View style={{paddingBottom: 10, paddingTop: 15, flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
          <View style={{flexDirection:"row"}}>
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.entrar3}
                                  onPress={() => {this.componentDidMount()}}
                >
                  <Text style={styles.textButton}>Desfazer</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.entrar2}
                                  onPress={() => {this.edita(this)}}
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

