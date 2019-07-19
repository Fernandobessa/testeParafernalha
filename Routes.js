import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TelaLoginCidadao from './src/components/telaLoginCidadao';
import TelaPlayVideo from './src/components/telaPLayVideo';




export default props => (
  <Router>

    <Scene key="root">

      <Scene key="TelaLoginCidadao"
        component={TelaLoginCidadao}
        hideNavBar={true} />
      <Scene key="TelaPlayVideo"
        component={TelaPlayVideo}
        hideNavBar={true} />


    </Scene>
  </Router>
);
