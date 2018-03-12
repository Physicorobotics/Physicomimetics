var synaptic = require('synaptic');
var exported=require("./cleandataforpart2.json");
var data= require("./cleandata.json");
var Normalizer=require("./normalizer.js");
var dataobj=[];
var da=[
 {
   "R": 74.72794837392539,
   "M1": 15.661353623175513,
   "M2": 2.1894237863453982,
   "T": 0.07900000000000006,
   "G": 22.48389070166845,
   "N": 0.7856017188859972
 },
 {
   "R": 87.12031177978048,
   "M1": 30.82343926129821,
   "M2": 29.418153750769022,
   "T": 0.1315000000000001,
   "G": 17.59684967982956,
   "N": 0.3365756247573102
 },
 {
   "R": 97.66088554040782,
   "M1": 24.00231990784228,
   "M2": 3.037508108164119,
   "T": 16.526500000006834,
   "G": 8.002331380079008,
   "N": -1.487208809030291
 },
 {
   "R": 249.29648684258203,
   "M1": 7.203092935198287,
   "M2": 12.76702309611052,
   "T": 0.06200000000000005,
   "G": 10.835595339199166,
   "N": 1.0649231977391285
 }];



var metobjkeys=["R","M1","M2","T","G","N"];

var metadata2={ R:
   { type: 'number',
     min: 53.857439246608024,
     max: 249.29648684258203,
     distinctValues: null },
  M1:
   { type: 'number',
     min: 2.4057344744334044,
     max: 30.99253026591849,
     distinctValues: null },
  M2:
   { type: 'number',
     min: 1.5338095334380122,
     max: 30.676704809551776,
     distinctValues: null },
  T:
   { type: 'number',
     min: 0.0015,
     max: 45.33900000003446,
     distinctValues: null },
  G:
   { type: 'number',
     min: 4.53040538917514,
     max: 49.857438234999194,
     distinctValues: null },
  N:
   { type: 'number',
     min: -1.8931619706336278,
     max: 2.4598605112285137,
     distinctValues: null } }
var metadata={ R:
   { type: 'number',
     min: 51.85541012995569,
     max: 250.45235452090873,
     distinctValues: null },
  M1:
   { type: 'number',
     min: 1.0324083500206673,
     max: 30.99253026591849,
     distinctValues: null },
  M2:
   { type: 'number',
     min: 1.5338095334380122,
     max: 30.999817377631746,
     distinctValues: null },
  T:
   { type: 'number',
     min: 0.001,
     max: 93.09950000026251,
     distinctValues: null },
  G:
   { type: 'number',
     min: 1.152679096868924,
     max: 49.857438234999194,
     distinctValues: null },
  N:
   { type: 'number',
     min: -1.9997985191892513,
     max: 2.5923149701439616,
     distinctValues: null } };
var md3={ R:
   { type: 'number',
     min: 51.85541012995569,
     max: 250.45235452090873,
     distinctValues: null },
  M1:
   { type: 'number',
     min: 1.0324083500206673,
     max: 30.99253026591849,
     distinctValues: null },
  M2:
   { type: 'number',
     min: 1.5338095334380122,
     max: 30.999817377631746,
     distinctValues: null },
  T:
   { type: 'number',
     min: 0.001,
     max: 93.09950000026251,
     distinctValues: null },
  G:
   { type: 'number',
     min: 1.152679096868924,
     max: 49.857438234999194,
     distinctValues: null },
  N:
   { type: 'number',
     min: -1.9997985191892513,
     max: 2.5923149701439616,
     distinctValues: null } };
function denormalize(array){
  var newarray=[];
  for(var i in array){
    var number=array[i];
    var min = md3[metobjkeys[i]].min;

      var max = md3[metobjkeys[i]].max;

var denormalizedNumber=(number*(max-min))+min;
newarray[i]=denormalizedNumber;

}
return newarray;
}

var normalizer=new Normalizer.Normalizer(da);

normalizer
    .setDatasetMetaData(md3)
    .setOutputProperties(['G',"N"]);
    normalizer.normalize();

    // find useful information about your data
    // to pass to your neural network
    var nbrInputs = normalizer.getInputLength();
    var nbrOutputs = normalizer.getOutputLength();

    var metadata = normalizer.getDatasetMetaData();
    var inputs = normalizer.getBinaryInputDataset();
    var outputs = normalizer.getBinaryOutputDataset();
    for (var i in inputs) {
        dataobj[i] = {input:inputs[i],output:outputs[i]};
    };
var imported = synaptic.Network.fromJSON(exported);

var output=imported.activate(inputs[0]);

var t=inputs[0];
t[t.length]=output[0];

t[t.length]=output[1];

console.log(denormalize(t));
