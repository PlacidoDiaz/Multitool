let timer;
let running = false;
let seconds = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', function () {
    if (!running) {
        running = true;
        timer = setInterval(function () {
            seconds++;
            document.getElementById('display').textContent = formatTime(seconds);
        }, 1000);
        this.textContent = 'Pausar';
    } else {
        running = false;
        clearInterval(timer);
        this.textContent = 'Continuar';
    }
});

document.getElementById('stop').addEventListener('click', function () {
    running = false;
    clearInterval(timer);
    document.getElementById('start').textContent = 'Iniciar';
});

document.getElementById('reset').addEventListener('click', function () {
    running = false;
    clearInterval(timer);
    seconds = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('start').textContent = 'Iniciar';
});

// Ejecuta la extension en una pestaña
document.getElementById('web').addEventListener('click', function () {
    chrome.tabs.create({url: 'popup.html'}) 
});


const popupWindow = window.open(
    chrome.runtime.getURL("popup_window.html"),
    "exampleName",
    "width=300,height=300");
    
    var div = document.getElementById('div');
    
    div.innerHTML = '';

    // Crea un nuevo elemento h1
    var textoExtension = document.createElement('h1');
    
    // Establece el texto del nuevo h1
    textoExtension.textContent = 'Continua en la Ventana Emergente...';
    
    // Agrega el nuevo h1 al div
    div.appendChild(textoExtension);