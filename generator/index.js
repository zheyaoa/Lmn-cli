const env = require('yeoman-environment').createEnv();
const vue = require('./gen-vue/index')

env.registerStub(vue,"init:vue")

module.exports = env