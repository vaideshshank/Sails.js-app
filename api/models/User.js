/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type:'string',
      required:true
    },

    children:{
      collection:'User',
      via:'parent',
      through:'UserRelation'
    },

    parents:{
      collection:'User',
      via:'child',
      through:'UserRelation'
    },


  },

};

