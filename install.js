const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});

// console.log(rl);

rl.question('Are you want to install openCv package : ',(answer)=>{
  if (answer.match(/^y(es)?$/i)){
    console.log('installing openCv....');
    installation();
  }
  if (answer.match(/^n(o)?$/i)){
    console.log('Aborting installation.');
    rl.close();    
  }
  else{
    console.log("Please enter valid option");
  }
})

function installation() {
  console.log("Please Wait. We are setting up environment for instation..");
}