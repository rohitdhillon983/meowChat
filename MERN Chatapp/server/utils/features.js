import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import { getBase64,getSockets } from "../lib/helper.js";


const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

const connectDB = async () => {
    mongoose.connect("mongodb+srv://MernChatApp:MernChatApp@mernchatapp.9lyoi.mongodb.net/?retryWrites=true&w=majority&appName=MERNChatApp").then(() => {
        console.log('Connected to the database successfully');
    }).catch((error) => {   
        console.log('Error:', error.message);
    });
}

const sendToken = (res, user, code, message) => {
    const token = jwt.sign({ _id: user._id }, "process.env.JWT_SECRET");
  
    return res.status(code).cookie("chattu-token", token, cookieOptions).json({
      success: true,
      user,
      message,
    });
  };

const uploadFilesToCloudinary = async (files = []) => {
    const uploadPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          getBase64(file),
          {
            resource_type: "auto",
            public_id: uuid(),
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
      });
    });
  
    try {
      const results = await Promise.all(uploadPromises);
      const formattedResults = results.map((result) => ({
        public_id: result.public_id,
        url: result.secure_url,
      }));
      return formattedResults;
    } catch (err) {
      throw new Error("Error uploading files to cloudinary", err);
    }
  };

const deletFilesFromCloudinary = async (public_ids) => {
    // Delete files from cloudinary
  };
const emitEvent = (req, event, users, data) => {
    const io = req.app.get("io");
    const usersSocket = getSockets(users);
    io.to(usersSocket).emit(event, data);
  };

export {connectDB,sendToken,uploadFilesToCloudinary,cookieOptions,deletFilesFromCloudinary,emitEvent};