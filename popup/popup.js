/* Problemas para desactivar el adblock y recargar la página */


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn1").addEventListener("click", toggleAdBlock);
    document.getElementById("btnClean").addEventListener("click", copiaTextArea);
    document.getElementById("btnCleanReset").addEventListener("click", resetTextArea);

    checkAdBlockStatus();
});

function toggleAdBlock() {
    var button = document.getElementById("btn1");
    var buttonText = button.innerHTML;

    console.log(buttonText);

    if (buttonText === "Disabled") {
        // Deshabilitar AdBlock
        
        chrome.storage.sync.set({ adBlockEnabled: false }, function() {
            if (chrome.runtime.lastError) {
                console.log("Error al guardar en storage:", chrome.runtime.lastError);
            } else {
                console.log("AdBlock Disabled");
                button.innerHTML = "Disabled";
                // Continuar con la lógica posterior
            }
        });
        
        /*chrome.storage.sync.set({ adBlockEnabled: false }, function() {
            button.innerHTML = "Enabled";
            location.reload();
            console.log("AdBlock Disabled");
        });*/
        
    } else if (buttonText === "Enabled") {
    
        chrome.storage.sync.set({ adBlockEnabled: true }, function() {
            if (chrome.runtime.lastError) {
                console.log("Error al guardar en storage:", chrome.runtime.lastError);
            } else {
                console.log("AdBlock Enabled");
                button.innerHTML = "Enabled";
                // Continuar con la lógica posterior
            }
        });
    
        // Habilitar AdBlock
        /*chrome.storage.sync.set({ adBlockEnabled: true }, function() {
            button.innerHTML = "Disable";
            location.runtime.reload()
            console.log("AdBlock Enabled");
        });*/
    }
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
  