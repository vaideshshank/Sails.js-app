/**
 * CandidateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Candidate = require("../models/Candidate");


module.exports = {
  async create(req,res){
    try{
        const {name, email, mobile, jobId} = req.body;
        if(!name || !email) return res.badRequest({message:'Please provide name and valid email.'});

        const data=await Candidate.create({name,email,mobile}).fetch();
        res.ok(data);
    }catch(e){
        res.serverError(e);
    }
    
  },

  async find(req,res){
    try{
        const data=await Candidate.find();
        res.ok(data);
    }catch(e){
        res.serverError(e);
    }
  },

  async findOne(req,res){
    try{
        const {id} = req.params;
        if(!id) return res.badRequest({message:'No candidate id passed'});
        const data=await Candidate.findOne({id});
        res.ok(data);
    }catch(e){
        res.serverError(e);
    }
  },

  async update(req,res){
    try{
        const {id} = req.params;
        if(!id) return res.badRequest({message:'No candidate id passed'});
        const {body} = req;
        Object.keys(body).forEach(d=>{
            if(body[d]) delete body[d];
        });

        const data=await Candidate.updateOne({id},body).fetch();
        res.ok(data);
    }catch(e){
        res.serverError(e);
    }
  },

  async delete(req,res){
    try{
        const {id}=req.params;
        if(!id) return res.badRequest({message:'No candidate id passed'});
        await Candidate.destroy({id});
        res.ok({message:'Deleted candidate'});
    }catch(e){
        res.serverError(e);
    }
  }

};

