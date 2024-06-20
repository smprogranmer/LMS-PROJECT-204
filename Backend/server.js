import app from "./app.js"
import mongodb_url from "./config/db.js";
const PORT = process.env.PORT || 3000;
console.log("🚀 ~ PORT:", PORT)
mongodb_url()
.then(() =>{
  app.listen(PORT, (req,res) =>{
    console.log(`Server is listening on port ${process.env.PORT}`);
  })
})
.catch((error) =>{
  console.log(`MongoDb connection error ${error}`)
})
