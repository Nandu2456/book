import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
export const auth=firebase.initializeApp( {
    apiKey: "AIzaSyCwOJQfapHlR8SA0AtyKtnPd4Ki1SQP8fw",
    authDomain: "my-app-83068.firebaseapp.com",
    projectId: "my-app-83068",
    storageBucket: "my-app-83068.appspot.com",
    messagingSenderId: "308993322969",
    appId: "1:308993322969:web:fc9dd264570cd64de433c8"
  }).auth();