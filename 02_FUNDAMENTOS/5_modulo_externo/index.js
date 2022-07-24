const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const sobrenome = args['sobrenome']

console.log(nome, sobrenome)

console.log(`O nome dele eh ${nome} ${sobrenome}`)