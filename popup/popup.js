
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn1").addEventListener("click", disableButton);
  });
  

function disableButton() {

    var disableButton = document.getElementById("btn1").innerHTML;
    
    if (disableButton == "Disable") {
        document.getElementById("btn1").innerHTML = "Enable";
        console.log("Enable")
    } else if (disableButton == "Enable") {
        document.getElementById("btn1").innerHTML = "Disable";
        console.log("Disable")
    }
    
}
