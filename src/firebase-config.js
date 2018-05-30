const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyCfBFQt6LjFYTxhhloMERcYl5P_ecik7oU",
    authDomain: "company-react.firebaseapp.com",
    databaseURL: "https://company-react.firebaseio.com",
    projectId: "company-react",
    storageBucket: "company-react.appspot.com",
    messagingSenderId: "150679290770"
  }

  const app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()

  export default config