import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyC-bsQF2AbDU2PHbsv37he3fL7riUjOxfs',
    authDomain: 'molly-ae0a9.firebaseapp.com',
    databaseURL: 'https://molly-ae0a9-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'molly-ae0a9',
    storageBucket: 'molly-ae0a9.appspot.com',
    messagingSenderId: '950296812479',
    appId: '1:950296812479:web:8117b23779574c1caf5f0a',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
