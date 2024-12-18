// firebase-init.js
const firebaseConfig = {
  // 여기에 Firebase 설정을 넣으세요
};

firebase.initializeApp(firebaseConfig);

// 전역 변수로 Firestore 인스턴스 생성
window.db = firebase.firestore();
