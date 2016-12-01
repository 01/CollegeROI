$(function(){
 
  // setup autocomplete function pulling from colleges[] array
  $('#autocomplete').autocomplete({
    lookup: colleges,
    onSelect: function (suggestion) {
      var thehtml = '<strong>University:</strong>' + suggestion.INSTNM + ' <br> <strong>UNID:</strong> ' + suggestion.UNITID;
      $('#outputcontent').html(thehtml);
    }
  });

  $('#autocomplete2').autocomplete({
    lookup: majors,
    onSelect: function (suggestion2) {
      var thehtml = '<strong>Major:</strong> ' + suggestion2.value + ' <br> <strong>Salary:</strong> ' + suggestion2.data;
      $('#outputcontent2').html(thehtml);
    }
  });
  
});
$(function() {
            $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 60000,
               values: [ 15000, 25000 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
               " - $" + $( "#slider-3" ).slider( "values", 1 ) );
         });
         
const stateInit = _ => {
  $('.state-auto:not([init])').autocomplete({
    lookup: states,
    onSelect: function (suggestion) {

      var thehtml = '<strong>State:</strong> ' + suggestion.value + ' <br> <strong>abreviation:</strong> ' + suggestion.data;
      inputs.push(suggestion.data);
      console.log(suggestion.data);
      $('#outputcontent3').html(thehtml);
    }
  }).attr("init",true);
}
$(document).ready(_ => stateInit())
$(document).ready(_ => inputs = new Array(0))
