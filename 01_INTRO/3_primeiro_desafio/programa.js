const fs = require('fs') // file system module

fs.readFile('arquivos/users.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
});

fs.readFile('arquivos/passwords.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
});