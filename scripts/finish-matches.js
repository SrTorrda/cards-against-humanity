/* eslint-disable */

const { initializeApp } = require('firebase/app');

const {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyASGjUugvR_zgp8xH-x8yA3FcM-FCcXR_I",
  authDomain: "cch-26837.firebaseapp.com",
  projectId: "cch-26837",
  storageBucket: "cch-26837.firebasestorage.app",
  messagingSenderId: "16189043560",
  appId: "1:16189043560:web:9cb3c833fe46609c7c9cdd",
  measurementId: "G-NVWBVHJX4Y"
};


const app = initializeApp(firebaseConfig);

const matchesCollection = collection(getFirestore(app), 'matches');

const q = query(matchesCollection, where('status', '!=', 'FINISHED'));

const finishMatches = async () => {
  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      try {
        await updateDoc(doc.ref, {
          status: 'FINISHED',
        });

        console.log(`Partida ${doc.id} finalizada com sucesso.`);
      } catch (error) {
        console.error(`Erro ao finalizar partida ${doc.id}:`, error);
      }
    });

    console.log(`${querySnapshot.size} Partida(s) finalizadas com sucesso.`);
  } catch (error) {
    console.error('Erro ao finalizar partidas:', error);
  }
};

finishMatches();
