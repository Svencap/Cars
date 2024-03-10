import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb+srv://Svencap:Arhara256@cluster0.5x7b7kl.mongodb.net/testdb");
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