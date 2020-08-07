/**
 * JobDetailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  async create(req,res){
    
    const {description,salary,position}=req.body;
    if(!salary) return res.badRequest({message:'Please provide a salary for the job'});

    try{
        let data=await JobDetail.create({description,salary,position});
        return res.ok({message:"Job created",...data});
    }catch(e){
        res.badRequest(err);
    }

  },

};

