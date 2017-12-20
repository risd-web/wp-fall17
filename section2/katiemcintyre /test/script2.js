var svg = document.getElementById("paths");
var s = Snap(svg);

var momm = Snap.select('#momm');
var dadd = Snap.select('#dadd');

var mommPoints = momm.node.getAttribute('d');
var daddPoints = dadd.node.getAttribute('d');


var toDadd = function(){
  mom.animate({ d: daddPoints }, 1000, mina.backout, toMomm);  
}

var toMomm = function(){
  dad.animate({ d: mommPoints }, 1000, mina.backout, toDadd); 
}


toMomm();