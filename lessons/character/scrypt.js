
const characterUrl = 'https://rickandmortyapi.com/api/character/1';  

fetch(characterUrl)
    .then(res => res.json()) 
    .then(data => {
        
        const img = document.getElementById('character-image');
        const name = document.getElementById('character-name');
        const status = document.getElementById('character-status');
        const origin = document.getElementById('character-origin');
        const location = document.getElementById('character-location');
        const locationType = document.getElementById('location-type');//нужен дополнительный .then(res => res.json()) 
        //.then(locationData => ...

       
        img.src = data.image;
        name.textContent = 'Имя: ' + data.name;
        status.textContent = 'Статус: ' + data.status;
        origin.textContent = 'Место происхождения: ' + (data.origin.name);
        location.textContent = 'Местоположение: ' + (data.location.name); 
        
    })
    