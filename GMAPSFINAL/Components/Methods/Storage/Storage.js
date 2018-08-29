import { AsyncStorage } from "react-native";

StoreData = async (location, datatostore) => {
    let data = datatostore;
    try {
      await AsyncStorage.setItem(location, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
}

GetData = async (location) => {
    try {
        const value = await AsyncStorage.getItem(location);
        if (value !== null) {
          result = JSON.parse(value);
          //  console.log(result)
        }
        return result;
       } catch (error) {
         console.log(error);
       }
       
}

DeleteData = async (location) => {
  try {
    await AsyncStorage.removeItem(location)
  } catch (err) {
    console.log(`The error is: ${err}`)
  }
}

