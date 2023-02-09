var txtnota = ''
function clicar() {
    var notasel = document.getElementsByName('botoes-nota')
    if (notasel[0].checked) {
        txtnota = 1
    } else if (notasel[1].checked) {
        txtnota = 2
    } else if (notasel[2].checked) {
        txtnota = 3
    } else if (notasel[3].checked) {
        txtnota = 4
    } else if (notasel[4].checked) {
        txtnota = 5
    }
    
}
function enviar() {
    if (txtnota.length == 0) {
        window.alert('[ERROR] Invalid rating! Please try again.')
    } else {
        var nota = Number(txtnota)
        var camponota = document.querySelector('span#nota')
        camponota.innerHTML = nota
        camponota.style.font = 'normal'
        var areainicial = document.querySelector('section#nota')
        areainicial.style.display = 'none'
        var areaagradecimento = document.querySelector('section#thanks')
        areaagradecimento.style.display = 'block'
    }
}