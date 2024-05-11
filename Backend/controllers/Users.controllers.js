import catchAsyncError from "../middlewares/catchAsyncError.js";
import { users } from "../models/Users.model.js";
// import { Verify } from "../models/UsersVerify.model.js";
import ErroHandler from "../utils/apiResponseHandler.js";
// import sendEmail from "../utils/sendEmail.js";
// import { sendOtp } from "../utils/sendOtp.js";
import sendToken from "../utils/sendToken.js";
// import sendVeryToken from "../utils/sendVeriyToken.js";




const registerUsers = catchAsyncError(async (req, res, next) => {
  const { name, email, password,gender,age } = req.body;

  console.log(name,email,password,age,gender)
  if (!name || !email || !password || !age || !gender) {
    return next(new ErroHandler(400, "All fields are required"));
  }

  const existingUser = await users.findOne({
    $or: [{ email }],
  });

  if (existingUser) {
    return next(
      new ErroHandler(409, "User with email already exit,Please login")
    );
  }

  const newUsers = users.create({
    name,
    email,
    password,
    age,
    gender
  });

  // await newUser.save();

  // await sendOtp(email,name);

  // await otp.save();

 

 

  res.status(200).json({
    success: true,
    message: "Account created succesfully",
    newUsers,
  });

  sendToken(Users, 201, res);
});

const loginUsers = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErroHandler(500, "invalied email and password"));
  }

  // console.log("hi")``
  const Users = await users
    .findOne({
      $or: [{ email }],
    })
    .select("+password");

  if (!Users) {
    return next(new ErroHandler(500, "Invalied user credentials"));
  }

  const isPasswordMatch = await Users.comperPassword(password);

  if (!isPasswordMatch) {
    return next(new ErroHandler(500, "Invalied user credentials"));
  }

  sendToken(Users, 200, res);
});

const logOutUsers = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expries: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "logOut User",
  });
});

const chengePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  const Users = await users.findById(req.users.id).select("+password");
  // console.log(Users)

  const isPasswordMatch = await Users.comperPassword(oldPassword);

  if (!isPasswordMatch) {
    return next(new ErroHandler("Invalied oldPassword"), 401);
  }

  Users.password = newPassword;
  await Users.save();

  sendToken(Users, 200, res);
});

const getAllUsers = catchAsyncError(async (req, res, next) => {
  const Users = await users.find();
  console.log("🚀 ~ getAllUsers ~ Users:", Users);

  res.status(200).json({
    success: true,
    Users,
  });
});

const getSingleUser = catchAsyncError(async (req, res, next) => {
  const Users = await users.findById(req.users._id);

  res.status(200).json({
    success: true,
    Users,
  });
});


const upgradeProfile = catchAsyncError(async (req, res, next) => {
  const { name, email, role } = req.body;

  const Users = await users.findById(req.users.id);

  if (name) Users.name = name;
  if (email) Users.email = email;
  if (role) Users.role = role;
  // console.log(Users)

  await Users.save();

  sendToken(Users, 200, res);
});

const deleteUsers = catchAsyncError(async (req, res, next) => {
  const Users = await users.findById(req.params.id);

  if (!Users) {
    return next(new ErroHandler("user dose not exit"), 404);
  }

  await Users.remove();

  sendToken(Users, 200, res);
});

export {
  getAllUsers,
  registerUsers,
  loginUsers,
  logOutUsers,
  chengePassword,
  upgradeProfile,
  getSingleUser,
  deleteUsers,
  // verifyUser,
  // sendEmailOtp,
};
