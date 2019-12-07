#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const env = require('./generator/index')

program.arguments('<cmd>')
    .version(require('./package').version)
    .action((cmd) => {
        program.outputHelp()
        console.log( chalk.red(`Unknown command ${cmd}`))
    })
program
    .command('init')
    .description('Create a vue-tsx project')
    .action((name) => {
        env.run("init:vue")
    })
program.parse(process.argv)
if(!process.argv.splice(2).length){
    program.outputHelp()
}