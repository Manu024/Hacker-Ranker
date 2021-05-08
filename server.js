const express = require("express");
const cors = require("cors");
const axios = require("axios");
const firebase = require("firebase");

const app = express();
const port = process.env.PORT || 5000;

const firebaseConfig = {
  apiKey: "AIzaSyBmQb5iewZjmDk-6ZqM-QWHZjR7aTgZGv0",
  authDomain: "skylod-94cb3.firebaseapp.com",
  databaseURL: "https://skylod-94cb3-default-rtdb.firebaseio.com",
  projectId: "skylod-94cb3",
  storageBucket: "skylod-94cb3.appspot.com",
  messagingSenderId: "300289193624",
  appId: "1:300289193624:web:44dd9b7b1f00d60d2802ed",
  measurementId: "G-CXSDR1CFRV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const addHacker = (req, res, next) => {
  const reqObj = JSON.parse(req.body.data);
  const name = reqObj.name;
  const password = reqObj.password;

  const details = {
    name: name,
    password: password,
    age: 19,
    score: 84,
    participations: 16,
    cleared: 5,
  };

  axios
    .post(
      "https://skylod-94cb3-default-rtdb.firebaseio.com/hackers.json",
      details
    )
    .then((response) => {
      if (response.status === 200) {
        req.body.status = 200;
        req.body.message = "Succesfully Added";
        next();
        return;
      }
    })
    .catch((err) => res.send(500));
};

const addAdmin = (req, res, next) => {
  const name = "Jooba";
  const password = "345";

  const details = {
    name: name,
    password: password,
    age: 21,
    sector: "developer",
  };

  axios
    .post(
      "https://skylod-94cb3-default-rtdb.firebaseio.com/admin.json",
      details
    )
    .then((response) => {
      if (response.status === 200) {
        req.body.status = 200;
        req.body.message = "Succesfully Added";
        next();
      }
    })
    .catch((err) => {
      if (err.status >= 400) {
        req.body.status = 404;
        req.body.message = "Error Occured";
        next();
      }
    });
};

const getTopRankers = async (req, res, next) => {
  req.resObj = [];
  const limit = 3;
  await database
    .ref("/hackers")
    .orderByChild("score")
    .limitToLast(limit)
    .once("child_added", (snapshot) => {
      const detail = snapshot.val();
      req.resObj.push(detail);
    });
  next();
};

const authCheck = async (req, res, next) => {
  let retrievedData = {};
  const reqObj = JSON.parse(req.body.data);
  const name = reqObj.name;
  const password = reqObj.password;
  const checker = reqObj.checker;

  await database
    .ref(`${checker}`)
    .orderByChild("name")
    .equalTo(`${name}`)
    .once("child_added")
    .then((snapshot) => {
      retrievedData = snapshot.val();
      if (retrievedData.password === password) {
        req.resObj = retrievedData;
        return next();
      } else {
        res.send(404);
      }
    })
    .catch(() => res.send(500));
};

//All-Hackers
app.get("/hackers", (req, res) => {
  axios
    .get("https://skylod-94cb3-default-rtdb.firebaseio.com/hackers.json")
    .then((response) => {
      res.json(response.data);
    })
    .catch(() => res.json("Couldn't fetch data from database"));
});

//Individual-Hacker
app.get("/hackers/:hackername", async (req, res) => {
  await database
    .ref("hackers")
    .orderByChild("name")
    .equalTo(`${req.params.hackername}`)
    .once("child_added")
    .then((snapshot) => {
      retrievedData = snapshot.val();
      if (snapshot.val()) {
        res.send(snapshot.val());
      } else {
        res.send("User not found");
      }
    })
    .catch(() => res.send(500));
});

//Top-{limit}-Rankers
app.get("/top-rankers", getTopRankers, (req, res) => {
  const data = req.resObj.reverse();
  res.send(data);
});

//Auth-check
app.post("/signin", authCheck, (req, res) => {
  const { resObj } = req;
  res.send(resObj);
});

//Add-Hacker
app.post("/signup", addHacker, (req, res) => {
  res.send(req.body.message);
});

//Add-Admin
app.post("/add-admin", addAdmin, (req, res) => {
  res.send(req.body.message);
});

app.listen(port, () => console.log("NodeJs Server Started @", port));
