// // import {
// //   uploadOnCloudinary,
// // } from "../config/cloudinary.js";
// import catchAsyncError from "../middlewares/catchAsyncError.js";
// import { Products } from "../models/Products.model.js";
// // import  Products  from "../models/Products.model.js";
// // import  { patch }  from "../test.js";
// import ErroHandler from "../utils/apiResponseHandler.js";
// // const cloudinary = require("cloudinary").v2;
// import { v2 as cloudinary } from "cloudinary";
// cloudinary.config({
//   cloud_name: "dlmjkprba",
//   api_key: "516442183868363",
//   api_secret: "0h5n9KPUr7CSztPQMY0HiKPIifs",
// });

// export const HomePage = catchAsyncError(async (req, res, next) => {
//   res.send("hello");
// });

// export const getAllProducts = catchAsyncError(async (req, res, next) => {
//   const { category, size, fabric, orderBy } = req.query;
//   console.log("🚀 ~ getAllProducts ~ category:", category);

//   const queryObject = {};
//   // console.log(category.toString())
//   if (category) {
//     if (category === "all") {
      
//     } else {
//      queryObject.category = { $regex: category, $options: "i" };
//     }
//   }
//   if (size) {
//     queryObject.size = { $regex: size, $options: "i" };
//   }
//   let products = Products.find(queryObject).sort({ _id: -1 });

//   if (orderBy) {
//     products = products.sort({ _id: Number(orderBy), price: Number(orderBy) });
//     // console.log("🚀 ~ getAllProducts ~ products:", products)
//   }

//   // console.log("🚀 ~ getAllProducts ~ products:", products)
//   const result = await products;
//   // console.log("🚀 ~ getAllProducts ~ result:", result);
//   // console.log("🚀 ~ getAllProducts ~ result:", result);
//   res.status(200).json({
//     success: true,
//     result,
//   });
// });
// export const getTandingProducts = catchAsyncError(async (req, res, next) => {
//   const Products = await Products.find();

//   res.status(200).json({
//     success: true,
//     Products,
//   });
// });

// export const cloudinaryTest = catchAsyncError(async (req, res, next) => {
//   const files = req.files;
//   const { name, description, price, image, category } = req.body;
//   console.log(
//     "🚀 ~ file: Products.controllers.js:25 ~ cloudinaryTest ~ files:",
//     files
//   );
//   const urls = [];
//   // console.log("🚀 ~ file: Products.controllers.js:40 ~ cloudinaryTest ~ urls:", urls)
//   for (const file of files) {
//     const { path } = file;
//     // console.log("🚀 ~ file: Products.controllers.js:94 ~ //res.status ~ path:", path)
//     const newPath = await cloudinary.uploader.upload(path, {
//       resource_type: "auto",
//       folder: "NIBH_IMAGES",
//     });
//     // console.log("🚀 ~ file: Products.controllers.js:40 ~ createProducts ~ newPath:", newPath)
//     urls.push(newPath);
//   }

//   const imgData = urls.map((url) => ({
//     public_id: url.public_id,
//     url: url.secure_url,
//   }));
//   console.log(
//     "🚀 ~ file: Products.controllers.js:54 ~ cloudinaryTest ~ imgData:",
//     imgData
//   );
//   const products = await Products.create({
//     name,
//     description,
//     price,
//     category,
//     image: imgData,
//   });

//   res.status(201).json({
//     message: "Product created succfully",
//     products,
//   });
// });

// export const getOneProduct = catchAsyncError(async (req, res, next) => {
//   const products = await Products.findById(req.params.id);

//   if (!products) {
//     return next(new ErroHandler("Invalied id ", 404));
//   }

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });

// // export const createProducts = catchAsyncError(async (req, res, next) => {
// //   // const {name,description,price,image,category} = req.body
// //   // const files = req.files
// //   // // console.log("🚀 ~ file: Products.controllers.js:36 ~ createProducts ~ files:", files)
// //   // // let path = files.map(file => file.path)

// //   // const uploadPromises = files.map((file) => {
// //   //   const base64Data = file.buffer.toString('base64');
// //   //   return cloudinary.uploader.upload(`data:${file.mimetype};base64,${base64Data}`, {
// //   //     folder: 'your-folder',
// //   //   }).then((result) => {
// //   //     if (result.error) {
// //   //       console.error('Cloudinary Upload Error:', result.error.message);
// //   //     }
// //   //     return result;
// //   //   });
// //   // });

// //   // const uploadedResults = await Promise.all(uploadPromises);
// //   // const imageUrls = uploadedResults.map((result) => result.secure_url);
// //   // console.log("🚀 ~ file: Products.controllers.js:53 ~ createProducts ~ imageUrls:", imageUrls)
// //   // const json = req.json(uploadedResults)
// //   // console.log("🚀 ~ file: Products.controllers.js:54 ~ createProducts ~ json:", json)
// //   // console.log("🚀 ~ file: Products.controllers.js:50 ~ createProducts ~ uploadedResults:", uploadedResults)

// //   // console.log("🚀 ~ file: Products.controllers.js:38 ~ createProducts ~ urls:", urls)
// //   // // const imgData = urls.map(url =>{
// //   // //   const secure_url = url.secure_url;
// //   // //   const public_id = url.public_id;
// //   // //   return su
// //   // // })

// //   // const imgData = urls.map( url => ({public_id: url.public_id, url: url.secure_url}))
// //   // console.log("🚀 ~ file: Products.controllers.js:53 ~ createProducts ~ imgData:", imgData)

// //   // const Products = await products.create({
// //   //   name,
// //   //   description,
// //   //   price,
// //   //   category,
// //   // });

// //   // res.status(201).json({
// //   //   success: true,
// //   //   Products,
// //   const { name, description, price, image, category } = req.body;
// //   const files = req.files;
// //   // console.log("🚀 ~ file: Products.controllers.js:88 ~ //res.status ~ files:", files)
// //   //  uploadPromises(files)
// //   // const hello = multiple(files)
// //   // console.log("🚀 ~ file: Products.controllers.js:104 ~ //res.status ~ hello:", hello)
// //   const c = await uploadOnCloudinary(files[0].path);

// //   //   const urls = []
// //   //   console.log("🚀 ~ file: Products.controllers.js:88 ~ //res.status ~ urls:", urls)
// //   //   for(const file of files){
// //   //     const {path} = file;
// //   //     console.log("🚀 ~ file: Products.controllers.js:94 ~ //res.status ~ path:", path)
// //   //     const newPath = await uploadOnCloudinary(path)
// //   //     console.log("🚀 ~ file: Products.controllers.js:40 ~ createProducts ~ newPath:", newPath)
// //   //     urls.push(newPath)
// //   //   }
// //   // console.log("hello")
// //   // const uploadedResults = await Promise.all(uploadPromises);
// //   // console.log("🚀 ~ file: Products.controllers.js:100 ~ createProducts ~ uploadedResults:", uploadedResults)

// //   // Extract Cloudinary URLs
// //   // const imageUrls = uploadedResults.map((result) => result.secure_url);

// //   // Log the image URLs to the console
// //   // console.log('Image URLs:', imageUrls);

// //   const Products = await products.create({
// //     name,
// //     description,
// //     price,
// //     category,
// //     image,
// //   });

// //   res.status(201).json({
// //     success: true,
// //     Products,
// //   });
// //   // Create a new product in MongoDB
// //   // const newProduct = new Product({
// //   //   name,
// //   //   Products,
// //   //   imageUrls,
// //   // });

// //   // await newProduct.save();

// //   // res.json({ message: 'Files uploaded to Cloudinary and saved in MongoDB.' });
// // });

// export const upgradeProducts = catchAsyncError(async (req, res, next) => {
//   let products = Products.findById(req.params.id);

//   if (!products) {
//     return next(new ErroHandler("Invalied id", 404));
//   } else {
//     products = await Products.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     });
//   }

//   res.status(201).json({
//     success: true,
//     products,
//   });
// });

// export const deleteProducts = catchAsyncError(async (req, res, next) => {
//   let products = Products.findById(req.params.id);

//   if (!products) {
//     return next(new ErroHandler("Invalied id ", 404));
//   } else {
//     products = await products.deleteOne({ _id: req.params.id });
//   }

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });
