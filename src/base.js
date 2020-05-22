import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAkmwEB3fU5qZmbksG-_ZV1TOUvUxRoQfw",
  authDomain: "oddam-rzeczy-468a0.firebaseapp.com",
  databaseURL: "https://oddam-rzeczy-468a0.firebaseio.com",
  projectId: "oddam-rzeczy-468a0",
  storageBucket: "oddam-rzeczy-468a0.appspot.com",
  messagingSenderId: "102191621792",
  appId: "1:102191621792:web:803dcdb3bc8ce77ba88bc5"
});

export default app;
