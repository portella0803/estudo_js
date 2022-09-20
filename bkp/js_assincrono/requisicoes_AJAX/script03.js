//Axios

let btn = document.querySelector('#btn')
let div = document.querySelector('#app')

btn.onclick = function(){
    //limpar a div
    div.innerHTML = ''

    //criar span
    let spanNome = document.createElement('span')
    //criar o txtNome
    let txtNome = ''

    //recuperar o input
    let github_user = document.querySelector('input[name=github_user]').value

    //GET, POST, PUT, DELETE
    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name)

                let img = document.createElement('img')
                img.setAttribute('src', response.data.avatar_url)
                img.setAttribute('alt', response.data.name)
                img.setAttribute('width', '45px')
                img.setAttribute('heigth', '45px')

                div.appendChild(img)
            }else{
                txtNome = document.createTextNode('o usuário encontrado não possui nome')
            }
            //adiciona o conteudo na div
            spanNome.appendChild(txtNome)
            div.appendChild(spanNome)
        })
        .catch(function(error){
            txtNome = document.createTextNode('não foi possível realizar a busca')
            spanNome.appendChild(txtNome)
            div.appendChild(spanNome)
        })

}