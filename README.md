# opencv-installation-with-Js
This Repository will help new learner to install opencv

### Follow these steps too install opencv with node js cli

1. Clone this repo <br>
    `git clone https://github.com/codeShaurya/opencv-installation-with-Js`
1. Navigate to this repo <br>
    `cd opencv-installation-with-Js`
1. Execute install file with node <br>
    `node install.js` <br>
    **It will take upto 5 minutes and download many packages. So please wait until you see "Directory downloaded successfully". :smile:**
1. One new directory will be downloaded openCv. Naviagate to this directory <br>
    `cd openCv`
1.  Make a new folder inside openCv directory <br>
    `mkdir build` 
1.  Naviagte to build directory <br>
    `cd build`
1.  Execute this command for the configuration of make <br>
    `cmake -DWITH_QT=ON -DWITH_OPENGL=ON -DFORCE_VTK=ON -DWITH_TBB=ON -DWITH_GDAL=ON -DWITH_XINE=ON -DBUILD_EXAMPLES=ON -DENABLE_PRECOMPILED_HEADERS=OFF ..`
1.   Now make is ready... <br>
    `make -j4`  <br>
    `sudo make install` <br>
    `sudo ldconfig` <br>

# prerequisite #

1. Node
1. Linux(For this instaltion)