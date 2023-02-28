const express = require("express");
const router = express.Router();


const Cart = require("../schemas/cart.js")

 router.post("/goods/:goodsId/cart", async(req,res)=>{
  const {goodsId} = req.params;
  const {quantity} = req.body;
  // const goodsId = req.params.goodsId;
  // const quantity = req.body.quantity;

  const existCarts = await Cart.find({goodsId});

  if(existCarts.length) {
    return res.status(400).json({
      success:false,
      errorMessage:"이미 장바구니에 해당 제품이 존재합니다",
    })
  }

  await Cart.create({goodsId,quantity});
  
  res.json({result : "succes"});

 })



const Goods = require("../schemas/goods.js");
router.post('/goods/', async (req,res) => { 
 
  const {goodsId, name, thumbnailUrl,category, price} = req.body;
 
  const goods = await Goods.find({ goodsId });
  if (goods.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

   const createdGoods = await Goods.create({goodsId, name, thumbnailUrl,category, price});
  res.json({goods : createdGoods});
  
})


// const Goods = require("../schemas/goods");
// router.post("/goods", async (req, res) => {
// 	const { goodsId, name, thumbnailUrl, category, price } = req.body;

//   const goods = await Goods.find({ goodsId });
//   if (goods.length) {
//     return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
//   }

//   const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

//   res.json({ goods: createdGoods });
// });








  router.get("/goods",(req,res) => { 
    //startus()  정보를 받을수 있다 
                          //key와 value이름이 같을 경우 {goods} 하나로 요약 가능
    res.status(200).json({"goods":goods})


    
  });
  
  router.get('/',(req,res) => {
    //반환한다.(값을)
    res.send("get Method");
}) 

module.exports = router;



  // router.get("/goods/:goodsId",(req,res) => { 
  //   const { goodsId }  = req.params;

  //   //아래와 같은 코드
  //   // let result = null;
  //   // for(const good of goods){
  //   //   if(good.goodsId === Number(goodsId)) {
  //   //     result = good;
  //   //   }
  //   // }

  //   const [result] = goods.filter((good) =>Number(goodsId) === good.goodsId)   
  //   res.status(200).json({detail : result})
  // });

// (경로, (전달,반환))
// localhost:3000/api/ GET

// localhost:3000/api/about/ GET
// router.get('/about', (req,res) => {
//     res.send("goods.js about PATH");
// })

//router를 밖으로 내보낼수 있도록 작업






  // res.json(req.body);
  
  // const goods = await Goods.find({goodsId});
  // if(goods.length) { 
  //   return res.status(400).json({
  //     success:false, 
  //     errorMessageg: "이미존재하는 ID입니다"
  //   });
  // }  


  // const { request, response } = require("express");