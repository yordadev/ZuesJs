/**
 * Copyright 2020 Yorda Development. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var childProcess = require('child_process');

async function runScript(scriptPath, callback) {
    var invoked = false;
    
    console.log('- initilatizing provider checks') 
    var process = childProcess.fork(scriptPath);

    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

runScript('./providers/Github.js', function (err) {
    if (err) throw err;
    console.log('- finished running Github checks.\n');
});

runScript('./providers/Gitlab.js', function (err) {
    if (err) throw err;
    console.log('- finished running Gitlab checks.\n');
});

runScript('./providers/Bitbucket.js', function (err) {
    if (err) throw err;
    console.log('- finished running Bitbucket checks.\n');
});

runScript('./providers/Cloudflare.js', function (err) {
    if (err) throw err;
    console.log('- finished running cloudflare checks.\n');
});

