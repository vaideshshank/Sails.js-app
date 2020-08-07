/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    async create(req,res){
        const {name,city,address}=req.body;
        if(!name){
            return res.badRequest({message:'Name is required'});
        }

        try{
            const data=await Company.create({name,city,address}).fetch();
            return res.ok({message:'Record is created',...data});
        }catch(e){
            return res.serverError(e);
        }
        
    },
    
    async find(req,res){
        try{
            const data=await Company.find({}).populate("jobs");
            return res.ok(data);
        }catch(e){
            res.badRequest(e);
        }
    },

    async findOne(req,res){
        const {id}=req.params;
        if(!id) return res.badRequest({message:'Please provide an id to find one company.'});
        try{
            const data=await Company.findOne({id}).populate("jobs");
            return res.ok(data);
        }catch(e){
            return res.badRequest(e);
        }
    },

    async update(req,res){
        const {id}=req.params;
        const body=req.body;

        Object.keys(body).forEach(k=>{
            if(!body[k]) delete body[k]
        })

        if(!id) return res.badRequest({message:'Please provide an id to update one company.'});
        try{
            const data=await Company.updateOne({id},body);
            return res.ok({message:'Updated company',...data});
        }catch(e){
            return res.badRequest(e);
        }
    },

    async delete(req,res){
        const {id}=req.params;
        if(!id) return res.badRequest({message:'Please provide an id to delete one company.'});
        try{
            const data=await Company.destroy({id});
            return res.ok({message:'Deleted company',...data});
        }catch(e){
            return res.badRequest(e);
        }
    }

};

