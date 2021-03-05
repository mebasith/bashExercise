const pwd = require('./pwd')
process.stdout.write('prompt > ');

process.stdin.on('data', (data)=> {
    const cmd = data.toString().trim();
    
    pwd(cmd)
   
    if (cmd==='ls') {
        const ls = require('./ls')
    }

    else if(cmd!=='pwd'){
        process.stdout.write('You typed: ' + cmd);
        }

    // process.stdout.write('\nprompt >');
    //asynchronous execution 
})


