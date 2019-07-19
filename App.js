import React, {Component} from 'react';
import{
  StyleSheet,
  View
}
from 'react-native';
import RoutesScrn from "./Routes";
import { Root } from "native-base";
export default class App extends Component {

  render(){
    return(

      <Root>
      <RoutesScrn />
      </Root>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
//appRegistry.registerComponent('App', () => App );