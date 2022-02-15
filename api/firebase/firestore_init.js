import firebase from 'firebase'
export function fireBaseInIt() {
  let firebaseConfig = {
    apiKey: process.env.FBC_AK,
    authDomain: process.env.FBC_AD,
    databaseURL: process.env.FBC_DBU,
    projectId: process.env.FBC_PJ_ID,
    storageBucket: process.env.FBC_SB,
    messagingSenderId: process.env.FBC_MS_ID,
    appId: process.env.FBC_APP_ID,
    measurementId: process.env.FBC_MID,
  }
  // 確認firebase是否準備初始化
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}