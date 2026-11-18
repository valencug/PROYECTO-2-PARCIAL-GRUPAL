document.addEventListener('DOMContentLoaded', () => {
    const modoOscuro = document.getElementById('modoOscuro');

    // Verificamos si el botón existe en esta página antes de agregarle el evento
    if (modoOscuro) {
        modoOscuro.addEventListener('click', () => {
            // Alternamos la clase dark-mode en la etiqueta <html>
            document.documentElement.classList.toggle('modo-dark');

            // Guardamos la preferencia en el localStorage para las demás páginas
            if (document.documentElement.classList.contains('modo-dark')) {
                localStorage.setItem('modo-dark', 'enabled');
            } else {
                localStorage.setItem('modo-dark', 'disabled');
            }
        });
    }
});