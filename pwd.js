module.exports = function (cmd) {
    // pwd code
    if(cmd==='pwd') process.stdout.write(process.cwd())
  };