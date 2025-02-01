import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';

import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASGjUugvR_zgp8xH-x8yA3FcM-FCcXR_I",
  authDomain: "cch-26837.firebaseapp.com",
  projectId: "cch-26837",
  storageBucket: "cch-26837.firebasestorage.app",
  messagingSenderId: "16189043560",
  appId: "1:16189043560:web:9cb3c833fe46609c7c9cdd",
  measurementId: "G-NVWBVHJX4Y"
};

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export function createCollection<T = DocumentData>(
  collectionName: string
): CollectionReference<T> {
  return collection(db, collectionName) as CollectionReference<T>;
}
export const matchesCollection = createCollection<MatchType>('matches');
export const generalCollection = createCollection<GeneralType>('general');
export const cardsCollection = createCollection<CardType>('cards');
export const usersCollection = createCollection<UserType>('users');
export const adminsCollection = createCollection('admins');

export const authProvider = new GoogleAuthProvider();
export const auth = getAuth();

export async function login(): Promise<UserCredential> {
  return signInWithPopup(auth, authProvider, browserPopupRedirectResolver);
}
