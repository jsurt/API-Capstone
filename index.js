function getLocalJsonData(searchTerm, callBack) {
    $.getJSON('characters.json', callBack);
}

function gotData(data) {
    console.log(data);
    console.log(query);
    $('#searchCharacter').val('');
    for(let i = 0; i < data.length; i++) {
        if(query === data[i].Name) {
            characterId = i;
            console.log(characterId);
            $.ajax({
                type: "GET",
                url: `characters.json`,
                success: displayCharacterInfo
            });
        }
    }
}

function displayCharacterInfo(data) {
    console.log(data[characterId]);
    $('.info-results').html(
        `<p class="character-name">Name: ${data[characterId].Name}</p>
        <p class="character-culture">Culture: ${data[characterId].Culture}</p>`
    );   
    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        data: {
            part: "snippet",
            key: "AIzaSyAH3n0AVo3RaBhwbs2lNFCQh6UJmluqj-w",
            q: `${query}`
        },
        success: renderYoutubeResults
    });
}

function renderYoutubeResults(data) {
    console.log(data);
    
}

function startSearch() {
    $('#searchForm').submit(function(event){
        event.preventDefault();
        query = $('#searchCharacter').val();
        getLocalJsonData(query, gotData);
    })
}





startSearch();

