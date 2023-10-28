import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { config } from "../constants/config";

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);

const db = getDatabase();
const storage = getStorage();
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export { db, storage, auth };
