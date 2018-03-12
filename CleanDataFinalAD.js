var badData = require("./DataFinal.json");
var goodData=[];

        function pythagorean(sideA, sideB) {
            return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        }
var keys=["gamma","time","COUNT","G","N"];

for(var iteration in badData){
    var obj={};
    
    for(var key in keys){
        var gamma=0;
        if(keys[key]=="gamma"){
            var totalMass=0;
            var distances=[];
            for(var mass in badData[iteration].masses){
                totalMass=totalMass+badData[iteration].masses[mass].mass;
                distances[mass]=pythagorean(badData[iteration].masses[mass].x,badData[iteration].masses[mass].y);
            }
            for(var mass in badData[iteration].masses){
                var m=badData[iteration].masses[mass].mass;
               gamma=gamma+(m/totalMass)*distances[mass];
            }
            obj["gamma"]=gamma;
        }
        
           else{
        obj[keys[key]]=badData[iteration][keys[key]]; }
    }    
    goodData[iteration]=obj;}

var myData = JSON.stringify(goodData);

var fs = require('fs');
fs.writeFile("cleanFINALADData.json", myData, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 