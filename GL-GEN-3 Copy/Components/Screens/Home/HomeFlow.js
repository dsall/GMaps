import React from "react";

import Home from './Home';
import MapAdd from '../AddingAddress/MapAdd';
import DataAnalysis from '../AddingAddress/GetAndAnalyzeData';
import AddingPage from '../AddingAddress/AddingPage';


import { createSwitchNavigator } from 'react-navigation';


const HomeFlow = createSwitchNavigator(
  {
    Home,
    MapAdd,
    DataAnalysis,
    AddingPage,
  },
  {
    initialRouteName: 'Home'
  }
)


export default HomeFlow;