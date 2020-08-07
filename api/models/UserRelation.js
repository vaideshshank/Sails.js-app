/**
 * UserRelation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    parent:{
      model:'User',
      columnName:'parentId',
    },

    child:{
      model:'User',
      columnName:'childId'
    }

  },

};

