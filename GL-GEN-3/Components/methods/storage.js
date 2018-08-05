import { AsyncStorage } from "react-native";

StoreData = async (location, datatostore) => {
    let data = datatostore;
    try {
      await AsyncStorage.setItem(location, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
}

var result = '';
GetData = async (location) => {
    try {
        const value = await AsyncStorage.getItem('PhoneNumberData');
        if (value !== null) {
          result = JSON.parse(value);
        //   console.log(result)
        }
       } catch (error) {
         console.log(error);
       }
       return result;
}