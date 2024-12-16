const img = document.querySelector('#dog-img')

const btnUp = document.querySelector('#btn-update')

function getDog(){

fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => {
    img.src = data.message
});

}

getDog()

btnUp.addEventListener('click', getDog)


document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
});

