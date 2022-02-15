const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { getBeersList } = require('./user.js');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// portfolio
app.get('/portfolio', function (req, res) {
  if (Object.keys(req.query).length === 0) {
    // 列出所有 portfolio
    // res.cookie('cart', { items: [1, 2, 3] });


    res.json(getBeersList)
  } else {
    // 依照 ID 查詢
    let gBsArr = getBeersList.filter(function (item, index, array) {
      if (item.product_id === Number(req.query.num)) {
        return item;
      }
    });
    res.json(gBsArr)
  }
})

//////////////////////////////////////
// Firestore
const fbReq = require('firebase');
const fbReqInIt = require('./firebase/firestore_init.js');
fbReqInIt.fireBaseInIt();
const ref = fbReq.firestore().collection('content');

// 查詢
app.get('/search', function (req, res) {
  // key 和 value 變數
  let viKey = Object.keys(req.query)[0];
  let viValue = Object.values(req.query)[0];
  if (Object.keys(req.query).length === 0) {
    // 列出所有資料
    ref.get().then(querySnapshot => {
      let docList = [];
      querySnapshot.forEach(doc => {
        docList.push(doc.data());
      });
      res.json(docList)
    }).catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  } else {
    // 依照 key 跟 value 列出資料
    ref.where(viKey, "==", viValue).get().then(querySnapshot => {
      let docList = [];
      querySnapshot.forEach(doc => {
        docList.push(doc.data());
      });
      res.json(docList)
    }).catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  }
})

// 新增資料
app.post('/test', (req, res) => {
  let oBjTest = {
    "mail": req.body.mail,
    "post_date": req.body.post_date,
    "post_name": req.body.post_name,
    "post_id": req.body.post_id,
    "post_des": req.body.post_des
  }
  // 用 docID 新增
  ref.doc(oBjTest.mail).set({
    mail: oBjTest.mail,
    post_date: oBjTest.post_date,
    post_name: oBjTest.post_name,
    post_id: oBjTest.post_id,
    post_des: oBjTest.post_des
  }).then(() => {
    let finObj = {
      "status": "OK",
      "response": oBjTest
    }
    res.json(finObj);
  }).catch((error) => {
    console.log("Error getting documents: ", error);
  });
  // console.log(JSON.stringify(oBjTest));
  // console.log(JSON.parse(oBjTest));
});


/*
// 用 docID 新增
ref.doc("alice@gmail.com").set({
  mail: "alice@gmail.com",
  post_date: '2020-12-25',
  post_name: 'alice',
  post_id: 4441,
  post_des: 'Nibh tortor id aliquet lectus. Pellentesque pulvinar pellentesque habitant morbi. Ultrices tincidunt arcu non sodales neque.'
})
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.log("Error getting documents: ", error);
  });
// 一般新增
ref.doc("andy@gmail.com").add({
  mail: "andy@gmail.com",
  post_date: '2020-12-25',
  post_name: 'andy',
  post_id: 9999,
  post_des: 'Urna duis convallis convallis tellus id interdum. Dui ut ornare lectus sit amet est placerat in egestas.'
})
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.log("Error getting documents: ", error);
  });

// 刪除
firebase.firestore()
  .collection("PTSVOD")
  .doc(docId)
  .delete()
  .then(() => {
    console.log("delete data successful");
  });
*/

///////////////////////////////////////////////
// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
