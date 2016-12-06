
function collegeStringBuild (){
  if(college1Array.length>0){
      var collegeQueryString = "(";
      collegeQueryString +=(college1Array.join(" OR "));
      collegeQueryString += ")";
      console.log(collegeQueryString);
    }
};

function stateStringBuilder(){
  if(state1Array.length>0){
      var stateQueryString = "(";
      stateQueryString += (state1Array.join(" OR "));
      stateQueryString += ")";
      console.log(stateQueryString); 
      return stateQueryString;
    } 
};


function regionStringBuild(){
var regionString1Array = [];
var regionChecked = false;
$('input[id="regionBox"]').each(function(){
    if($(this).is(":checked")){
      regionChecked = true;
      regionString1Array.push($(this).val());
    } 
});
  if(regionChecked){
  var regionString = "("; 
  regionString += regionString1Array.join(" OR ");
  regionString += ")";
  console.log(regionString);
  return regionString;
}};

function isPublicStringBuild(){
var isPublicString1Array = [];
var isPublicChecked = false;
$('input[id="isPublic"]').each(function(){
    if($(this).is(":checked")){
      isPublicChecked= true;
     isPublicString1Array.push($(this).val());
    }
    
});
  if(isPublicChecked){
      var isPublicString = "(";
      isPublicString += isPublicString1Array.join(" OR ");
      isPublicString += ")";
      console.log(isPublicString);
      return isPublicString
 }
};

function popStringBuild(){
var pop1Array = [];
var popChecked = false;
$('input[id="popBox"]').each(function(){
    if($(this).is(":checked")){
      popChecked= true;
     pop1Array.push($(this).val());
    }
    
});
  if(popChecked){
      var popString = "(";
      popString += pop1Array.join(" OR ");
      popString += ")";
      console.log(popString);
      return popString;
 }
};

function priceStringBuild(){
  var priceString = "(NET_PRICE <" + max  + " AND NET_PRICE > " + min +")";
  console.log(priceString);
  return priceString;
};

function admStringBuild(){
  var admString = "(ADM_RATE <" + (max1/100.)  + " AND ADM_RATE > " + (min1/100.) +")";
  console.log(admString);
  return admString;
};


function form1QueryStringBuild(){
      
       var form1StringArray =[];
       if(typeof collegeStringBuild() !== 'undefined') form1StringArray.push(collegeStringBuild());
       if(typeof priceStringBuild() !== 'undefined') form1StringArray.push(priceStringBuild());
       if(typeof  stateStringBuilder() !== 'undefined') form1StringArray.push(stateStringBuilder());
       if(typeof popStringBuild() !== 'undefined') form1StringArray.push(popStringBuild());
       if(typeof isPublicStringBuild() !== 'undefined') form1StringArray.push(isPublicStringBuild());
       if(typeof admStringBuild() !== 'undefined') form1StringArray.push(admStringBuild());
       form1QueryString = "WHERE ";
       form1QueryString += form1StringArray.join(" AND ");
       console.log(form1QueryString);
       
};