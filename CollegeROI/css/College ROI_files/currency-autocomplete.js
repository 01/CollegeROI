
/**************Initization of Forms Arrays **************************************/
var state1Array = [];
var college1Array = [];
var major2Array = [];
var singleMajorCount = 0;

/********************************************************************************/

$(function(){
 
   $('#cancelState').click(function(){
       $("span:has(junk)").remove();
});

    $('#submit1').click(function(){
     var form1Query =form1QueryStringBuild();
     console.log(form1Query);
     window.location.href = "result.php?form1Query=" +  form1Query;

});

     $('#submit2').click(function(){
      //console.log("Makes it here");
      form2QueryStringBuild();

});
       $('#compareSubmit').click(function(){
        console.log("Makes it HERE");
     var compareQuery = resultComparisonStringBuild();
     console.log(compareQuery);
    window.location.href = "collegecomparisons.php?compareQuery=" +  compareQuery;

});
/************Form 1 Function ********************************************/
  // setup autocomplete function pulling from colleges[] array
  $('#collegeAuto1').autocomplete({
    lookup: colleges,
    onSelect: function (suggestion) {
      college1Array.push("INSTNM = '" +suggestion.value + "'");
      console.log(college1Array);
      $('#college1').append('<span class="mdl-chip mdl-chip--deletable"> <span class="mdl-chip__text">' + suggestion.value 
      +'</span> <a href="#" class="mdl-chip__action"><i class="material-icons">cancel</i></button></span>');
    }
  });

   $('#stateAuto1').autocomplete({
    lookup: states,
    onSelect: function (suggestion) {
      state1Array.push("STATE = '"+suggestion.data + "'");
      console.log(state1Array);
       $('#state1').append('<span class="mdl-chip mdl-chip--deletable"> <span class="mdl-chip__text">' + suggestion.value 
      +'</span> <a href="#" class="mdl-chip__action"><i class="material-icons">cancel</i></button></span>');
    }
  });

/*****************Form 2 Functions **********************************************/
  $('#majorAuto2').autocomplete({
    lookup: majors,
    onSelect: function (suggestion) {
      singleMajorCount++;
      if(singleMajorCount<2){
      var thehtml = '<span class="mdl-chip mdl-chip--deletable"> <span class="mdl-chip__text">' + suggestion.value 
      +'</span> <button type="button" class="mdl-chip__action" id= "cancelState"><i class="material-icons">cancel</i></button></span>';
      $('#majorOutputbox').append(thehtml);
      major2Array.push(suggestion.value);
      console.log(major2Array);}
      else{
        alert ("Please only choose on Major if Comparng Diffferent Schools");
      }
    }
  });
  
});


