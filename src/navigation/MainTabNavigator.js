import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import TabBarIcon from '../Utils/TabBarIcon.js';
import HomeScreen from '../containers/HomeScreen';
import Personagem from '../containers/persongem'
import cadastroPersonagem from '../containers/cadastroPesonagem'
import Objetos from '../containers/objetos'
import Especie from '../containers/Especie'
import cadastroEspecie from '../containers/cadastroEspecie'
import editaEspecie from '../containers/editaEspecie'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Personagem: Personagem

});

const PersonagemStack = createStackNavigator({
  Personagem: cadastroPersonagem,
});

const ObjetosStack = createStackNavigator({
  Objetos: Objetos,
  Especie: Especie,
  cadastroEspecie: cadastroEspecie,
  editaEspecie: editaEspecie
});




HomeStack.navigationOptions = {
    tabBarLabel: 'Personagens',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={'user'}
      />
    ),
  };

PersonagemStack.navigationOptions = {
  tabBarLabel: 'Novo personagem',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'user-plus'}
    />
  ),
};

ObjetosStack.navigationOptions = {
  tabBarLabel: 'Objetos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'shield'}
    />
  ),
};




export default createBottomTabNavigator({
  HomeStack,
  PersonagemStack,
  ObjetosStack
});
