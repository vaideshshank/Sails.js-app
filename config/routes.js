/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'POST /company':'CompanyController.create',
    'PATCH /company/:id':'CompanyController.update',
    'GET /company':'CompanyController.find',
    'GET /company/:id':'CompanyController.findOne',
    'DELETE /company/:id':'CompanyController.delete',


    "POST /jobs":'Job.create',
    "GET /jobs":'Job.find',
    "GET /jobs/:id":'Job.findOne',
    "PATCH /jobs/:id":'Job.update',
    "DELETE /jobs/:id":'Job.delete',


    "POST /application":'Application.create',
    "GET /application":'Application.find',
    "GET /application/:id":'Application.findOne',
    "PATCH /application/:id":'Application.update',
    "DELETE /application/:id":'Application.delete',

    "POST /user":'User.create',
    // "GET /user":'User.find'
};
