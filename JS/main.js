document.addEventListener('DOMContentLoaded', () => {
    const modoOscuro = document.getElementById('modoOscuro');

    if (modoOscuro) {
        const actualizarTextoBoton = () => {
            const modoOscuroActivo = document.documentElement.classList.contains('modo-dark');
            modoOscuro.textContent = modoOscuroActivo
                ? modoOscuro.dataset.labelDark
                : modoOscuro.dataset.labelLight;
        };

        actualizarTextoBoton();

        modoOscuro.addEventListener('click', () => {
            document.documentElement.classList.toggle('modo-dark');

            if (document.documentElement.classList.contains('modo-dark')) {
                localStorage.setItem('modo-dark', 'enabled');
            } else {
                localStorage.setItem('modo-dark', 'disabled');
            }

            actualizarTextoBoton();
        });
    }
});