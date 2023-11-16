/* Problemas para desactivar el adblock y recargar la página */


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn1").addEventListener("click", toggleAdBlock);
    document.getElementById("btnClean").addEventListener("click", copiaTextArea);
    document.getElementById("btnCleanReset").addEventListener("click", resetTextArea);

    checkAdBlockStatus();
});

function toggleAdBlock() {
    var button = document.getElementById("btn1");
    var isAdBlockEnabled = button.innerHTML === "Enabled";

    // Toggle state
    chrome.storage.sync.set({ adBlockEnabled: !isAdBlockEnabled }, function() {
        if (chrome.runtime.lastError) {
            console.log("Error saving state:", chrome.runtime.lastError);
        } else {
            // Update button label
            button.innerHTML = isAdBlockEnabled ? "Disabled" : "Enabled";
            console.log("AdBlock state toggled to:", button.innerHTML);

            // Reload the page dont save the disabled status
            //location.reload();
        }
    });
}

function checkAdBlockStatus() {
    /*chrome.storage.sync.get('adBlockEnabled', function(data) {
        var isEnabled = data.adBlockEnabled;
        var button = document.getElementById("btn1");
        if (isEnabled) {
            button.innerHTML = "Disabled";
        } else {
            button.innerHTML = "Enabled";
        }
    });*/
}

function copiaTextArea(){
    // Añade el texto del text area al clipboard
    var copyText = document.getElementById("ta");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function resetTextArea(){
    var prueba = document.getElementById("ta").value = "";
}

/* COPIAR DEL CORTAPAPELES, devuelve problema de permisos */
/*document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.readText().then(text => {
      console.log('Texto copiado:', text); 
    });
  });*/
  