var stateArray = [];
stateArray.push("n/a");
var majorArray = [];
var collegeArray = [];
collegeArray.push("n/a");
var typeOfSchool = {
  public: false,
  privateNoProfit: false,
  privateProfit: false
};
var size = {
  small: false,
  medium: false,
  large: false
};
var thehtmlarray=[];
var thehtml = '';
var htmlCounter = 0;
var submitQuery;
var finalCollegeQueryString;
var collegeQueryString;
var stateQueryString;
var majorsQueryString
var sizeQueryString;
var typeOfSchoolQueryString;
var finalQueryString = "Select INSTNM From college.College_Directory";
function createCollegeString (collegeArray){
  if(collegeArray.length>1){
      collegeQueryString = " ("
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
      stateQueryString = " ("
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


function queryString(collegesString, statesString) {
  this.collegesString = collegesString;
  //this.majorsStrings= majors;
  this.statesString = statesString;
  //this.sizeString = size;
  //this.typeOfSchoolString = typeOfSchool;
}

/*function buildQueryString(submitQuery){
    finalCollegeQueryString = "Select * From college.College_Directory";
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
      collegeQueryString = createCollegeString(collegeArray);
      console.log(collegeQueryString);
      collegeArray = [];
      stateQueryString = createStateString(stateArray);
      console.log(stateQueryString);
      stateArray=[];
      submitQuery = new queryString(collegeQueryString, stateQueryString);
      finalQueryString = buildQueryString(submitQuery);
      console.log(finalQueryString);
      window.location.href = "result.php?sqlQuery=" + finalQueryString;
      //submitQuery = new queryString(collegeArray, majorArray, stateArray, size, typeOfSchool);
      //finalQueryString = buildQueryString(submitQuery);
}


$(function(){

   $('#cancelState').click(function(){
       cancelState();
});
    $('#submit').click(function(){
       submitQueryBuild();
});

  // setup autocomplete function pulling from colleges[] array
  $('#collegeAuto').autocomplete({
    lookup: colleges,
    onSelect: function (suggestion) {
      var thehtml = '<strong>University:</strong>' + suggestion.value + ' <br> <strong>UNID:</strong> ' + suggestion.data;
      $('#collegeOutput').html(thehtml);
      collegeArray.push(suggestion.value);
      console.log(collegeArray);
    }
  });

  $('#majorAuto').autocomplete({
    lookup: majors,
    onSelect: function (suggestion2) {
      var thehtml = '<strong>Major:</strong> ' + suggestion2.value + ' <br> <strong>Salary:</strong> ' + suggestion2.data;
      $('#majorOutput').html(thehtml);
      majorArray.push(suggestion2.value);
      console.log(majorArray);
    }
  });
   $('#stateAuto').autocomplete({
    lookup: states,
    onSelect: function (suggestion) {

       thehtmlarray.push('<span class="mdl-chip mdl-chip--deletable"> <span class="mdl-chip__text">' + suggestion.value 
      +'</span> <button type="button" class="mdl-chip__action" id= "cancelState"><i class="material-icons">cancel</i></button></span>');
      stateArray.push(suggestion.data);
      console.log(stateArray);
      thehtml = '';
      for (var i = 0 ; i <=htmlCounter; i++) {
        $('#stateOutput').html(thehtml+=thehtmlarray[i]);
      }

      htmlCounter++;
    }
  });


  });
/*
 $(function(){
            $( "#slider-3" ).slider({
              range:true,
               min: 0,
               max: 500,
               values: [ 35, 200 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
             " - $" + $( "#slider-3" ).slider( "values", 1 ) );        });
      */   

