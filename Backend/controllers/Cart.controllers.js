import catchAsyncError from "../middlewares/catchAsyncError.js";
import { Cart } from "../models/Card.model.js";

export const addToCart = catchAsyncError(async (req, res) => {
  console.log(req.body)
  const cart = new Cart({ ...req.body,image: {
    url: req.body.image[0].url
  }, user: req.users._id });

  const newCart = await cart.save();
  const result = await newCart.populate("product")

  res.status(201).json({
    success: true,
    message: "Product add to cart sucessfully",
    newCart,
  });
});

export const productRemovefromCart = catchAsyncError(async (req, res) => {
  const { id } = req.params;

  const remvoeProduct = await Cart.findByIdAndDelete(id);
  console.log("🚀 ~ productRemovefromCart ~ remvoeProduct:", remvoeProduct)

  res.status(200).json({
    success: true,
    message: "Product remove from cart sucessfully",
    remvoeProduct,
  });
});


export const fetchCartProduct = catchAsyncError(async (req,res) =>{
    const {_id} = req.users
    const cartProducts = await Cart.find({ user: _id})

    res.status(200).json({
        success:true,
        message:"Product fetch sucessfully",
        cartProducts
    })
})

export const upgradeProductCart = catchAsyncError(async(req,res) =>{
    const {id} = req.params
    // console.log(req.body.quantity)
    const upgradedProduct = await Cart.findByIdAndUpdate(
        id,
        {
            $set: {
                quantity:req.body.quantity
            }
        },
        {      new: true,
            runValidators: true,
            useFindAndModify: false,}
    )
    // console.log("🚀 ~ upgradeProductCart ~ upgradedProduct:", req.body.quantitry)
    res.status(200).json({
        success:true,
        message:"Product upgrade sucessfully",
        upgradedProduct
    })

})