import mongoose, {Schema} from 'mongoose';

const docenteSchema = new Schema({
    nombres: {type: String, maxlength:40,required:true},
    apellidos: {type: String, maxlength:40,required:true},
    documentoIdentidad: {type: String, maxlength:20,required:true,unique:true},
    sexo: {type: String, maxlength:2,required:true},
    telefono: {type: String, maxlength:11,required:true},
    email: {type: String, maxlength:50,required:true},
    eps: {type: String, maxlength:40,required:true},
    rh: {type: String, maxlength:4,required:true},
    estado: {type:Number,default:1},
    contactoEmergencia: {type: String, maxlength:11,required:true},
    usuario: {type: String, maxlength:10,required:true},
    createdAt : {type:Date,default:Date.now}

});

const Docente = mongoose.model('docente',docenteSchema);

export default Docente;