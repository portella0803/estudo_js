/*
- conjuntos não aceitam repetições de valores
- conjuntos não são indexados
*/ 

//declarando um conjunto
let cursos = new Set()

//adicionando valores
cursos.add('programação para leigos')
cursos.add('algoritimos')
cursos.add('algoritimos') //não será duplicado

//adicionar valores concatenados
cursos.add('programação em c').add('programação em java').add('programação em python')

//acessando o tamanho do conjunto
console.log(cursos.size)

//verifica se está no conjunto
console.log(cursos.has('banco de dados'))

//deleta um elemento do conjunto
let ret = cursos.delete('programação para leigos') //se sim ele retorna true se não false
console.log(cursos)

let frutas = ['manga', 'pera', 'uva']
let frutas_unicas = new Set(frutas)
console.log(frutas_unicas)