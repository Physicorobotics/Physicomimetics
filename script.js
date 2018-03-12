
var Normalizer=require("./normalizer.js");
var synaptic = require('synaptic');
var dataClean=require("./cleantrainingdata1.json");
var  normalizer = new Normalizer.Normalizer(dataClean);
// setting required options and normalize the data
normalizer.setOutputProperties(['G',"N"]);
normalizer.normalize();

// find useful information about your data
// to pass to your neural network
var nbrInputs = normalizer.getInputLength();
var nbrOutputs = normalizer.getOutputLength();

var metadata = normalizer.getDatasetMetaData();
var inputs = normalizer.getBinaryInputDataset();
var outputs = normalizer.getBinaryOutputDataset();


var dataobj=[];

 var input = 4;
 var pool = 70;
 var output = 2;
 var connections = 900;
 var gates = 14;
 // var myLiquidStateMachine = new synaptic.Architect.Liquid(input, pool, output, connections, gates);
 // var trainer = new synaptic.Trainer(myLiquidStateMachine);
 var myPerceptron = new synaptic.Architect.Perceptron(4, 10,15, 7, 20, 10, 2);
 var trainer = new synaptic.Trainer(myPerceptron);
 var test=[];
 var x = [
     [100, 1, 1, 5476.7],
     [100, 1, 1, 606.7],
     [100, 1, 1, 67.1],
     [100, 1, 1, 7.35],
     [100, 1, 1, 7.35],
     [100, 1, 1, .05],
     [200, 1, 1, 15632.3],
     [200, 1, 1, 1235.3],
     [200, 1, 1, 97.45],
     [200, 1, 1, 0.7605],
     [200, 1, 1, 0.0585],
     [200, 1, 1, 0.0045],
     [500, 1, 1, 156.5],
     [500, 1, 1, 0.7755],
     [500, 1, 1, 0.0011970],
     [500, 1, 1, 0.0000575],
 ];
 var y = [
     [1, -2],
     [1, -1],
     [1, 0],
     [1, 1],
     [1, 1],
     [1, 3],
     [1, -2],
     [1, -1],
     [1, 0],
     [1, 1],
     [1, 1],
     [1, 3],
     [1, 0],
     [1, 1],
     [1, 1],
     [1, 3],

 ];

 for (var i in inputs) {
     dataobj[i] = {input:inputs[i],output:outputs[i]};
 }
console.log(dataobj);

 trainer.train(dataobj);

 console.log(trainer.test(dataobj));

 var exported = myPerceptron.toJSON();
 var data= JSON.stringify(exported);
 var d=new Date();
 var t=d.getTime();
 var fs = require('fs');
 fs.writeFile(t+'.json', data, 'utf8', function(){console.log("done")});


 /*
 [ [ 0.9976797169359445, 0.9998896138017578 ],
   [ 0.9963841786894589, 0.001195369309530819 ],
   [ 0.995787735494948, 0.0000644670231646343 ] ]
 */












/*
Documentaion:
SynapticJs:

MLP: 10, 10, 10, 10
Using small data set: 3.5105447
Using the Training data set, I got an error of 1.49197, so a drastic improvement

Using myLiquidStateMachine:
error: 3.10465

Didn't normalize Data; Whoops;
New results;


machine_learning:
Simple Backpropogation techniques gave me errors of around
Gave me errors of -300 and -700; IDK





*/
