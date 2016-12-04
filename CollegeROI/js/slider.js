//Price Slider
var min = 15000;
var max = 25000;
var min1 = 0;
var max1 = 100;
$(function() {
            $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 60000,
               values: [ min, max ],
               slide: function( event, ui ) {
                min = ui.values[0]
                max = ui.values[1]
                  $( "#price3" ).val( "$" + min.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+ " - $" + max.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
               }
            });
            $( "#price3" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +
               " - $" + $( "#slider-3" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
         });

$(function() {
            $( "#slider-2" ).slider({
               range:true,
               min1: 0,
               max1: 100,

               values: [1, 100 ],
               slide: function( event, ui ) {
                min1 = ui.values[0]
                max1 = ui.values[1]
                  $( "#price2" ).val( "" + min1+ "% - " + max1 + "%");
               }
            });
            $( "#price2" ).val( "" + $( "#slider-2" ).slider( "values", 0 ) +
               "% - " + $( "#slider-2" ).slider( "values", 1 ) + "%");
         });
