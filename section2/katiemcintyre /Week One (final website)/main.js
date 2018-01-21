var hippo = $("#hippo").attr("d");

TweenLite.set("svg", {visibility:"visible"})
 //ShapeIndex("#hippo","#buffalo", "#elephant", "#the", "#mouses", "#mind","#cats","#catn","#cati","#catim","#mark","#markz")
var tl = new TimelineMax({repeat:-1, repeatDelay:0.5,});
tl.to("#hippo", 1, {morphSVG:"#buffalo" ,  ease:Back.easeInOut})
  .to("#hippo", 1, {morphSVG:"#elephant", ease:Back.easeOut}, "+=0.5")
   .to("#hippo", 1, {morphSVG:"#the",  ease:Back.easeOut}, "+=0.5")
   .to("#hippo", 1, {morphSVG:"#mouses",  ease:Back.easeOut}, "+=0.5")
   .to("#hippo", 1, {morphSVG:"#mind",  ease:Back.easeOut}, "+=0.5")
   .to("#hippo", 1, {morphSVG:"#cats",  ease:Back.easeOut}, "+=0.5")
   .to("#hippo", 1, {morphSVG:"#catn",  ease:Back.easeOut}, "+=0.5")
   .to("#hippo", 1, {morphSVG:"#cati",  ease:Back.easeOut}, "+=0.5")
   .to("#hippo", 1, {morphSVG:"#catim",  ease:Back.easeOut}, "+=0.5")
 .to("#hippo", 1, {morphSVG:"#mark",  ease:Back.easeOut}, "+=0.5")
.to("#hippo", 1, {morphSVG:"#markz",  ease:Back.easeOut}, "+=0.5")
   .to("#hippo", 1, {morphSVG:hippo,  ease:Back.easeOut}, "+=0.5")

//tl.timeScale(0.3)