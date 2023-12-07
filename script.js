// Funcion Contador de Clics
function ContadorDeClicks() {
    let clickCounter = 0;
    const clickCounterBtn = document.getElementById('clickCounterBtn');

    clickCounterBtn.addEventListener('click', () => {
        clickCounter++;
        alert(`Número de clics: ${clickCounter}`);
    });
}

//Cambiar Estilos Dinámicos
function CambiarEstilosCSSDinamicos() {
    const changeStylesBtn = document.getElementById('changeStylesBtn');

    changeStylesBtn.addEventListener('click', () => {
        //modificaciones de estilos dinámicos 
        document.body.style.backgroundColor = getRandomColor();
    });

    // Función color aleatorio
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
// Funcionalidad Reloj en Tiempo Real
function RelojEnTiempoReal() {
    const clockElement = document.getElementById('real-time-clock');

    function actualizarReloj() {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, '0');
        const minutos = ahora.getMinutes().toString().padStart(2, '0');
        const segundos = ahora.getSeconds().toString().padStart(2, '0');

        const horaActual = `${horas}:${minutos}:${segundos}`;
        clockElement.textContent = horaActual;
    }

    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);

    // Llamada a la función para establecer el reloj inicial
    actualizarReloj();
}

// Llamada a la función al cargar la página
RelojEnTiempoReal();
ContadorDeClicks();
CambiarEstilosCSSDinamicos();
