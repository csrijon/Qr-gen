import express from "express";
import qrcode from "qrcode";
const app = express();
const port = 3000;



app.listen(port, () => {
  console.log(`${port} is listening`);
})

app.get("/genqr",async(req,res) => {
  const data = req.query.data
  if (!data) {
    console.log("data nei ")
  }
  let size = 300;
  if (req.query.size) {
    size = parseInt(req.query.size)
  }else{
    console.log("size nei")
  }
  let colour = "#2c2e67" 
  if (req.query.colour) {
    colour = req.query.colour
  }else{
    console.log("colour nei")
  }
  let qrimage =await qrcode.toBuffer(data,{width:size,
    color:{
        dark:colour,
    }
  })
  res.setHeader("Content-Type", "image/png")
  res.send(qrimage)
})