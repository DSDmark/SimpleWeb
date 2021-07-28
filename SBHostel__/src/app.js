// ────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E Q U I R E   M O D U L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────
const express = require(
    'express'
);
const path = require(
    'path'
);

const app = express();
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname,"../public/");
console.log(staticPath)

app.use(express.static(staticPath));
// ────────────────────────────────────────────────────── II ──────────
//   :::::: R O U T I N G : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("*",(req,res)=>{
    res.send("<h1>page not found place go back </h1>");
});

app.listen(port,(error)=>{
    console.log(`port listing at no. ${port}`);
});
