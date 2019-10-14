import models from '../models';
export default{
    add: async (req,res,next) => {
        try{
            const reg = await models.Estudiante.create(req.body);
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    query:async (req,res,next) => {
        try{
            const reg = await models.Estudiante.findOne({_id:req.query._id});
            if(!req){
                res.status(404).send({
                    message: 'El registro no existe'
                })
            } else {
                res.status(200).json(reg)
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e); 
        }
    },
    // no olvidar agregar parametros revisar en grupo 
    list:async (req,res,next) => {
        try{
            let valor= req.query.valor;
            const reg = await models.Estudiante.find({'apellidos': new RegExp(valor,'i')},{createAt:0}.sort({'apellidos':1}));
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    update:async (req,res,next) => {
        try{
            const reg = await models.Estudiante.findByIdAndUpdate({_id:req.body._id},
                {nombres:req.body.nombres,apellidos:req.body.apellidos});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    remove:async (req,res,next) => {
        try{
            const reg = await models.Estudiante.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    activate:async (req,res,next) => {
        try{
            const reg = await models.Estudiante.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate:async (req,res,next) => {
        try{
            const reg = await models.Estudiante.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
}