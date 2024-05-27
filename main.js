document.addEventListener("DOMContentLoaded", function(){
    const nameElement = document.querySelector('#name')
    const userName = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')
    const linkElement = document.querySelector('#link')

    //forma pura com XMLHttpRequest()

    // const xhttp = new XMLHttpRequest();
    // const endpoint = `https://api.github.com/users/LuizFKM`

    // xhttp.open('GET', endpoint)
    // xhttp.send();

    // xhttp.onload = function() {
    //     if (xhttp.status === 200) {
    //         const data = JSON.parse(xhttp.responseText);
    //         nameElement.textContent = data.name;
    //         userName.textContent = data.login;
    //         avatarElement.src = data.avatar_url;
    //         reposElement.textContent = data.public_repos;
    //         followersElement.textContent = data.followers;
    //         followingElement.textContent = data.following;
    //         linkElement.href = data.html_url;
    //     } else {
    //         console.error('Erro ao buscar os dados:', xhttp.statusText);
    //     }
    // };

    // xhttp.onerror = function() {
    //     console.error('Erro de rede');
    // };

    fetch('https://api.github.com/users/LuizFKM/oi')
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            nameElement.innerText = json.name;
            userName.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function(erro){
            alert('Não foi possível encontrar o usuário')
        })



})