/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    async create(req,res){
        const {salary,title,description,position,companyId}=req.body;

        try{
            if(!title){
                return res.badRequest({message:'Job title is required'});
            }

            if(!salary){
                return res.badRequest({message:'Salary is required'});
            }

            const jobDetail = await JobDetail.create({description,position,salary}).fetch();
            const job = await Job.create({title,jobDetail:jobDetail.id,company:companyId}).fetch();
            return res.ok(job); 
        }catch(e){
            return res.serverError(e);
        }
        
    },

    async find(req,res){
        try{
            const data=await Job.find({}).populate("jobDetail").populate("company").populate("candidate");
            return res.ok(data); 
        }catch(e){
            res.serverError(e);
        }
    },


    async findOne(req,res){
        try{
            const {id}=req.params;
            if(!id) res.badRequest({message:'Please provide job id to view'});
            const data=await Job.findOne({id}).populate("jobDetail").populate("company").populate("candidate");
            return res.ok(data);
        }catch(e){
            return res.serverError(e);
        }
        
    },

    async update(req,res){
        try{
            const {id}=req.params;
            const {body}=req;
            if(!id) res.badRequest({message:'Please provide job id to update'});

            const job=Job.findOne({id});
            if(body.title) {
                await Job.update({id},{title:body.title});
                delete body.title;
            }
            
            if(!body.title){
                await JobDetail.update({id:job.jobDetailId},body);
            }

            const data=await Job.findOne({id}).populate("jobDetail");
            return res.ok(data);
        }catch(e){
            return res.serverError(e);
        }
        
    },

    async delete(req,res){
        try{
            const {id}=req.params;
            if(!id) return res.serverError({message:"id of job is required to delete"});
            
            const job=await Job.findOne({id});
            
            if(job.jobDetail) await JobDetail.destroy({id:job.jobDetail});
            let data=await Job.destroy({id});
            return res.ok({message:'Successfully deleted',...data});
        }catch(e){
            res.serverError(e);
        }
        
    }

};

