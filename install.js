const readline = require('readline');
const { exec,spawn,execSync } = require('child_process');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});

rl.question('Are you want to install openCv package : ',(answer)=>{
  if (answer.match(/^y(es)?$/i)){
    console.log('installing openCv....');
    installation();
  }
  else if (answer.match(/^n(o)?$/i)){
    console.log('Aborting installation.');
    rl.close();    
  }
  else{
    console.log("Please enter valid option");
  }
})

function installation() {
  console.log("Please Wait. We are setting up environment for instation..");
  exec('sudo apt-get -y update && sudo apt-get -y upgrade && sudo apt-get -y dist-upgrade && sudo apt-get -y autoremove ', ['../../'], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      rl.close();
      return;
    }
    if(stdout){
      console.log(`stdout: ${stdout}`);
    } else {
      console.log(`stdout: ${stderr}`);    
      rl.close();
    }
  });
  exec('sudo apt-get install -y build-essential cmake '+
  '&& sudo apt-get install -y qt5-default libvtk6-dev'+
  '&& sudo apt-get install -y zlib1g-dev libjpeg-dev libwebp-dev libpng-dev libtiff5-dev libjasper-dev libopenexr-dev libgdal-dev'+  
  '&& sudo apt-get install -y libdc1394-22-dev libavcodec-dev libavformat-dev libswscale-dev libtheora-dev libvorbis-dev libxvidcore-dev libx264-dev yasm libopencore-amrnb-dev libopencore-amrwb-dev libv4l-dev libxine2-dev'+
  '&& sudo apt-get install -y libtbb-dev libeigen3-dev'+
  '&& sudo apt-get install -y python-dev python-tk python-numpy python3-dev python3-tk python3-numpy'+
  '&& sudo apt-get install -y ant default-jdk'+
  '&& sudo apt-get install -y doxygen',
    ['../../'], (error, stdout, stderr) => {
   if (error) {
     console.error(`exec error: ${error}`);
     rl.close();
     return;
   }
   if(stdout){
     console.log(`stdout: ${stdout}`);
   } else {
     console.log(`stdout: ${stderr}`);    
   }
 });
}
