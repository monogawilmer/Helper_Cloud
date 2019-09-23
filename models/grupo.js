import mongoose, {Schema} from 'mongoose';

const grupoSchema = new Schema({
    grado: { type:  Schema.ObjectId, ref: 'grado'},
    nombre: {type: String, maxlength:4,required:true},
    estado: {type:Number,default:1},
    createdAt : {type:Date,default:Date.now}
});

const Grupo = mongoose.model('grupo',grupoSchema);

export default Grupo;