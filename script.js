$(document).ready(function(){

var ScriptEduactors = ["Jenna","Mat","Nick"];
    
    console.log(ScriptEduactors[0]);
var ScriptEders = ["Daril","Felix","Lauren","Isabela","Pamela","Anahi","Gabby"];
    console.log(ScriptEders);


$("#studentButton").click(function() {
  var random = Math.floor(Math.random()*ScriptEders.length)  
  console.log(ScriptEders[random])
  $(studentDisplay).html(ScriptEders[random]);
  
});



$("#teacherButton").click(function() {
  var random = Math.floor(Math.random()*ScriptEduactors.length)  
  console.log(ScriptEduactors[random])
  $(teacherDisplay).html(ScriptEduactors[random]);
  
});
});