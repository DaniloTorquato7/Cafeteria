function mudandoTema (){
    document.body.classList.toggle('temaClaro');
    document.body.classList.toggle('temaEscuro');
}

document.getElementById("mudarModo").addEventListener('click', mudandoTema);
