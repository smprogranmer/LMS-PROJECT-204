// // import {
// //   uploadOnCloudinary,
// // } from "../config/cloudinary.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";
// import { Products } from "../models/Products.model.js";
// // import  Products  from "../models/Products.model.js";
// // import  { patch }  from "../test.js";
import ErrorHandler from "../utils/apiResponseHandler.js";
// // const cloudinary = require("cloudinary").v2;
// import { v2 as cloudinary } from "cloudinary";
// cloudinary.config({
//   cloud_name: "dlmjkprba",
//   api_key: "516442183868363",
//   api_secret: "0h5n9KPUr7CSztPQMY0HiKPIifs",
// });

import { Courses } from "../models/Courses.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// export const HomePage = catchAsyncError(async (req, res, next) => {
//   res.send("hello");
// });

/**
 * Handles the creation of a new course.
 * Validates input fields, checks for existing courses with the same name,
 * and creates a new course in the database if no existing course is found.
 * @param {Object} req - The request object containing course details in req.body.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @param {Function} next - The next middleware function in the Express.js request-response cycle.
 */
export const createCourses = catchAsyncError(async (req, res, next) => {
  const { name, description, price, category } = req.body;
  console.log(req.files,name,description,price,category,req.user);

  if (!name || !description || !price || !category) {
    return next(new ErrorHandler(400, "All fields are required"));
  }

  const existingCourse = await Courses.findOne({ name });

  if (existingCourse) {
    return next(
      new ErrorHandler(409, "Course with the same name already exists")
    );
  }
  const courseImglocalPath = req.files?.courseImg[0]?.path;

  if(!courseImglocalPath)  next(new ErrorHandler(400,"coruse imge is required"))
  console.log(req.files)
  const uploadOnC = await uploadOnCloudinary(courseImglocalPath)
  console.log("🚀 ~ createCourses ~ uploadOnC:", uploadOnC)


  const createdCourse = await Courses.create({
    name,
    description,
    price,
    category,
    courseImage: uploadOnC.secure_url,
  });
  console.log("🚀 ~ createCourses ~ createdCourse:", createdCourse)

  res.status(201).json({
    success: true,
    message: "Course created",
    createdCourse,
  });
});

export const myCourses = catchAsyncError(async (req, res, next) => {
  const { user } = req.body;

  const myCourses = await Courses.find({ students: user });

  res.status(200).json({
    success: true,
    myCourses,
    message: "myCourses geted",
  });
});

export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const { category, size, fabric, orderBy } = req.query;
  console.log("🚀 ~ getAllProducts ~ category:", category);

  const queryObject = {};
  // console.log(category.toString())
  if (category) {
    if (category === "all") {
    } else {
      queryObject.category = { $regex: category, $options: "i" };
    }
  }
  if (size) {
    queryObject.size = { $regex: size, $options: "i" };
  }
  let courses = Courses.find(queryObject).sort({ _id: -1 });

  //   if (orderBy) {
  //     products = products.sort({ _id: Number(orderBy), price: Number(orderBy) });
  //     // console.log("🚀 ~ getAllProducts ~ products:", products)
  //   }

  // console.log("🚀 ~ getAllProducts ~ products:", products)
  const result = await courses;
  // console.log("🚀 ~ getAllProducts ~ result:", result);
  // console.log("🚀 ~ getAllProducts ~ result:", result);
  res.status(200).json({
    success: true,
    result,
  });
});

// Handles the purchase of a course by a user.
export const purchaseCourse = catchAsyncError(async (req, res, next) => {
  const { courseId } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(courseId)) {
  //   return next(new ErrorHandler(400, "Invalid courseId"));
  // }

  // Find the course by its ID
  const existingCourse = await Courses.findById(courseId);

  if (!existingCourse)
    return next(new ErrorHandler(404, "Course is not found"));

  // Check if the course is already purchased by the user
  const isPurchased = existingCourse.students.includes(req.user);

  if (isPurchased)
    return next(new ErrorHandler(409, "already purchased the course"));

  // Add the user to the course's student list
  existingCourse.students.push(req.user);
  console.log(req);

  // Save the updated course
  const updatedCourse = await existingCourse.save();

  // Return a success response with the updated course information
  res.status(200).json({
    success: true,
    updatedCourse,
  });
});

export const userCourse = catchAsyncError(async (req, res, next) => {
  // Extract the user information from req.user
  const userCourses = await Courses.find({ students: req.user });

  // Send a JSON response with the retrieved courses
  res.status(200).json({
    success: true,
    userCourses,
  });
});

export const courseDetails = catchAsyncError(async (req, res, next) => {
  const { courseId } = req.params;
  const courseDetails = await Courses.findById(courseId);
  if (!courseDetails) return next(new ErrorHandler(400, "Invalid courseId"));
  res.status(200).json({
    success: true,
    courseDetails,
  });
});

export const getTandingProducts = catchAsyncError(async (req, res, next) => {
  const Products = await Products.find();

  res.status(200).json({
    success: true,
    Products,
  });
});

export const searchCourses = catchAsyncError(async (req, res, next) => {
  const { search } = req.params;
  console.log("🚀 ~ searchCourses ~ search:", search)
  const courses = await Courses.find({
    $or: [
      { name: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
    ],
  });
  res.status(200).json({
    success: true,
    courses,
  });
});

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
