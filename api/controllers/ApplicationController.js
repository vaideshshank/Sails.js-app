/**
 * ApplicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    async create(req,res){
        try{
            const {name, email, jobId} = req.body;
            if(!name || !email || !jobId) return res.badRequest({message:'Please provide name,jobId and valid email.'});
            
            const data=await Candidate.create({name,email}).fetch();
            const application = await Application.create({
                candidate:data.id,
                job:jobId
            }).fetch();

            res.ok(application);
        }catch(e){
            res.serverError(e);
        }
    },

    async find(req,res){
        try{
            const data = await Application.find().populate("job").populate("candidate");
            res.ok(data);
        }catch(e){
            res.serverError(e);
        }
    },

    async findOne(req,res){
        try{
            const {id}=req.params;
            if(!id) return res.badRequest({message:'No application id provided'});
            const data = await Application.find().populate("job").populate("candidate");
            res.ok(data);
        }catch(e){
            res.serverError(e);
        }
    },

};

