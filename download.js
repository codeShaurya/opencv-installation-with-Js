
const { exec, spawn, execSync } = require('child_process');

/*
Change these variable later
*/
const url = 'https://github.com/codeShaurya/vertical-timeline-in-js/archive/master.zip';
const downloaded_file = 'master.zip';
const extracted_file = 'vertical-timeline-in-js-master';

function download(callback) {
	console.log("Please Wait. We are setting up environment for instation..");
	exec(`wget ${url}`, (error, stdout, stderr) => {
		if (error) {
			console.log("=======>ERROR<========");
			console.error(`exec error: ${error}`);
			return callback(error);
		}
		else {
			console.log("=======>STEP 1<========");
			console.log(`stdout: ${stdout}`);

			exec(`unzip ${downloaded_file}`, (error, stdout, stderr) => {
				if (error) {
					console.log("=======>ERROR<========");
					console.error(`exec error: ${error}`);
					return callback(error);
				}
				else {
					console.log("=======>STEP 2<========");
					console.log(`stdout: ${stdout}`);
					exec(`mv ${extracted_file} OpenCV &&  rm ${downloaded_file}`, (error, stdout, stderr) => {
						if (error) {
							console.log("=======>ERROR<========");
							console.error(`exec error: ${error}`);
							return callback(error);
						}
						else {
							console.log("=======>Directory downloaded successfully.<=======");
							console.log(`stdout: ${stdout}`);
							return callback("", stdout);
						}
					})
				}
			});
		}
	});
}


module.exports = download;