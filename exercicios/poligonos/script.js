function verificar() {
    var lados = document.querySelector('input#lados')
    var img = document.createElement('img')
    var res = document.querySelector('div#res')
    img.setAttribute('id', 'foto')
       
if (lados.value == 3) {
    res.innerHTML = ('<p>Seu polígono é um triângulo.</p>')
    img.setAttribute('src', 'triangulo.png')
} else if (lados.value == 4) {
    res.innerHTML = ('<p>Seu polígono é um quadrado.</p>')
    img.setAttribute('src', 'quadrado.png')
} else if (lados.value == 5) {
    res.innerHTML = ('<p>Seu polígono é um pentágono.</p>')
    img.setAttribute('src', 'pentagono.png')
} else if (lados.value == 6) {
    res.innerHTML = ('<p>Seu polígono é um hexágono.</p>')
    img.setAttribute('src', 'hexagono.png')
} else if (lados.value == 7) {
    res.innerHTML = ('<p>Seu polígono é um heptágono.</p>')
    img.setAttribute('src', 'heptagono.png')
} else if (lados.value == 8) {
    res.innerHTML = ('<p>Seu polígono é um octágono.</p>')
    img.setAttribute('src', 'octagono.png')
} else if (lados.value == 9) {
    res.innerHTML = ('<p>Seu polígono é um eneágono.</p>')
    img.setAttribute('src', 'eneagono.png')
} else if (lados.value == 10) {
    res.innerHTML = ('<p>Seu polígono é um decágono.</p>')
    img.setAttribute('src', 'decagono.png')
} else {
    alert('[ERRO] Confira o valor digitado!')
}
    res.appendChild(img)
}          