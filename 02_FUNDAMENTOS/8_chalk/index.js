const chalk = require('chalk')

const nota = 5

if(nota >= 7){
    console.log(chalk.green.bold('Parabens vc foi aprovado!'))
} else {
    console.log(chalk.bgRedBright.black.bold('Voce esta reprovado.'))
}

