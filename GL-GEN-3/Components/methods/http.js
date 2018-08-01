

 function GetAddress (id) {
  fetch('https://b6914eed.ngrok.io/AddAddress/'+ id +'')
  .then((response) => response.json())
  .then((responseJson) => {
    loading = false;
    responseJson = DataFetched;
  })
  .catch((error) =>{
    console.error(error);
  });
}


console.log(GetAddress("5b5a764aefae0f03e0e9a42f"));
