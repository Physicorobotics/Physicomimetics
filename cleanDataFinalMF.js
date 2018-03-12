var badData = require("./DataFinal.json");
var goodData=[];

        function pythagorean(sideA, sideB) {
            return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        }
var keys=["masses","positions","time","COUNT","G","N"];

function pos(x,y){
    return (x-1)*(500)+y-1;
}

for(var iteration in badData){
    var obj={};
    var masses=[];
    var positions=[];
    for(var key in keys){
      
        
        if(keys[key]=="masses"){
           for(var mass in badData[iteration].masses){
               masses[mass]=badData[iteration].masses[mass].mass;
            }
                 obj["masses"]=masses;
        }
        else if(keys[key]=="positions"){
             for(var mass in badData[iteration].masses){
               positions[mass]=pos(badData[iteration].masses[mass].x,badData[iteration].masses[mass].y);
    
            }
            obj["positions"]=positions;
            }
            
        
           else{
        obj[keys[key]]=badData[iteration][keys[key]]; }
       
    goodData[iteration]=obj;}}



var myData = JSON.stringify(goodData);

var fs = require('fs');
fs.writeFile("cleanDATAMAP.json", myData, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 