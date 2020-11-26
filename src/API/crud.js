// import firebase from '../firebaseInit';
// const db = firebase.firestore();
import { firebase } from '../firebaseInit';

// const time = firebase.firestore.Timestamp.fromDate(new Date());
// Permite mandar el esquema de data por cada projecto a la base de datos
const publishData = (obj, dataset) => firebase
  .firestore()
  .collection(dataset)
  .doc()
  .set(obj)
  .then((resp) => {
    console.log('se envio la orden con éxito');
    console.log(resp);
  })
  .catch((error) => {
    console.log('Ocurrió un error al enviar la order', error);
  });

const sendCCI = (arr) => {
  console.log(arr);
  const iterable = arr.map((element) => publishData(element, 'projectos'));
  Promise.all(iterable).then((values) => {
    console.log(values);
  });
};
// OPTIONAL----
const listenAllDocs = (callback, dataset) => {
  firebase
    .firestore()
    .collection(dataset)
    .onSnapshot((doc) => {
      const dataArr = doc.docs.map((listTable) => ({
        id: listTable.id,
        ...listTable.data(),
      }));
      callback(dataArr);
    });
};
const getADocument = (docID, collectionName) => {
  const docRef = firebase.firestore().collection(collectionName).doc(docID);
  return docRef.get();
};
export {
  sendCCI,
  listenAllDocs,
  getADocument,
};
