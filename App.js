import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, TextInput, Button } from "react-native";
class Registration extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  }
  registerUser = () => {
    if (this.state.name === '') {
      this.props.navigation.navigate('try');
      return;
    }
    if (this.state.email === '') {
      this.props.navigation.navigate('try');
      return;
    }
    if (this.state.password === '') {
      this.props.navigation.navigate('try');
      return;
    }
    this.props.navigation.navigate('profile', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 4, flexDirection: "column", backgroundColor: "black", justifyContent: "center" }}>
          <TextInput style={{ backgroundColor: "white" }} autoFocus={true} placeholder="Enter Name" onChangeText={(name) => this.setState({ name })} />
          <TextInput style={{ backgroundColor: "white" }} placeholder="Enter Email" onChangeText={(email) => this.setState({ email })} />
          <TextInput style={{ backgroundColor: "white" }} secureTextEntry={true} keyboardType={"number-pad"} placeholder="Enter Password" onChangeText={(password) => this.setState({ password })} />
          <Button title="Register" onPress={this.registerUser}></Button>
        </View>
      </View >
    );
  }
}

class TryAgain extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Some Error Occured</Text>
      </View>
    )
  }
}

class ProfileDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }} >
        <Text>Name: {JSON.stringify(this.props.navigation.getParam('name'))}</Text>
        <Text>Email: {JSON.stringify(this.props.navigation.getParam('email'))}</Text>
        <Text>Password: {JSON.stringify(this.props.navigation.getParam('password'))}</Text>

      </View>
    )
  }
}
const MainNavigator = createStackNavigator({
  home: Registration,
  try: TryAgain,
  profile: ProfileDetails
},
  { initialRouteName: 'home' }
);


const App = createAppContainer(MainNavigator);

export default App;

