
// const { request, response } = require("express");
const express = require("express");
const router = express.Router();


// /routes/goods.js
const goods = [
    {
      goodsId: 4,
      name: "상품 4",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
      category: "drink",
      price: 0.1,
    },
    {
      goodsId: 3,
      name: "상품 3",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
      category: "drink",
      price: 2.2,
    },
    {
      goodsId: 2,
      name: "상품 2",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
      category: "drink",
      price: 0.11,
    },
    {
      goodsId: 1,
      name: "상품 1",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
      category: "drink",
      price: 6.2,
    },
  ];

  router.get("/goods",(req,res) => { 
    //startus()  정보를 받을수 있다 
                          //key와 value이름이 같을 경우 {goods} 하나로 요약 가능
    res.status(200).json({"goods":goods})
  });


  router.get("/goods/:goodsId",(req,res) => { 
    const { goodsId }  = req.params;

    // let result = null;
    // for(const good of goods){
    //   if(good.goodsId === Number(goodsId)) {
    //     result = good;
    //   }
    // }

    const [result] = goods.filter((good) =>Number(goodsId) === good.goodsId)   


      

    res.status(200).json({detail : result})
  });






//////////////////////////////////////////////////////////////////////////////


// (경로, (전달,반환))
// localhost:3000/api/ GET
router.get('/',(req,res) => {
    //반환한다.(값을)
    res.send("get Method");
}) 


// localhost:3000/api/about/ GET
router.get('/about', (req,res) => {
    res.send("goods.js about PATH");
})

//router를 밖으로 내보낼수 있도록 작업
module.exports = router;

