const data=require('../assets/product.json')
const mongoose=require('mongoose')
const productSchema=mongoose.model("productSchema")

module.exports.getProduct=((req,res)=>{

    res.send(data);

})

module.exports.getOneProduct=((req,res)=>{

    let id=req.params.id;

    let user=data.filter((oneData)=>{
        if(oneData.id==id){
            res.send(oneData);
        }
    })

})

module.exports.addProduct=async function addProduct(req,res){

    // var data = new productSchema();

    // data.title="I am Title";
    // data.price=100;
    // data.description="I am a Description";
    // data.image="image";
    // data.category="Example"

    // data.save((err, doc) => {
    //     if (!err)
    //         res.send(doc);
    //     else {
    //             res.send(['Unable To Add Product Details.']);
    //     }

    // });

    try {
        let dataObj=req.body;
        let user=await productSchema.create(dataObj)
        // console.log('Backend',obj);

        if(user){
            res.json({
                message:"User Signed Up",
                data:user
            })
        }
        else{
            res.json({
                message:"Error while signing up"
            })
        }

    } catch (error) {
        res.json({
            message:error.message
        })
    }

}


// try {
//     const Product = mongoose.model("Products", {
//         title: String,
//         price: Number,
//         description: String,
//         image: String,
//         category: String,
//       });
      
//       const kitty = new Product({
//             title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//             price: 56.99,
//             description:
//               "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//             category: "women's clothing",
//             image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//           });
//       kitty.save().then(() => res.send("Product Details Saved SuccessFully"));
// } catch (error) {
//     res.send({
//         message:error.message
//     })
// }