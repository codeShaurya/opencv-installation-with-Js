
const { exec, spawn, execSync} = require('child_process');

function installation(callback) {
	console.log("Please Wait. We are setting up environment for instation..");
	exec('sudo apt-get -y update', (error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return callback(error);
		}
		else {
			console.log(`stdout: ${stdout}`);
			console.log('===================');
			return callback("",stdout);
		}
	});


	exec('sudo apt-get install -y build-essential cmake '+
	     '&& sudo apt-get install -y qt5-default libvtk6-dev'+
	     '&& sudo apt-get install -y zlib1g-dev libjpeg-dev libwebp-dev libpng-dev libtiff5-dev libjasper-dev libopenexr-dev libgdal-dev'+  
	     '&& sudo apt-get install -y libdc1394-22-dev libavcodec-dev libavformat-dev libswscale-dev libtheora-dev libvorbis-dev libxvidcore-dev libx264-dev yasm libopencore-amrnb-dev libopencore-amrwb-dev libv4l-dev libxine2-dev'+
	     '&& sudo apt-get install -y libtbb-dev libeigen3-dev'+
	     '&& sudo apt-get install -y python-dev python-tk python-numpy python3-dev python3-tk python3-numpy'+
	     '&& sudo apt-get install -y ant default-jdk'+
	     '&& sudo apt-get install -y doxygen', (error, stdout, stderr) => {
	     	if (error) {
	     		console.error(`exec error: ${error}`);
	     		return;
	     	}
	     	else {
	     		console.log(`stdout: ${stdout}`);
	     	}
	     });
}

module.exports = installation;
