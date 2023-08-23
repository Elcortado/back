import { model,Schema,Types } from "mongoose";

let collection = "cities"
let schema = new Schema({
    country: { type:String,required:true },
    fundation: { type:Date,required:true },
    population: { type:Number },
    photo: { type:String,required:true },
    city: { type:String,required:true },
    admin_id: { type:Types.ObjectId,required:false,ref:'cities' }
   
},{
    timestamps: true
})

let City = model(collection,schema)
export default City