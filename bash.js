process.stdout.write("inside bash ");
    
const pwdExport = require ('./pwd')
//const fs = require ('fs')
const lsExport = require ('./ls')

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
       pwdExport();
  }
  else if (cmd === 'ls') {
    process.stdout.write("inside of else if")
     lsExport();
       
  }     
  else  {
     process.stdout.write("You typed: " + cmd);
  }
  
});
