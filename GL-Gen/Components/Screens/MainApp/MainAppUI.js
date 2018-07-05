import MainPage from './mainpage';
import BarcodeRead from './BarcodeScanner';



import { createSwitchNavigator } from 'react-navigation';


const AppFlow = createSwitchNavigator(
  {
    BarcodeRead,
    MainPage,
  },
  {
    initialRouteName: 'MainPage'
  }
)


export default AppFlow;