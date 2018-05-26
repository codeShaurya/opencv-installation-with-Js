
const readline = require('readline');
const { exec, spawn, execSync} = require('child_process');

var download = require('./download.js');
var installation = require('./installation.js');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout,
});


rl.question('Are you want to install openCv package : ', (answer) => {
  if (answer.match(/^y(es)?$/i)) {
    console.log('installing openCv....');
    installation((error, stdout) => {
      if(error) {
        console.log(`error : ${error}`);
        rl.close();
        return;
      }

      download((error1, stdout1) => {
        if(error1) {
          console.log(`error : ${error1}`);
          rl.close();
          return;
        }
        console.log('downloading...');
        
        // Write here after success
        
        rl.close();
      });
    });
  }
  
  else if (answer.match(/^n(o)?$/i)) {
    console.log('Aborting installation.');
    rl.close();    
  }
  else{
    console.log("Please enter valid option");
  }
})