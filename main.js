
function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let cont = 0

while(cont < listaDeTeclas.length) { 

    const tecla = listaDeTeclas[cont]
    const instrumento = tecla.classList[1]

    tecla.onclick = function () {
        tocaSom(`#som_${instrumento}`)
    }

    cont+=1
}
