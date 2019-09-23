import mongoose, {Schema} from 'mongoose';

const gradoSchema = new Schema({
    nombre: {type: String, maxlength:12,required:true,unique:true},
    estado: {type:Number,default:1},
    createdAt : {type:Date,default:Date.now}
});

const Grado = mongoose.model('grado',gradoSchema);

export default Grado;