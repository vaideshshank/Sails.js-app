/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req,res){
    try{
        const { name,parent,child } = req.body;
        if(!name) return res.badRequest({message:'Please provide a name for the user'});
        let user=await User.create({name}).fetch();
        
        if(parent){
            await UserRelation.create({parent,child:user.id});
        }
        
        if(child){
            await UserRelation.create({child,parent:user.id});
        }
        user = await User.findOne({id:user.id}).populate('parents').populate("children");
        res.ok(user);
    }catch(e){
        res.serverError(e);
    }
  },

  async find(req,res){
    try{
        const users = await User.find().populate('parents').populate("children");
        return res.ok(users);
    }catch(e){
        res.serverError(e);
    }
  }

};

