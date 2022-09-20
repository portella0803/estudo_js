// Ajax (XMLHttpRequest) - Asynchronous JavaScript and XML

let btn = document.querySelector('#btn')
let input = document.querySelector('input[name=github_user]')
let div = document.querySelector('#app')

btn.onclick = function(){
    //limpar conteudo da div
    div.innerHTML = ''

    // instanciando objeto ajax
    let ajax = new XMLHttpRequest()

    // abrir uma conexão (GET, POST, PUT, DELETE ...)
    ajax.open('GET', `https://api.github.com/users/${input.value}`)

    //enviar a requisição
    ajax.send(null)

    /*
    ajax.readyState -> 0 => Antes da conexão ser aberta
    ajax.readyState -> 1 => Após abrir a conexão
    ajax.readyState -> 2 => headers (cabeçalhos) foram recebidos
    ajax.readyState -> 3 => Carregando o corpo da requisição (conteudo/dados)
    ajax.readyState -> 4 => O conteudo (dados) está pronto
    */


    ajax.onreadystatechange = function(){
        //criar elemento span
        let spanNone = document.createElement('span')

        //criar a variavel nome
        let txtNome = ''

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                usuario = JSON.parse(ajax.responseText)

                //se o usuario possui none
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name'])

                    let img = document.createElement('img')
                    img.setAttribute('src', usuario['avatar_url'])
                    img.setAttribute('alt', usuario['name'])
                    img.setAttribute('width', '45px')
                    img.setAttribute('height', '45px')

                    div.appendChild(img)
                }else{
                    txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}.`)
                }

                //adiciona o texto ao span e o span a div
                spanNone.appendChild(txtNome)
                div.appendChild(spanNone)

                input.value = ''
            }
        }
    }
}