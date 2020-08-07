/**
 * Job.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:{
      type:'string',
      required:true
    },

    jobDetail:{
      model:'jobDetail',
      columnName:'jobDetailId',
      required:true
    },

    // associated table
    company:{
       model:'Company',
       columnName:'companyId',
       required:true
    },

    candidate:{
      collection:'Candidate',
      via:'job',
      through:'Application',
    }
  },

};

