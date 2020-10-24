import React from 'react';
import {StyleSheet, Text, View,ScrollView,FlatList, Alert} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { NavigationEvents } from 'react-navigation';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeout from 'react-native-swipeout';
import { SafeAreaView } from 'react-navigation';

var db = openDatabase({ name: 'rpg.db', createFromLocation: '~database/rpg.sqlite'});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  }
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      isLoading: true,
      FlatListItems: '',
      activeRowKey: null,
      modalVisible: false,
    }
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM PERSONAGENS', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
   

  }

  async deleteItemById(item) {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM PROJETOS WHERE ID_PERSONAGEM = ?', [item.ID_PROJETO], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
      });

      this.setState({
        FlatList: this.state.FlatListItems
      })

    });

  }


  renderItem = ({ item, index }) => {
    const swipeSettings = {
      autoclose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({
            activeRowKey: null
          })
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({
          activeRowKey: index
        })

      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Tem certeza que você quer deletar?',
              [
                { text: 'Não', onPress: () => {}, style: 'cancel' },
                {
                  text: 'Sim', onPress: () => {
                    this.state.FlatListItems.splice(index, 1);
                    this.setState({
                      FlatList: this.state.FlatListItems
                    })

                    if (this.state.FlatListItems == "") {
                      this.setState({ FlatListItems: item })
                    }

                    this.deleteItemById(item);

                  }
                }
              ]
            )
          },
          text: 'Excluir', type: 'delete'
        },
      ],
      left: [],
      rowId: index,
      sectionId: 1,
    }
    return (
      <Swipeout {...swipeSettings}>
        <View style={styles.ViewCard}>
          <Card style={styles.Card} onPress={() => {}}>
            <Card.Content>
              <View style={styles.ViewCardContent}>
                <Title style={styles.TituloCard}>{item.NOME}</Title>
                <Paragraph style={styles.DataCard}>{item.CLASSE}</Paragraph>
              </View>
            </Card.Content>
          </Card>
        </View>
      </Swipeout>

    )
  }


  render() {
    return (
     <View>
          <View style={{ alignItems: 'center', height: 50, marginBottom: 20, marginTop: '10%' }}>
            <Text style={{ marginTop: 10, fontSize: 17 }} >Personagens</Text>
          </View>
          <View style={styles.viewFlatList}>
    
            <SafeAreaView style={{flex: 1}}>
              <FlatList
                data={this.state.FlatListItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
                style={{ marginBottom: '20%' }}
              />
            </SafeAreaView>
          </View>
          </View>

    );
  }
}

const styles = StyleSheet.create({
  viewFlatList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFAFA',
  },
  Card: {
    height: 80,
    borderColor: '#FFFAFA',
    borderWidth: 2,
    width: 370,
    borderRadius: 4,
    backgroundColor: '#2b419a'
  },
  TituloCard: {
    fontSize: 23,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  DataCard: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  ViewCard: {
    flex: 1,
    flexDirection: 'row',
    width: 370
  },
  ViewCardContent: {
    alignItems: 'center',
    marginTop: -10
  }
});