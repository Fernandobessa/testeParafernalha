import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TelaListVideo from './src/components/telaListVideo';
import TelaPlayVideo from './src/components/telaPLayVideo';




export default props => (
  <Router>

    <Scene key="root">

      <Scene key="TelaListVideo"
        component={TelaListVideo}
        hideNavBar={true} />
      <Scene key="TelaPlayVideo"
        component={TelaPlayVideo}
        hideNavBar={true} />


    </Scene>
  </Router>
);
