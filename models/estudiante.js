import mongoose, {Schema} from 'mongoose';

const estudianteSchema = new Schema({
    nombres: {type: String, maxlength:40,required:true},
    apellidos: {type: String, maxlength:40,required:true},
    documentoIdentidad: {type: String, maxlength:20,required:true,unique:true},
    sexo: {type: String, maxlength:2,required:true},
    telefono: {type: String, maxlength:11},
    eps: {type: String, maxlength:40,required:true},
    rh: {type: String, maxlength:4,required:true},
    grado: {type:  Schema.ObjectId, ref: 'grado'},
    grupo: {type:  Schema.ObjectId, ref: 'grupo'},
    estado: {type:Number,default:1},
    usuario: {type: String, maxlength:10,required:true},
    contactoEmergencia: {type: String, maxlength:11,required:true},
    emailAcudiente: {type: String, maxlength:50},
    nombreAcudiente: {type: String, maxlength:80,required:true},
    parentezco: {type: String, maxlength:50,required:true},
    createdAt : {type:Date,default:Date.now}
});

const Estudiante = mongoose.model('estudiante',estudianteSchema);

export default Estudiante;