
var Normalizer=require("./normalizer.js");
var synaptic = require('synaptic');
var dataClean=require("./cleanDATAMAP.json");
var  normalizer = new Normalizer.Normalizer(dataClean);
// setting required options and normalize the data
normalizer.setOutputProperties(["G","N"]);
normalizer.normalize();

// find useful information about your data
// to pass to your neural network
var nbrInputs = normalizer.getInputLength();
var nbrOutputs = normalizer.getOutputLength();

var metadata = normalizer.getDatasetMetaData();
var inputs = normalizer.getBinaryInputDataset();
var outputs = normalizer.getBinaryOutputDataset();

console.log(metadata);


var dataobj=[];

 var myPerceptron = new synaptic.Architect.Perceptron(3, 10,30, 2);
 var trainer = new synaptic.Trainer(myPerceptron);
 var test=[];

 for (var i in inputs) {
     dataobj[i] = {input:inputs[i],output:outputs[i]};
 }
console.log(dataobj);

 var x=trainer.train(dataobj,{
	rate: .05,
	iterations: 20000,
	error: .005,
	shuffle: true,
});
console.log(x);


 var exported = myPerceptron.toJSON();
 var data= JSON.stringify(exported);
 var d=new Date();
 var t=d.getTime();
 var fs = require('fs');
 fs.writeFile(t+'.json', data, 'utf8', function(){console.log("done")});
//
// var da=[
//  {
//    "R": 74.72794837392539,
//    "M1": 15.661353623175513,
//    "M2": 2.1894237863453982,
//    "T": 0.07900000000000006,
//    "G": 22.48389070166845,
//    "N": 0.7856017188859972
//  },
//  {
//    "R": 87.12031177978048,
//    "M1": 30.82343926129821,
//    "M2": 29.418153750769022,
//    "T": 0.1315000000000001,
//    "G": 17.59684967982956,
//    "N": 0.3365756247573102
//  },
//  {
//    "R": 97.66088554040782,
//    "M1": 24.00231990784228,
//    "M2": 3.037508108164119,
//    "T": 16.526500000006834,
//    "G": 8.002331380079008,
//    "N": -1.487208809030291
//  },
//  {
//    "R": 249.29648684258203,
//    "M1": 7.203092935198287,
//    "M2": 12.76702309611052,
//    "T": 0.06200000000000005,
//    "G": 10.835595339199166,
//    "N": 1.0649231977391285
//  }];
//
//
//
// var metobjkeys=["R","M1","M2","T","G","N"];
//
// function denormalize(array){
//   var newarray=[];
//   for(var i in array){
//     var number=array[i];
//     var min = metadata[metobjkeys[i]].min;
//
//       var max = metadata[metobjkeys[i]].max;
//
// var denormalizedNumber=(number*(max-min))+min;
// newarray[i]=denormalizedNumber;
//
// }
// return newarray;
// }
//
// var normalizer=new Normalizer.Normalizer(da);
//
// normalizer
//     .setDatasetMetaData(metadata)
//     .setOutputProperties(['G',"N"]);
//     normalizer.normalize();
//
//     // find useful information about your data
//     // to pass to your neural network
//     var nbrInputs = normalizer.getInputLength();
//     var nbrOutputs = normalizer.getOutputLength();
//
//     var metadata = normalizer.getDatasetMetaData();
//     var inputs = normalizer.getBinaryInputDataset();
//     var outputs = normalizer.getBinaryOutputDataset();
//     for (var i in inputs) {
//         dataobj[i] = {input:inputs[i],output:outputs[i]};
//     };
// var imported = synaptic.Network.fromJSON(exported);
//
// var output=myPerceptron.activate(inputs[1]);
//
// var t=inputs[1];
// t[t.length]=output[0];
//
// t[t.length]=output[1];
//
// console.log(denormalize(t));

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
