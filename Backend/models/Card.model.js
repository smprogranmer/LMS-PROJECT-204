import { Schema } from "mongoose";
import mongoose from "mongoose";

const cartSchema = new Schema({
  quantity: { type: Number, required: true },
  product: { type: Schema.Types.ObjectId, ref: "Products", required: true },
  user: { type: mongoose.Types.ObjectId, ref: "Users", required: true },
  size: { type: Schema.Types.Mixed },
  price: { type: Schema.Types.Mixed },
  stock: { type: Schema.Types.Mixed},
  image:{
    url:{
      type: String,
      required:true
    }
  }
  
});


export const Cart = mongoose.models.Carts || mongoose.model('Carts', cartSchema);
