/************** Intialization of colleges, states, majors for autocomplete **************************/
var colleges;
var states;
var majors;

/**************Initization of Form 1 Arrays **************************************/
var state1Array = [];
state1Array.push("n/a");
var college1Array = [];
college1Array.push("n/a");
/********************************************************************************/

/**************Initilization of Form 2 Arrays **********************************/
var major2Array = [];
major2Array.push("n/a");



var submitQuery;
var finalCollegeQueryString ="";
var regionStringArray;
var collegeQueryString="";
var stateQueryString="";
var majorsQueryString="";
var sizeQueryString="";
var typeOfSchoolQueryString="";
var finalQueryString = "Select * From Main_Table";
function createCollegeString (collegeArray){
  if(collegeArray.length>1){
      collegeQueryString += " ("
      for (var i = 1; i <collegeArray.length-1; i++) {
          collegeQueryString += ("INSTNM = '" + collegeArray[i] + "' OR ");
      }
      collegeQueryString += ("INSTNM = '" + collegeArray[i] + "')");
      console.log(collegeQueryString);
      console.log(collegeQueryString.length);
      return collegeQueryString;

    }
}

function createStateString(stateArray){
  if(stateArray.length>1){
      stateQueryString += " ("
      for (var k = 1; k <stateArray.length-1; k++) {
          stateQueryString += ("STABBR = '" + stateArray[k] + "' OR ");
      }
      stateQueryString += ("STABBR = '" + stateArray[k] + "')");
      console.log(stateQueryString);
      console.log(stateQueryString.length);
      return stateQueryString;

    }
}

function buildQueryString(submitQuery){
  if(submitQuery.collegesString.length>1 | submitQuery.statesString.length>1)
    finalQueryString+= " WHERE";
  if(submitQuery.collegesString.length>1){
    finalQueryString+= (" " + submitQuery.collegesString);
    if(submitQuery.statesString.length>0){
      finalQueryString += (" AND "+ submitQuery.statesString)
    }
  }
  else if (submitQuery.statesString.length>1){
    finalQueryString+=(" "+ submitQuery.statesString);
  }
  else{
  }
  console.log(finalQueryString);
  return finalQueryString;
}

function regionStringBuild(){
regionStringArray = [];
$('input[type="checkbox"]').each(function () {
    if(this.checked){
      regionStringArray.push($(this).value);
    }
    
});
regionString = "(";
regionString += regionStringArray.join("OR");
console.log(regionString);
};

function queryString(collegesString, statesString) {
  this.collegesString = collegesString;
  //this.majorsStrings= majors;
  this.statesString = statesString;
  //this.sizeString = size;
  //this.typeOfSchoolString = typeOfSchool;
}

/*function buildQueryString(submitQuery){
    finalCollegeQueryString = "Select * From College_Directory";
    if(submitQuery.colleges.length>0 | submitQuery.states.length>0 |(submitQuery.small|submitQuery.medium|submitQuery.large)|
      (submitQuery.public|submitQuery.privateNoProfit|submitQuery.privateProfit)){
        finalCollegeQueryString += " WHERE";
    }
    if(submitQuery.colleges.length>0){
       finalCollegeQueryString += " ("
      for (var k = 0; k <submitQuery.length-1; k++) {
          finalCollegeQueryString += (" STABBR = '" + submitQuery.colleges[i] + "' OR");
      }
      finalCollegeQueryString += (" STABBR = '" + submitQuery.colleges[i] + "')");
    }
    elseif(submitQuery.states.length>0){
      finalCollegeQueryString += " ("
      for (var i = 0; i <submitQuery.length-1; i++) {
          finalCollegeQueryString += (" STABBR = '" + submitQuery.colleges[i] + "' OR");
      }
      finalCollegeQueryString += (" STABBR = '" + submitQuery.colleges[i] + "')");
    }
  
}*/

function submitQueryBuild(){
      if(collegeArray.length>1)collegeQueryString = createCollegeString(collegeArray);
      console.log(collegeQueryString);
      collegeArray = [];
      collegeArray.push("n/a");
      if(stateArray.length>1) stateQueryString = createStateString(stateArray);
      console.log(stateQueryString);
      stateArray=[];
      stateArray.push("n/a");
      submitQuery = new queryString(collegeQueryString, stateQueryString);
      finalQueryString = buildQueryString(submitQuery);
      console.log(finalQueryString);
      window.location.href = "result.php?sqlQuery=" + finalQueryString;
      //submitQuery = new queryString(collegeArray, majorArray, stateArray, size, typeOfSchool);
      //finalQueryString = buildQueryString(submitQuery);
}


$(function(){
 
   $('#cancelState').click(function(){
       $("span:has(junk)").remove();
});
    $('#submit1').click(function(){
       regionStringBuild();
       //submitQueryBuild();
});
/************Form 1 Function ********************************************/
  // setup autocomplete function pulling from colleges[] array
  $('#collegeAuto1').autocomplete({
    lookup: colleges,
    onSelect: function (suggestion) {
      //$('#college1').append('<div class="chip"> <div class="chip-media"><img src="http://lorempixel.com/100/100/people/9/"></div> <div class="chip-label">'+suggestion.value+'</div> </div>');
      college1Array.push(suggestion.value);
      console.log(college1Array);
    }
  });

   $('#stateAuto1').autocomplete({
    lookup: states,
    onSelect: function (suggestion) {
      state1Array.push(suggestion.data);
      console.log(state1Array);
       $('#state1').append('<span class="mdl-chip mdl-chip--deletable"> <span class="mdl-chip__text">' + suggestion.value 
      +'</span> <a href="#" class="mdl-chip__action"><i class="material-icons">cancel</i></button></span>');
    }
  });

/*****************Form 2 Functions **********************************************/
  $('#majorAuto2').autocomplete({
    lookup: majors,
    onSelect: function (suggestion) {
      var thehtml = '<span class="mdl-chip mdl-chip--deletable"> <span class="mdl-chip__text">' + suggestion.value 
      +'</span> <button type="button" class="mdl-chip__action" id= "cancelState"><i class="material-icons">cancel</i></button></span>';
      $('#majorOutputbox').append(thehtml);
      majorArray.push(suggestion.value);
    }
  });
  


  });
/*
 $(function(){
            $( "#slider-3" ).bootstrapSlider({
              range:true,
               min: 0,
               max: 500,
               values: [ 35, 200 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).bootstrapSlider( "values", 0 ) +
             " - $" + $( "#slider-3" ).bootstrapSlider( "values", 1 ) );        });
      
*/