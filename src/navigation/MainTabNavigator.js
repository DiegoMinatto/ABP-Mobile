import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import TabBarIcon from '../Utils/TabBarIcon.js';
import HomeScreen from '../containers/HomeScreen';
import cadastroPersonagem from '../containers/cadastroPesonagem'
import Objetos from '../containers/objetos'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const PersonagemStack = createStackNavigator({
  Personagem: cadastroPersonagem,
});

const ObjetosStack = createStackNavigator({
  Objetos: Objetos,
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
