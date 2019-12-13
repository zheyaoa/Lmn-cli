const Generator = require('yeoman-generator')
const fs = require('fs-extra')
const path = require('path')
const basePath = path.resolve(__dirname,'../','../')
module.exports = class extends Generator {
    async prompting(){
        const answers = await this.prompt([
            {
                type:'input',
                name: 'name',
                require: true,
                message: '请输入项目名称',
                validate(name){
                    const base = process.cwd();
                    const fullPath = path.resolve(base,name);
                    if(fs.existsSync(fullPath)){
                        return 'path is exist'
                    }
                    return true;
                }
            },{
                type:'input',
                name:'author',
                require: true,
                message:'输入作者名称'
            },{
                type:'input',
                name: 'desc',
                message:'请输入 project description',
            }
        ])
        this.answers = answers
        this.sourceRoot(path.resolve(basePath,'templates/template-vue'))
        this.destinationRoot(path.resolve(process.cwd(),answers.name))
    }
    async writing(){
        const {module,name} = this.answers;
        this.fs.copyTpl(this.templatePath('','_package.json'),this.destinationPath('package.json'),this.answers)
        fs.readdirSync(this.templatePath(''))
            .filter(name => name !== '_package.json'&&name !== 'node_modules')
            .forEach(item => {
                this.fs.copy(this.templatePath('',item),this.destinationPath(item))
            })
    }
    async install(){
        this.npmInstall()
    }
    ending(){
        console.log("Start to install dependence")
    }
};