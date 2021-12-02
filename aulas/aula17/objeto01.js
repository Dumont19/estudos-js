let amigo = {nome:'José', sexo:'M', massa: 85.4, engordar(p) {
    console.log('engordou')
    this.peso += p
}
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.massa} kg.`)