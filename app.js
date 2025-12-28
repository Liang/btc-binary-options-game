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

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const stateRef = db.ref('gameState');
const tablesRef = db.ref('tables');

const BUY_IN = 1200;

async function fetchBTCPrice() {
    try {
        const res = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
        const data = await res.json();
        return parseFloat(data.price);
    } catch (e) {
        console.error("Binance Sync Error:", e);
        return null;
    }
}
