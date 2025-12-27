// CONFIGURATION - Replace with your Firebase details
const firebaseConfig = {
    apiKey: "AIzaSyBZXJEdvxlU9QBED7g9FDae8MEgucSVcMg",
    authDomain: "btc-binary-options-game.firebaseapp.com",
    databaseURL: "https://btc-binary-options-game-default-rtdb.firebaseio.com",
    projectId: "btc-binary-options-game",
    storageBucket: "btc-binary-options-game.firebasestorage.app",
    messagingSenderId: "887217818566",
    appId: "1:887217818566:web:9ddac7bcab764a3b2740c7"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
const BTSE_API = "https://api.btse.com/spot/api/v3.2/market_summary?symbol=BTC-USDT";

// Database References
const stateRef = db.ref('gameState');
const tablesRef = db.ref('tables');
