import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const carSchema = new Schema({
  title: String,
  image: String,
  brand: String,
  model: String,
  color: String,
  year: String,
  price: Number,
  engineType: String,
  transmisson: String,
  powerReserve: String || undefined,
  readbleId: Number,
});


const CarModel = mongoose.models.Car || mongoose.model('Car', carSchema)
export default CarModel