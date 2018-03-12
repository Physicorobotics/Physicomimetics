var badData = require("./CD.json");
var goodData=[];
var keys=["R","M","time","count","G","N"]

for(var iteration in badData){
    var obj={};
    for(var key in keys){
        obj[keys[key]]=badData[iteration][keys[key]]   
    }    
    goodData[iteration]=obj;}
var myData = JSON.stringify(goodData);

var fs = require('fs');
fs.writeFile("cleanCDdata.json", myData, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 