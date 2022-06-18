
function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(let cont = 0; cont < listaDeTeclas.length; cont++) { 

    const tecla = listaDeTeclas[cont]
    const instrumento = tecla.classList[1]

    tecla.onclick = function () {
        tocaSom(`#som_${instrumento}`)
    }
}
