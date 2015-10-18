// There is still a lot of 32bit Windows operating systems in use.
// This script forces the machine to install 32bit Electron runtime,
// even if it's 64bit. If you're interested only in supporting
// 64bit, then just get rid of this script.

'use strict';

var childProcess = require('child_process');
var utils = require('./utils');

if (utils.os() === 'windows') {
    childProcess.exec('set', ['npm_config_arch=ia32'], function (err, stdout, stderr) {
        if (err) {
            console.log('ERROR: Forcing 32bit architecture has failed');
            console.log(stdout);
            console.log(stderr);
        }
    });
}
