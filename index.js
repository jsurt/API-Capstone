function getLocalJsonData(searchTerm, callBack) {
    $.getJSON('characters.json', callBack);
}

function gotData(data) {
    const query = $('#searchCharacter').val();
    console.log(data);
    console.log(query);
    $('#searchCharacter').val('');
    for(let i = 0; i < data.length; i++) {
        if(query === data[i].Name) {
            let id = data[i].Id;
            console.log(id);
            $.ajax({
                type: "GET",
                url: `https://anapioficeandfire.com/api/characters/${i}`,
                success: displayCharacterInfo
            });
        }
    }
}

function displayCharacterInfo(data) {
    console.log(data);
    $('.info-results').html(
        `<p class="character-name">${data.name}</p>
        <p class="character-culture">${data.gender}</p>
        <p class="character-culture">${data.culture}</p>`
    );
}

function startSearch() {
    $('#searchForm').submit(function(event){
        event.preventDefault();
        const query = $('#searchCharacter').val();
        getLocalJsonData(query, gotData);
    })
}





startSearch();

