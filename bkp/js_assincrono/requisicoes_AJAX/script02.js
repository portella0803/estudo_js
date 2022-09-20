let btn = document.querySelector('#btn')
let div = document.querySelector('#app')

let promise = function(){
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name=github_user]').value
        let ajax = new XMLHttpRequest()
        ajax.open('GET', `https://api.github.com/users/${github_user}`)
        ajax.send(null)

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText))
                }else{
                    reject('Não foi encontrado nenhum usuário com este none.')
                }
            }
        }
    })
}

btn.onclick = function(){
    //limpar a div
    div.innerHTML = ''

    //criar span
    let spanNone = document.createElement('span')

    //criar a variavel none (recebe o texto)
    let txtNome = ''

    //executando a promise
    promise()
        //resolve (sucesso)
        .then(function(response){
            // se o ususario tem none
            if(response['name'] !== null){
                txtNome = document.createTextNode(response['name'])

                let img = document.createElement('img')
                img.setAttribute('src', response['avatar_url'])
                img.setAttribute('alt', response['name'])
                img.setAttribute('width', '45px')
                img.setAttribute('heigth', '45px')
                
                div.appendChild(img)
            }else{
                txtNome = document.createTextNode('O usuário encontrado não possui nome')
            }
            spanNone.appendChild(txtNome)
            div.appendChild(spanNone)
        })
        .catch(function(error){
            txtNome = document.createTextNode(error)
            spanNone.appendChild(txtNome)
            div.appendChild(spanNone)
        })
}