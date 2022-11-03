const mongoose = require("mongoose");
const dbConnect = mongoose.createConnection(
  "mongodb+srv://Syamaanivilla:syama1997@node.piiwe4l.mongodb.net/syama?retryWrites=true&w=majority"
  // "mongodb+srv://prateek:asdqwe123@cluster0.aymw0vw.mongodb.net/auth?retryWrites=true&w=majority"
);
dbConnect.on("connected", () => {
  console.log("connected with data base");
});
dbConnect.on("error", () => {
  console.log("not connected");
});
module.exports = dbConnect;
