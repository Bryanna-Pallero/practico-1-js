const input = document.getElementById('valorInput');
const boton = document.getElementById('verificarBtn');
const mensajeDiv = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    const valor = Number(input.value);

    mensajeDiv.className = 'mensaje';

    if (valor === 100) {
        mensajeDiv.textContent = '¡Correcto! El valor es exactamente igual a 100.';
        mensajeDiv.classList.add('exito');
    }
});