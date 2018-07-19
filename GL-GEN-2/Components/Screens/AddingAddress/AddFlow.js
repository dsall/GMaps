import React from "react";

import MapAdd from './MapAdd';
import DataAnalysis from './GetAndAnalyzeData';
import AddingPage from './AddingPage';




import { createSwitchNavigator } from 'react-navigation';


const AddFlow = createSwitchNavigator(
  {
    MapAdd,
    DataAnalysis,
    AddingPage,
  },
  {
    initialRouteName: 'MapAdd'
  }
)


export default AddFlow;