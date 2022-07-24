const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual sua linguagem favorita? ", (language) => {
    if(language === 'PHP'){
        console.log('Legal, a minha tambem!')
    } else {    
        console.log(`A minha linguagem preferida eh: ${language}`)
    }

    readline.close()

})