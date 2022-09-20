let nome = 'geek university'
for(let letra of nome){
    console.log(letra)
}

let numeros = [1,2,3,4,5,6]
for(let numero of numeros){
    console.log(numero * 2 )
}

for(let indice in numeros){
    console.log(`indice: ${indice}, valor: ${numeros[indice]}`)
}

let cursos = new Map([
    [1, 'programação para leigos'],
    [2, 'programação para experts'],
    [3, 'programação em py'],
    [4, 'programação em js'],
])

for(let curso of cursos){
    console.log(`${curso[0]} - ${curso[1]}`)
}

//cache/valor

for(let curso of cursos){
    console.log(curso)
}

//somente a chave
for(let chave of cursos.keys()){
    console.log(chave)
}

//somente o valor
for(let valor of cursos.values()){
    console.log(valor)
}

//chave e valor
for(let [chave, valor] of cursos.entries()){
    console.log(`${chave} - ${valor}`)
}