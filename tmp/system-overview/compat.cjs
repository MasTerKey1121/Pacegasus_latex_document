const Module=require('node:module');
const orig=Module._resolveFilename;
Module._resolveFilename=function(req,...args){
 if(req.startsWith('#standard-fonts/')) req='C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@pdf-lib/standard-fonts/lib/'+req.slice(16)+'.compressed.json';
 return orig.call(this,req,...args);
};
