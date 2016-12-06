var counter = 1;
var limit = 50;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Enter State " + (counter + 1) + " <br><input type='text' class='biginput state-auto' name='myInputs[]'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
          stateInit()
     }
}