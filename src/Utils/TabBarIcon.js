import React from 'react';
import Ionicons from 'react-native-vector-icons/Feather'

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3, color:'#2b419a' }}
        color={this.props.focused ? '#2b419a' : '#ccc'}
      />
    );
  }
}