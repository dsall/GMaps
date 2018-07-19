var config = {
    apiKey: "AIzaSyCEM183SVO1MiN9pvUnne7KiGHaEBhm93w",
    authDomain: "gl-gen-bf42f.firebaseapp.com",
    databaseURL: "https://gl-gen-bf42f.firebaseio.com",
    projectId: "gl-gen-bf42f",
    storageBucket: "gl-gen-bf42f.appspot.com",
    messagingSenderId: "990871429132"
  };
  firebase.initializeApp(config);

  const firestore = firebase.firestore();

  const docRef = firestore.collection("sample/");
  const outputHeader = document.querySelector("#hotDogOutput");
  const inputTextField = document.querySelector("latestHotDogStatus");
  const saveButton = document.querySelector("#saveButton");

  saveButton.addEventListener("click", function(){
      const textToSave = inputTextField.value;
      console.log("Iam going to save" + textToSave + "to Firestore");
      docRef.set({
          hotDogStatus: textToSave
      }).the(function(){
          console.log('success');
      }).catch(function(error){
        console.log("got an error", error);
      });
  });